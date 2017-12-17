
import CardinalDatabase from './CardinalDatabase';
import Application from "./Application";

export interface IServerConfig {
	cardinalDatabase: CardinalDatabase,
	application: Application
}

export default class Server {

	constructor(private config: IServerConfig) {

	}

	async start() {

	}

}