/**
 * Created by Святослав on 16.12.2017.
 */
Ext.define('Studio.view.clientApplication.ClientApplication', {
    extend: 'Ext.grid.Panel',
	xtype: 'clientapplication',
	viewModel: 'clientapplication',
	controller: 'clientapplication',
    requires: [
    	'Ext.toolbar.Paging',
        'Studio.view.clientApplication.ClientApplicationModel',
		'Studio.view.clientApplication.ClientApplicationController'
    ],

	title: 'Клиентские приложения',
	selModel: {
    	mode: 'multi'
	},

	bind: {
		store: '{clientApplicationStore}',
		selection: '{selection}'
	},

	listeners: {
		containerclick: 'onContainerClick'
	},

	tbar: [{
		text: 'Добавить',
		handler: 'onAddButtonClick'
	}, {
		text: 'Изменить',
		handler: 'onUpdateButtonClick',
		bind: {
			disabled: '{!selection}'
		}
	}, {
    	text: 'Удалить',
		handler: 'onDeleteButtonClick',
		bind: {
    		disabled: '{!selection}'
		}
	}],

	bbar: {
		xtype: 'pagingtoolbar',
		displayInfo: true
	},

    columns: [{
    	text: 'Название клиента',
		dataIndex: 'name',
		flex: 1
	}, {
		text: 'Описание',
		dataIndex: 'description',
		flex: 1
	}]

});