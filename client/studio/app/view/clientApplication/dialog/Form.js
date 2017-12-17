
Ext.define('Studio.view.clientApplication.dialog.Form', {

    extend: 'Ext.form.Panel',
	xtype: 'clientapplication-dialog-form',

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

	layout: 'anchor',

	defaults: {
		anchor: '100%',
	},

	fieldDefaults: {
		labelAlign: 'top',
		margin: 0
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

});