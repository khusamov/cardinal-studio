
Ext.define('Studio.view.clientappManager.ClientappManager', {

	extend: 'Ext.panel.Panel',
	xtype: 'clientappmanager',
	controller: 'clientappmanager',
	viewModel: {
		data: {
			clientappSelection: null
		}
	},
	requires: [
		'Ext.layout.container.HBox',
		'Studio.view.clientApplication.ClientApplication',
		'Studio.view.clientappManager.ClientappManagerController'
	],

	layout: {
		type: 'hbox',
		align: 'stretch'
	},

	items: [{
		xtype: 'clientapplication',
		flex: 1,
		bind: {
			selection: '{clientappSelection}'
		}
	}, {
		xtype: 'tabpanel',
		flex: 3,
		split: true,
		disabled: true,
		bind: {
			title: 'Клиент "{clientappSelection.name}"',
			disabled: '{!clientappSelection}'
		},
		items: [{
			title: 'index.html',
			tabIndex: 1,
			focusable: true,
			keyMap: {
				'Ctrl+S': 'saveIndexHtml'
			}
		}, {
			title: 'app.js',
			tabIndex: 1,
			focusable: true,
			keyMap: {
				'Ctrl+S': 'saveAppJs'
			}
		}]
	}]

});