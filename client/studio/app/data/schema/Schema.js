
Ext.define('Studio.data.schema.Schema', {

	extend: 'Ext.data.schema.Schema',
	alias: 'schema.cardinalstudio',
	type: 'cardinalstudio',

	namespace: 'Studio.model',

	proxy: {
		url: '{prefix}/{entityName}',
		reader: {
			type: 'json',
			rootProperty: 'data'
		}
	}

});