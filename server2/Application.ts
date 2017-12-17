
import * as Express from 'express';
import * as Cors from 'cors';
import * as BodyParser from 'body-parser';

export interface IApplicationConfig {
	clientPath: string;
}

export default class Application {

	private expressApplication: Express.Application;

	constructor(private config: IApplicationConfig) {
		const app = this.expressApplication = Express();

		app.use(Cors());
		app.use(Express.static(config.clientPath));
		app.use(BodyParser.json());
	}

	initControllers() {
		const app = this.expressApplication;


	}

}