
import * as Http from 'http';

import CardinalDatabase from './CardinalDatabase';
import Application from "./Application";

export interface IServerConfig {
	cardinalDatabase: CardinalDatabase,
	application: Application
}

export default class Server {

	httpServer: Http.Server;

	constructor(private config: IServerConfig) {

	}

	async start(): Promise<string> {
		this.httpServer = Http.createServer(this.config.application.expressApplication);
		this.httpServer.listen(3000);
		const bind = await new Promise<string>((resolve, reject) => {
			this.httpServer.on('error', (error: NodeJS.ErrnoException) => {
				if (error.syscall == 'listen') error = this.processServerError(error);
				reject(error);
			});
			this.httpServer.on('listening', none => {
				resolve(this.getBind());
			});
		});
		return bind;
	}

	protected processServerError(error) {
		switch (error.code) {
			case 'EACCES':
				error = new Error(`Адрес ${this.getBind()} требует повышенных привилегий.`);
				break;
			case 'EADDRINUSE':
				error = new Error(`Адрес ${this.getBind()} уже кем-то используется.`);
				break;
		}
		return error;
	}

	protected getBind(): string {
		const addr = this.httpServer.address();
		if (!addr) return "<not address>";
		if (typeof addr === "string") return `Pipe ${addr}`;
		switch (addr.family) {
			case "IPv6": return `[${addr.address}]:${addr.port}`;
			case "IPv4": return `${addr.address}:${addr.port}`;
		}
	}

}