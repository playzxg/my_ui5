sap.ui.define([
	"sap/ui/base/Object"
], function(Object) {
	"use strict";

	return Object.extend("my_ui5.controller.HelloDialog", {

		_getDialog: function(oView) {
			// create dialog lazily
			if (!this._oDialog) {
				// create dialog via fragment factory
				this._oDialog = sap.ui.xmlfragment("my_ui5.view.HelloDialog", this);
				// connect dialog to view (models, lifecycle)
				oView.addDependent(this._oDialog);
				// forward compact/cozy style into dialog
				jQuery.sap.syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, this._oDialog);
			}
			return this._oDialog;
		},

		open: function(oView) {
			this._getDialog(oView).open();
		},

		onCloseDialog: function() {
			this._getDialog().close();
		}
	});

});