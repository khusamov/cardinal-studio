
Ext.define('Studio.view.clientappManager.ClientappManagerController', {

	extend: 'Ext.app.ViewController',
	alias: 'controller.clientappmanager',

	saveIndexHtml(event) {
		console.log('saveIndexHtml');
		event.stopEvent();

		const formData = new FormData();

		formData.append('index.html', new Blob(['Тестовый текстовый файл.'], {
			type: 'text/html'
		}));

		Ext.Ajax.request({
			method: 'post',
			headers: {
				// Content-Type следует сбрасывать, иначе он будет выставлен как text/plain.
				'Content-Type': null,
				// Здесь можно указывать свои заголовки.
				'Security-Token-SampleHeader': 'Пример пользовательского заголовка'
			},
			url: 'ClientApplication/upload',
			rawData: formData
		});


	},

	saveAppJs(event) {
		console.log('saveAppJs');
		event.stopEvent();
	}

});