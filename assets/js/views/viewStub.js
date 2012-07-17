/*global $, _, Backbone*/
define([
		'jquery',
		'underscore',
		'backbone'
	],
	function(JqueryLib, UnderscoreLib, BackboneLib) {
		"use strict";

		return Backbone.View.extend({
			template : _.template(/*loaded template*/),
			
			initialize : function() {
				this.render();
			},
			
			render : function() {
				this.$el.append(this.template(/*model/collection*/));
				
				return this;
			}
		});
	}
);
