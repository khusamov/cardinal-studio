/**
 * Created by Святослав on 16.12.2017.
 */
Ext.define('Studio.view.clientApplication.dialog.Dialog', {
    extend: 'Ext.window.Window',
	xtype: 'clientapplication-dialog',
	viewModel: 'clientapplication-dialog',
	controller: 'clientapplication-dialog',
    requires: [
    	'Ext.form.Panel',
		'Ext.form.field.Text',
        'Studio.view.clientApplication.dialog.DialogModel',
		'Studio.view.clientApplication.dialog.DialogController',
		'Studio.view.clientApplication.dialog.Form'
    ],

	config: {
		record: null
	},

	updateRecord(record) {
    	this.getViewModel().set('record', record.phantom ? record : record.copy());
	},

	width: 400,
	modal: true,
	bodyPadding: 10,
	resizable: false,

	bind: {
		title: '{title} клиентское приложение',
	},

	buttons: [{
		handler: 'onSubmitButtonClick',
		bind: {
    		text: '{submitButtonText}',
			disabled: '{submitButtonDisabled}'
		}
	}, {
    	text: 'Отмена',
		handler: 'onCancelButtonClick'
	}],

    items: [{
		xtype: 'clientapplication-dialog-form',
		reference: 'form'
	}],

	isDirty() {
    	return this.down('form').isDirty();
	}

});