
import * as Path from 'path';

import Cli from './Cli';
import CardinalDatabase from './CardinalDatabase';
import Server from "./Server";
import Application from "./Application";

(async () => {

	const cli = new Cli();
	await cli.parse();

	// Директория с конфигурацией Кардинала.
	const configDir = Path.isAbsolute(cli.configDir) ? cli.configDir : Path.join(process.cwd(), cli.configDir);
	console.log(`Директория с конфигурацией Кардинала: ${configDir}`);

	const cardinalDatabase = await new CardinalDatabase({
		storage: Path.join(configDir, 'cardinal.sqlite'),
		modelPaths: [Path.join(__dirname, 'models')]
	});
	await cardinalDatabase.start();
	console.log(`База данных с конфигурацией Кардинала подключена: "${cardinalDatabase.config.storage}".`);

	const application = new Application({
		clientPath: Path.join(__dirname, 'client')
	});

	const server = new Server({
		cardinalDatabase,
		application
	});

	await server.start();

})().catch(err => {
	console.error(err);
	process.exit(1);
});