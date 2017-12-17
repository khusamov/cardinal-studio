/**
 * Created by Святослав on 16.12.2017.
 */
Ext.define('Studio.view.clientApplication.ClientApplicationModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.clientapplication',
	requires: ['Studio.model.ClientApplication'],

	data: {
		selection: null
	},

	stores: {
		clientApplicationStore: {
			model: 'Studio.model.ClientApplication',
			autoLoad: true
		}
	}

});