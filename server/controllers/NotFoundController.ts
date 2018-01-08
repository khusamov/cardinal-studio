
import * as Express from 'express';

export interface INotFoundResponse {
	status: number;
	message: string;
}

export default class NotFoundController {

	init(app: Express.Application): this {
		app.use(async (req: Express.Request, res: Express.Response) => {
			res.send(await this.notFound(req, res));
		});
		return this;
	}

	async notFound(req: Express.Request, res: Express.Response): Promise<INotFoundResponse> {
		return {
			status: 404,
			message: `Ресурс "${req.path}" не найден.`
		};
	}

}