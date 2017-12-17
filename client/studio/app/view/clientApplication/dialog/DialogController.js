/**
 * Created by Святослав on 16.12.2017.
 */
Ext.define('Studio.view.clientApplication.dialog.DialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clientapplication-dialog',
	requires: ['Studio.model.ClientApplication'],

	onSubmitButtonClick() {
		if (this.getFormPanel().isValid()) {
			this.getFormPanel().updateRecord();
			this.fireViewEvent('submit', this.getView().getRecord());
		}
	},

	onCancelButtonClick() {
		this.close();
	},
	
	afterRender(view) {
    	this.getFormPanel().loadRecord(view.getRecord());
	},

	privates: {

    	getFormPanel() {
    		return this.getView().down('form');
		},

    	close() {
    		this.getView().close();
		}

	}

});