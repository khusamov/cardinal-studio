
/**
 * Специальный оверрайд для замены urlPrefix во время разработки приложения.
 */
Ext.define('Studio.override.data.Connection', {

	override: 'Ext.data.Connection',

	urlPrefix: 'http://localhost:3000',

	request(options) {
		options.url = options.url.indexOf('://') === -1 ? [this.urlPrefix, options.url].join('/') : options.url;
		return this.callParent(arguments);
	}

});