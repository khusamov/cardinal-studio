/**
 * Created by Святослав on 16.12.2017.
 */
Ext.define('Studio.view.clientApplication.dialog.DialogModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.clientapplication-dialog',

    data: {
		record: null
    },

	formulas: {
    	title(get) {
			return get('record').phantom ? 'Добавить' : 'Обновить';
		},
    	submitButtonText(get) {
    		return get('record').phantom ? 'Добавить' : 'Обновить';
		},
		submitButtonDisabled(get) {
			return !get('form.dirty') || !get('form.valid');
		}
	}

});