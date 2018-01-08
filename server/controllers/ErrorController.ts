
import * as Express from 'express';

export interface IErrorResponse {
	message: string;
	error: any;
}

export default class ErrorController {

	init(app: Express.Application): this {
		app.use(async (err: any, req: Express.Request, res: Express.Response) => {
			res.status(500).send(await this.error(err, req, res));
		});
		return this;
	}

	async error(err: any, req: Express.Request, res: Express.Response): Promise<IErrorResponse> {
		return {
			message: 'Ошибка на сервере',
			error: err
		};
	}

}