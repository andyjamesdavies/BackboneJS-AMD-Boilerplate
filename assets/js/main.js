/*global require*/
(function() {
	"use strict";
	
	var libsPath = '../../libs/js/'; //libsPath relative to 'basePath'
	
	require.config({
		paths : {
			jquery : libsPath + 'jquery',		//return module but also keeps it in the global scope
			underscore : libsPath + 'underscore',
			backbone : libsPath + 'backbone'
		},
		baseUrl : 'assets/js',
		urlArgs: "bust=" +  (new Date()).getTime()	//cache-busting for development
	});
	
	require(['app'],
		function(App) {
			App.initialize();
		}
	);
})();
