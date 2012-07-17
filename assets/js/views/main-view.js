/*global $, _, Backbone*/
define([
		'jquery',
		'underscore',
		'backbone',
		'text!templates/main.html'
	],
	function(JqueryLib, UnderscoreLib, BackboneLib, MainTemplate) {
		"use strict";
		
		return Backbone.View.extend({
			template : _.template(MainTemplate),
			
			initialize : function() {
				
				this.render();
			},
			
			render : function() {
				this.$el.append(this.template({}));
				
				return this;
			}
		});
	}
);
