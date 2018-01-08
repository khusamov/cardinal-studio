
import * as Express from 'express';
import * as Cors from 'cors';

import ClientApplicationController from './controllers/ClientApplicationController';
import NotFoundController from "./controllers/NotFoundController";
import ErrorController from "./controllers/ErrorController";

export interface IApplicationConfig {
	clientPath: string;
}

export default class Application {

	public expressApplication: Express.Application;

	constructor(private config: IApplicationConfig) {
		const app = this.expressApplication = Express();
		app.use(Cors());
		app.use(Express.static(config.clientPath));
		app.use(Express.json());
		app.use(Express.urlencoded());
		this.initControllers();
	}

	initControllers() {
		const app = this.expressApplication;
		new ClientApplicationController().init(app);
		new NotFoundController().init(app);
		new ErrorController().init(app);
	}

}