
Ext.define('Studio.data.schema.Schema', {

	extend: 'Ext.data.schema.Schema',
	alias: 'schema.cardinalstudio',
	type: 'cardinalstudio',
	requires: ['Ext.data.proxy.Rest'],

	namespace: 'Studio.model',

	proxy: {
		type: 'rest',
		appendId: false,
		url: '{prefix}/{entityName}',
		reader: {
			type: 'json',
			rootProperty: 'data'
		}
	}

});