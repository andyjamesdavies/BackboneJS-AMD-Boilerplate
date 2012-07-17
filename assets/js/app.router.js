/*global _, Backbone*/
define([
		'underscore',
		'backbone'
	],
	function(UnderscoreLib, BackboneLib) {
		"use strict";
		
		return Backbone.Router.extend({
			
			routes: {
				"*other" : 'index'
			},
			
			initialize: function () {
				_.bindAll(this, 'index');
			},
			
			moveTo: function (location) {
				if (this.routes[location] !== undefined) {
					this.navigate('/' + location);
					this[this.routes[location]].call();
				}
			},
			
			index: function () {
				
			}
		});
	}
);
