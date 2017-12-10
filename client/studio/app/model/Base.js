
Ext.define('Studio.model.Base', {

	extend: 'Ext.data.Model',
	requires: ['Studio.data.schema.Schema'],
	schema: 'cardinalstudio',

	fields: [{
		name: 'id',
		type: 'integer'
	}]

});