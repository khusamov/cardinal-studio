
Ext.define('Studio.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

	initViewModel(vm) {
    	console.log('initViewModel')
		vm.bind('{clientApplicationGrid.selection}', console.log);
		vm.bind('{clientApplicationGrid.selection.name}', console.log);
	},

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
