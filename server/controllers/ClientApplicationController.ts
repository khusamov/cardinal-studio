
import * as Express from 'express';
import ClientApplicationModel from '../models/ClientApplication';

export interface IClientApplicationGetResponse {
	data: ClientApplicationModel[]
}

export interface IClientApplicationPostResponse {
	data?: ClientApplicationModel
}

export interface IClientApplicationDeleteResponse {}
export interface IClientApplicationUpdateResponse {}
export interface IClientApplicationUploadFileResponse {}

export default class ClientApplicationController {

	init(app: Express.Application): this {
		app.get('/ClientApplication', async (req: Express.Request, res: Express.Response) => {
			res.send(await this.getAll(req, res));
		});
		app.post('/ClientApplication', async (req: Express.Request, res: Express.Response) => {
			res.send(await this.createOne(req, res));
		});
		app.put('/ClientApplication', async (req: Express.Request, res: Express.Response) => {
			res.send(await this.updateOne(req, res));
		});
		app.delete('/ClientApplication', async (req: Express.Request, res: Express.Response) => {
			res.send(await this.deleteOne(req, res));
		});
		app.post('/ClientApplication/uploadFile', async (req: Express.Request, res: Express.Response) => {
			res.send(await this.uploadFile(req, res));
		});
		return this;
	}

	async getAll(req: Express.Request, res: Express.Response): Promise<IClientApplicationGetResponse> {
		return {
			data: await ClientApplicationModel.findAll({
				offset: req.query.start || 0,
				limit: req.query.limit || 0
			})
		};
	}

	async createOne(req: Express.Request, res: Express.Response): Promise<IClientApplicationPostResponse> {
		const clientApplication = new ClientApplicationModel({
			name: req.body.name,
			description: req.body.description
		});
		return {
			data: await clientApplication.save()
		};
	}

	async updateOne(req: Express.Request, res: Express.Response): Promise<IClientApplicationUpdateResponse> {
		const clientApplication = await ClientApplicationModel.findById(req.body.id);
		await clientApplication.update({
			name: req.body.name,
			description: req.body.description
		});
		return {};
	}

	async deleteOne(req: Express.Request, res: Express.Response): Promise<IClientApplicationDeleteResponse> {
		const clientApplication = await ClientApplicationModel.findById(req.body.id);
		await clientApplication.destroy();
		return {};
	}

	async uploadFile(req: Express.Request, res: Express.Response): Promise<IClientApplicationUploadFileResponse> {
		return {};
	}

}