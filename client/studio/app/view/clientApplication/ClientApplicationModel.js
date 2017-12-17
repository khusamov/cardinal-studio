/**
 * Created by Святослав on 16.12.2017.
 */
Ext.define('Studio.view.clientApplication.ClientApplicationModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.clientapplication',
	requires: ['Studio.model.ClientApplication'],

	stores: {
		clientApplicationStore: {
			model: 'Studio.model.ClientApplication',
			autoLoad: true
		}
	},

    data: {
		selection: null
    }
});