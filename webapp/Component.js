sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"my_ui5/controller/HelloDialog"
], function(UIComponent, JSONModel, HelloDialog) {
	"use strict";
	return UIComponent.extend("my_ui5.Component", {
		metadata: {
			manifest: "json"
		},
		init: function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			// set data model
			var oData = {
				recipient: {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			// set dialog
			this.helloDialog = new HelloDialog();
			// create the views based on the url/hash
			this.getRouter().initialize();
		},

		exit: function() {
			this.helloDialog.destroy();
		}
	});
});