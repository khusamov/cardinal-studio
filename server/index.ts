
import * as Path from 'path';
import * as Program from 'commander';

import { Sequelize } from 'sequelize-typescript';
import Server from './Server';

Program
	.option('--config-dir <path>', 'Директория с конфигурацией')
	.parse(process.argv);

if (!Program.configDir) {
	console.error('Не задана опция --config-dir.');
	process.exit(1);
}



// Директория с конфигурацией.
const configDir = Path.isAbsolute(Program.configDir) ? Program.configDir : Path.join(process.cwd(), Program.configDir);
console.log(`Директория с конфигурацией: ${configDir}`);



const cardinalConfigDatabaseDir = Path.join(configDir, 'cardinal.sqlite');
const sequelize = new Sequelize({
    // logging: false,
    database: '',
    username: '',
    password: '',
    dialect: 'sqlite',
    storage: cardinalConfigDatabaseDir,
    modelPaths: [Path.join(__dirname, 'model')]
});

(async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`База данных с настройками конфигурации подключена: "${cardinalConfigDatabaseDir}".`);
	await new Server().start();
})();

