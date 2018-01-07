
import * as Express from 'express';
import * as Cors from 'cors';

import ClientApplicationController from './controllers/ClientApplicationController';

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
	}

}