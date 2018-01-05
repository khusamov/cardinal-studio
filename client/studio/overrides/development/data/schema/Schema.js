
/**
 * Специальный оверрайд для замены urlPrefix во время разработки приложения.
 */
Ext.define('Studio.override.data.schema.Schema', {

	override: 'Studio.data.schema.Schema',

	urlPrefix: 'http://localhost:3000'

});