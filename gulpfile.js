
const Gulp = require('gulp');
const ChildProcess = require('child_process');
const Path = require('path');
const ts = require('gulp-typescript');

Gulp.task('sencha-app-build', function() {
	return new Promise((resolve, reject) => {
		const appPath = Path.join(__dirname, 'client/studio');
		console.log(`Сборка клиента: sencha app build ${appPath}`);
		const senchaAppBuild = ChildProcess.exec('sencha app build', {
			cwd: appPath
		});
		senchaAppBuild.on('error', reject);
		senchaAppBuild.on('exit', code => {
			console.log(`Сборка завершена с кодом '${code}'.`);
			resolve();
		});
	}).then(none => {
		return Gulp.src('client/build/production/Studio/**/*.*').pipe(Gulp.dest('dist/client'));
	});
});


Gulp.task('tsc', function() {
	const tsConfigPath = 'tsconfig.json';
	const tsConfig = require(`./${tsConfigPath}`);
	const outDir = tsConfig.compilerOptions.outDir || 'dist';
	const tsProject = ts.createProject(tsConfigPath, {
		declaration: true
	});
	const tsResult = tsProject.src().pipe(tsProject());
	return tsResult.js.pipe(Gulp.dest(outDir));
});


Gulp.task('default', ['tsc', 'sencha-app-build']);