"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var AjaxGet = function AjaxGet(method, url, callback) {

	var xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
	xhr.withCredentials = false;
	xhr.send();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
			callback(JSON.parse(xhr.responseText));
		} else {
			callback({

				errno: false

			});
		}
	};
};
exports.default = AjaxGet;