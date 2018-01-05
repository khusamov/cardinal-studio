
Ext.define('Studio.view.clientApplication.ClientApplicationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clientapplication',
	requires: [
		'Studio.view.clientApplication.dialog.Dialog'
	],

	onContainerClick(grid, event) {
		grid.getSelectionModel().deselectAll();
	},

	onInsertButtonClick() {
    	const record = this.getStore('clientApplicationStore').getModel().create();
		this.createDialog(record);
	},

	onUpdateButtonClick() {
		const updated = this.getView().getSelection();
		this.createDialog(updated[0]);
	},

	createDialog(record) {
		Ext.create({
			xtype: 'clientapplication-dialog',
			autoShow: true,
			record,
			listeners: {
				submit: 'onClientApplicationDialogSubmit',
				scope: this
			}
		});
	},

	onClientApplicationDialogSubmit(dialog, clientApplication) {
		let action = clientApplication.phantom ? 'insert' : 'update';
		Ext.Msg.wait(
			`Данные ${{insert: 'добавляются', update: 'обновляются'}[action]}! Подождите...`,
			{insert: 'Добавление', update: 'Обновление'}[action]
		);
		(dialog.isDirty() ? this[action](clientApplication) : Ext.Promise.resolve()).then(() => {
			Ext.Msg.hide();
			dialog.close();
		}).catch(err => {
			Ext.Msg.hide();
			Ext.Msg.alert('Ошибка', err.message);
			console.dir(err);
		});
	},

	insert(clientApplication) {
		return new Ext.Promise((resolve, reject) => {
			clientApplication.save({
				success: resolve,
				failure(record, operation) {
					const err = new Error('Произошла ошибка при добавлении!');
					err.operation = operation;
					reject(err);
				}
			});
		}).then(clientApplication => {
			this.getStore('clientApplicationStore').add(clientApplication);
		});
	},

	update(clientApplication) {
		return new Ext.Promise((resolve, reject) => {
			this.getStore('clientApplicationStore').sync({
				success: resolve,
				failure(batch, options) {
					const err = new Error('Произошла ошибка при обновлении!');
					err.batch = batch;
					err.options = options;
					reject(err);
				}
			});
		});
	},

	onDeleteButtonClick() {
    	const deleted = this.getView().getSelection();
		const names = deleted.map(record => record.get('name')).join(', ');
    	Ext.Msg.show({
			title: 'Удалить?',
			message: `Удалить "${names}"?`,
			buttons: Ext.Msg.YESNO,
			icon: Ext.Msg.QUESTION,
			fn: button => {
				if (button === 'yes') {
					this.delete(deleted);
				}
			}
		});
	},

	delete(records) {
    	this.getStore('clientApplicationStore').remove(records);
		this.getStore('clientApplicationStore').sync();
	}

});