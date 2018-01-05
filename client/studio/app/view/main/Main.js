
Ext.define('Studio.view.main.Main', {

    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
	controller: 'main',
	viewModel: 'main',
    requires: [
    	'Ext.tab.Panel',
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Studio.view.main.MainController',
        'Studio.view.main.MainModel',
		'Studio.view.clientappManager.ClientappManager'
    ],

	bind: {
    	title: '{name}'
	},

    items: [{
    	title: 'Клиенты',
		xtype: 'clientappmanager'
    }, {
        title: 'Сервера',
        bind: {
            html: '{loremIpsum}'
        }
	}, {
		title: 'SQL-запросы',
		bind: {
			html: '{loremIpsum}'
		}
	}, {
		title: 'Подключения к БД',
		bind: {
			html: '{loremIpsum}'
		}
    }]
});
