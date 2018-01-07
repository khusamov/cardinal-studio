
import * as Program from 'commander';

export default class Cli {

	configDir: string;

	constructor() {

	}

	async parse(): Promise<this> {

		Program
			.option('--config-dir <path>', 'Директория с конфигурацией')
			.parse(process.argv);

		if (!Program.configDir) throw new Error('Не задана опция --config-dir.');

		this.configDir = Program.configDir;

		return this;

		// return Promise.resolve().then(() => {
		// 	Program
		// 		.option('--config-dir <path>', 'Директория с конфигурацией')
		// 		.parse(process.argv);
		// 	if (!Program.configDir) throw new Error('Не задана опция --config-dir.');
        //
		// 	this.configDir = Program.configDir;
        //
		// 	return this;
		// });
	}

}