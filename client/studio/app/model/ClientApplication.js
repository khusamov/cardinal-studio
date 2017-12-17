
Ext.define('Studio.model.ClientApplication', {

	extend: 'Studio.model.Base',

	fields: [{
		name: 'createdAt',
		type: 'date'
	}, {
		name: 'updatedAt',
		type: 'date'
	}, {
		name: 'name',
		type: 'string'
	}, {
		name: 'description',
		type: 'string'
	}]

});