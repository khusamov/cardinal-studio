
import * as Path from 'path';
import { ServerLoader, ServerSettings } from 'ts-express-decorators';
import 'ts-express-decorators/multipartfiles';

import * as Express from "express";
import * as Cors from 'cors';
import * as BodyParser from 'body-parser';

import GlobalErrorHandlerMiddleware from './middleware/GlobalErrorHandlerMiddleware';
// import { GlobalErrorHandlerMiddleware } from 'ts-express-decorators';

@ServerSettings({
	rootDir: Path.resolve(__dirname),
	port: 'localhost:3000',
	httpsPort: false,
	// TODO Разобраться почему опция serveStatic не срабатывает как нужно.
	// serveStatic: {
	// 	'/': '${rootDir}/client'
	// },
	mount: {
		'/': '${rootDir}/controller/**/*.js'
	},
	multer: {}
})
export default class Server extends ServerLoader {

	$onMountingMiddlewares(): void | Promise<any> {
		this.use(Cors());
		this.use(Express.static(Path.join(__dirname, 'client')));
		this.use(BodyParser.json());
		this.use(BodyParser.urlencoded({
			extended: true
		}));
	}

	$onReady() {
		const address = `http://${this.httpServer.address().address}:${this.httpServer.address().port}`;
		console.log(`Сервер Кардинал Студио включен. Для просмотра результата работы программы зайдите на ${address}`);
	}

	$onServerInitError(err) {
		console.error(err);
	}

	$afterRoutesInit() {
		this.use(GlobalErrorHandlerMiddleware);
	}

}