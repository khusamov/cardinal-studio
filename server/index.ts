
import * as Path from 'path';
import * as ReadPackage from 'read-pkg';

import Cli from './Cli';
import Server from './Server';
import CardinalDatabase from './CardinalDatabase';


(async () => {

	const pkg = await ReadPackage();
	console.log([pkg.description, `Версия ${pkg.version}`].join('. '));

	const cli = new Cli();
	await cli.parse();

	// Директория с конфигурацией Кардинала.
	const configDir = Path.isAbsolute(cli.configDir) ? cli.configDir : Path.join(process.cwd(), cli.configDir);
	console.log(`Директория с конфигурацией Кардинала: ${configDir}`);

	// Подключение базы данных Кардинала из директории с конфигурацией.
	// Если базы нет, то создается новая.
	const cardinalDatabase = await new CardinalDatabase({
		storage: Path.join(configDir, 'cardinal.sqlite'),
		modelPaths: [Path.join(__dirname, 'model')]
	});
	await cardinalDatabase.start();
	console.log(`База данных с конфигурацией Кардинала подключена: "${cardinalDatabase.config.storage}".`);

	// Запуск сервера.
	const uploadDir = Path.join(configDir, 'upload');
	const server = new Server();
	server.settings.uploadDir = uploadDir;
	console.log(`Директория upload: ${uploadDir}`);
	await server.start();

})().catch(err => {
	console.error(err);
	process.exit(1);
});