
import * as Path from 'path';
import * as ReadPackage from 'read-pkg';

import Cli from './Cli';
import Server from './Server';
import Application from './Application';
import CardinalDatabase from './CardinalDatabase';


(async () => {

	const pkg = await ReadPackage();
	console.log(`${pkg.name}: ${pkg.description}\nВерсия ${pkg.version}\n`);

	const cli = await new Cli().parse();

	// Директория с конфигурацией Кардинала.
	const configDir = Path.isAbsolute(cli.configDir) ? cli.configDir : Path.join(process.cwd(), cli.configDir);
	console.log(`Директория с конфигурацией Кардинала: ${configDir}`);

	// Подключение базы данных Кардинала из директории с конфигурацией.
	// Если базы нет, то создается новая.
	const cardinalDatabase = await new CardinalDatabase({
		storage: Path.join(configDir, 'cardinal.sqlite'),
		modelPaths: [Path.join(__dirname, 'models')]
	});
	await cardinalDatabase.start();
	console.log(`База данных с конфигурацией Кардинала подключена: "${cardinalDatabase.config.storage}".`);

	// Создание приложения.
	const application = new Application({
		clientPath: Path.join(__dirname, 'client')
	});

	// Запуск сервера.
	const uploadDir = Path.join(configDir, 'upload');
	console.log(`Директория upload: ${uploadDir}`);
	const server = new Server({
		cardinalDatabase,
		application
	});
	await server.start();

})().catch(err => {
	console.error(err);
	process.exit(1);
});