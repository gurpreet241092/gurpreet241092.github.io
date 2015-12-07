var app = app || {};

app.allDistrictView = Backbone.View.extend({

	el: "#allDistrictFilters",

    events : {
        'click input.districtFilter': 'showDistrictOnMap'
    },

    initialize: function(options){
        if(!this.collection) return;
        this.allDistrictPolygon = this.allDistrictPolygon || options.allDistrictPolygon;
        this.render();
        this.initMapView();
    },

    render : function(){
        this.collection.each(this.addDistrict,this);
        return this;
    },

    addDistrict : function(district){
        var districtView = new app.singleDistrictView({model:district});
        this.$el.append(districtView.render().el);
    },

    // Initializing Map View
    initMapView: function(){
        this.mapView = new app.mapView({
            collection : this.collection,
            allDistrictPolygon: this.allDistrictPolygon,
            parentView : this
        });
    },

    // Will show the corresponding district on map.
    showDistrictOnMap:function(e){
        var target = $(e.target);
        var districtId = target.val();
        if(target.is(":checked")){
            this.mapView.showDistrictPolygon(districtId);
        }else{
            this.mapView.hideDistrictPolygon(districtId);
        }
    },

    // This was my earlier approach. Not using this function now.
    showDistrictOnMap2: function(){
        var districtChecked = this.$el.find("input.districtFilter:checked");
        var districtValues  = [];

        _.each(districtChecked,function(district){
            districtValues.push($(district).val());
        });
        this.mapView.showDistrictPolygon(districtValues);
    }

});