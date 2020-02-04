/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Nm/Zui5_plain/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});