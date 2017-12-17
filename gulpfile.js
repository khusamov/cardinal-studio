
const Path = require('path');
const ChildProcess = require('child_process');

const Gulp = require('gulp');
const GulpSequence = require('gulp-sequence');
const ts = require('gulp-typescript');

Gulp.task('copy-package-json', function() {
	Gulp.src('package.json').pipe(Gulp.dest('dist'));
});

Gulp.task('client:sencha-app-build', function() {
	return new Promise((resolve, reject) => {
		const appPath = Path.join(__dirname, 'client/studio');
		console.log(`Сборка клиента: sencha app build ${appPath}`);
		const senchaAppBuild = ChildProcess.exec('sencha app build', {
			cwd: appPath
		});
		senchaAppBuild.on('error', reject);
		senchaAppBuild.on('exit', code => {
			if (new Number(code).valueOf() == 0) {
				console.log(`Сборка успешно завершена.`);
				resolve();
			} else {
				console.log(`Сборка завершена с кодом ошибки '${code}'.`);
				reject(new Error(`Сборка завершена с кодом ошибки '${code}'.`));
			}
		});
	}).then(none => {
		return Gulp.src('client/build/production/Studio/**/*.*').pipe(Gulp.dest('dist/client'));
	});
});


Gulp.task('server:tsc', function() {
	const tsConfigPath = 'tsconfig.json';
	const tsConfig = require(`./${tsConfigPath}`);
	const outDir = tsConfig.compilerOptions.outDir || 'dist';
	const tsProject = ts.createProject(tsConfigPath, {
		declaration: true
	});
	const tsResult = tsProject.src().pipe(tsProject());
	return tsResult.js.pipe(Gulp.dest(outDir));
});


Gulp.task('default', GulpSequence('copy-package-json', 'server:tsc', 'client:sencha-app-build'));