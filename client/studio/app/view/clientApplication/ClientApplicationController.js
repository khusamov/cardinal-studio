/**
 * Created by Святослав on 16.12.2017.
 */
Ext.define('Studio.view.clientApplication.ClientApplicationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clientapplication',
	requires: [
		'Studio.model.ClientApplication',
		'Studio.view.clientApplication.dialog.Dialog'
	],

	onContainerClick(grid, event) {
		grid.getSelectionModel().deselectAll();
	},

	onAddButtonClick() {
		Ext.create({
			xtype: 'clientapplication-dialog',
			autoShow: true,
			record: this.getStore('clientApplicationStore').getModel().create(),
			listeners: {
				submit: 'onClientApplicationDialogSubmit',
				scope: this
			}
		});
	},

	onClientApplicationDialogSubmit(dialog, clientApplication) {
		if (clientApplication.phantom) {
			this.insert(dialog, clientApplication);
		} else if (dialog.isDirty()) {
			this.update(dialog, clientApplication);
		} else {
			dialog.close();
		}
	},

	insert(dialog, clientApplication) {
		const me = this;
		Ext.Msg.wait("Данные добавляются! Подождите...", "Добавление");
		clientApplication.save({
			success(record) {
				me.getStore('clientApplicationStore').add(clientApplication);
				Ext.Msg.hide();
				dialog.close();
			},
			failure(record, operation) {
				Ext.Msg.hide();
				Ext.Msg.alert("Ошибка", "Произошла ошибка при добавлении!");
				console.error("Произошла ошибка при добавлении!", record, operation);
			}
		});
	},

	update(dialog, clientApplication) {
		Ext.Msg.wait("Данные обновляются! Подождите...", "Обновление");
		this.getStore('clientApplicationStore').sync({
			success() {
				Ext.Msg.hide();
				dialog.close();
			},
			failure(batch, options) {
				Ext.Msg.hide();
				Ext.Msg.alert("Ошибка", "Произошла ошибка при обновлении!");
				console.error("Произошла ошибка при обновлении!", batch, options);
			}
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
	},

	onUpdateButtonClick() {
		const updated = this.getView().getSelection();
		Ext.create({
			xtype: 'clientapplication-dialog',
			autoShow: true,
			record: updated[0],
			listeners: {
				submit: 'onClientApplicationDialogSubmit',
				scope: this
			}
		});
	}

});