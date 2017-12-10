
import * as Express from 'express';
import { Controller, Get } from 'ts-express-decorators';

export interface IPersonnel {
	name: string;
	email: string;
	phone: string;
}

export interface IPersonnelGetResponse {
	data: IPersonnel[]
}

@Controller('/Personnel')
export class PersonnelController {

	@Get('/')
	async getAll(request: Express.Request, response: Express.Response): Promise<IPersonnelGetResponse> {
		const data = [
			{ name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
			{ name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
			{ name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
			{ name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
		];
		return { data };
	}

}