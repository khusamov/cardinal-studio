
import * as Express from 'express';
import { Next, Controller, Get, Post, Delete, Put, QueryParams, BodyParams, Required } from 'ts-express-decorators';
import ClientApplication from '../model/ClientApplication';

export interface IClientApplicationGetResponse {
	data: any[]
}

export interface IClientApplicationPostResponse {
	data?: ClientApplication
}

export interface IClientApplicationDeleteResponse {

}

export interface IClientApplicationUpdateResponse {

}

@Controller('/ClientApplication')
export class ClientApplicationController {

	@Get('/')
	async getAll(
		@QueryParams('start') offset: number,
		@QueryParams('limit') limit: number
	): Promise<IClientApplicationGetResponse> {
		return {
			data: await ClientApplication.findAll({offset, limit})
		};
	}

	@Post('/')
	async createOne(
		@BodyParams('name') @Required name: string,
		@BodyParams('description') @Required description: string
	): Promise<IClientApplicationPostResponse> {
		const clientApplication = new ClientApplication({name, description});
		return {
			data: await clientApplication.save()
		};
	}

	@Put('/')
	async update(
		@BodyParams('id') @Required id: string,
		@BodyParams('name') @Required name: string,
		@BodyParams('description') @Required description: string
	): Promise<IClientApplicationUpdateResponse> {
		const clientApplication = await ClientApplication.findById(id);
		await clientApplication.update({name, description});
		return {};
	}

	@Delete('/')
	async delete(@BodyParams('id') @Required id: string): Promise<IClientApplicationDeleteResponse> {
		const clientApplication = await ClientApplication.findById(id);
		await clientApplication.destroy();
		return {};
	}

}