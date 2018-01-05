
Ext.define('Studio.view.clientappManager.ClientappManagerController', {

	extend: 'Ext.app.ViewController',
	alias: 'controller.clientappmanager',

	saveIndexHtml(event) {
		console.log('saveIndexHtml');
		event.stopEvent();
	},

	saveAppJs(event) {
		console.log('saveAppJs');
		event.stopEvent();
	}

});