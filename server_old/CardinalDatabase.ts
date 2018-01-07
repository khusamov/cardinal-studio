
import * as Path from 'path';
import { Sequelize } from 'sequelize-typescript';

export interface ICardinalDatabaseConfig {
	storage: string;
	modelPaths: string[]
}

export default class CardinalDatabase {

	private sequelize;

	constructor(public config: ICardinalDatabaseConfig) {
		this.sequelize = new Sequelize({
			// logging: false,
			database: '',
			username: '',
			password: '',
			dialect: 'sqlite',
			storage: config.storage,
			modelPaths: [Path.join(__dirname, 'model')]
		});
	}

	async start() {
		await this.sequelize.authenticate();
		await this.sequelize.sync();
	}

}