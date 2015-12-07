var app = app || {};

// Single  District Model for my assignment
app.singleDistrictModel = Backbone.Model.extend({

	defaults : {
		id    : "00",
		title : "D0 District in Singapore"
	},

	initialize : function(){
		this.on("change", function(){
			console.log("Model changed ")
		});
	}

});