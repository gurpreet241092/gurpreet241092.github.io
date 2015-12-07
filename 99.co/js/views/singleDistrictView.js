var app = app || {};

app.singleDistrictView = Backbone.View.extend({

	className : "district",

	template : {
		'main'    : _.template( $("#districtElement").html() )
	},

	render : function(){
		var singleDistrictTemplate = this.template['main'](this.model.toJSON());
		this.$el.html(singleDistrictTemplate);
		this.$el.attr('id',this.model.get('id')).addClass("inline");
		return this;
	}

});