
Ext.define('Studio.view.clientApplication.ActionBar', {

	extend: 'Ext.toolbar.Toolbar',
	xtype: 'clientapplication-actionbar',

	initComponent() {
		this.callParent(arguments);
		this.up().on('selectionchange', 'onSelectionChange', this);
	},

	viewModel: {
		data: {
			hasSelection: null
		}
	},

	onSelectionChange(grid, selected) {
		this.getViewModel().set('hasSelection', !!selected.length);
	},

	items: [{
		text: 'Добавить',
		handler: 'onInsertButtonClick'
	}, {
		text: 'Изменить',
		handler: 'onUpdateButtonClick',
		bind: {
			disabled: '{!hasSelection}'
		}
	}, {
		text: 'Удалить',
		handler: 'onDeleteButtonClick',
		bind: {
			disabled: '{!hasSelection}'
		}
	}]

});