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
		'Studio.view.clientApplication.ClientApplicationController',
		'Studio.view.clientApplication.ActionBar'
    ],

	title: 'Клиентские приложения',
	selModel: {
    	mode: 'multi'
	},

	bind: '{clientApplicationStore}',

	listeners: {
		containerclick: 'onContainerClick'
	},

	tbar: {
    	xtype: 'clientapplication-actionbar'
	},

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