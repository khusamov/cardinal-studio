
Ext.define('Studio.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
	requires: ['Studio.model.Personnel'],

    title: 'Personnel',

	bind: '{personnelStore}',

	viewModel: {
    	stores: {
			personnelStore: {
				model: 'Studio.model.Personnel',
				autoLoad: true
			}
		}
	},

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

	bbar: {
		xtype: 'pagingtoolbar',
		displayInfo: true
	},

    listeners: {
        select: 'onItemSelected'
    }
});
