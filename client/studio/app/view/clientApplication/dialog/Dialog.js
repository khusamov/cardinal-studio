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
		'Studio.view.clientApplication.dialog.DialogController'
    ],

	config: {
		record: null
	},

	updateRecord(record) {
    	this.getViewModel().set('record', record.phantom ? record : record.copy());
	},

	width: 400,
	modal: true,

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
		xtype: 'form',
		reference: 'form',
		publishes: ['valid', 'dirty'],
		trackResetOnLoad: true,
		listeners: {
			render(form) {
				this.publishState('dirty', this.isDirty());
				this.publishState('valid', !this.hasInvalidField());
			},
			dirtychange(form, dirty) {
				this.publishState('dirty', dirty);
			},
			validitychange(form, valid) {
				this.publishState('valid', valid);
			}
		},
		items: [{
			fieldLabel: 'Название клиентского приложения',
			xtype: 'textfield',
			allowBlank: false,
			name: 'name'
		}, {
			fieldLabel: 'Описание',
			xtype: 'textareafield',
			name: 'description'
		}]
	}],

	isDirty() {
    	return this.down('form').isDirty();
	}

});