var app = app || {};

app.mapView = Backbone.View.extend({

    el: "#map",

    events: {

    },

    initialize: function(options){
        this.parentView = options.parentView;
        this.allDistrictPolygon = options.allDistrictPolygon;
        this.allMapPolygon = {};
    },

    showDistrictPolygon: function(districtId){
        var district = this.allDistrictPolygon[districtId];
        this.allMapPolygon[districtId] = {};
        var ref = district.polygons;
        for (j = 0, len1 = ref.length; j < len1; j++) {
            this.allMapPolygon[districtId][j] = {};
            var polygon = ref[j];
            for (k = 0, len2 = polygon.length; k < len2; k++) {
                this.allMapPolygon[districtId][j][k] = {};
                var line = polygon[k];
                var decodedPath = google.maps.geometry.encoding.decodePath(line.points);
                mapPolygon = new google.maps.Polygon({
                    paths: [decodedPath],
                    strokeColor: "#60A9E1",
                    strokeOpacity: 1,
                    strokeWeight: 2,
                    fillColor: "#3893d9",
                    fillOpacity: 0.15,
                    zIndex: -2
                });
                mapPolygon.setMap(app.map);
                this.allMapPolygon[districtId][j][k]["mapPolygon"] = mapPolygon;
                this.allMapPolygon[districtId][j][k]["markers"] = [];

                // get feeds and other stuff.
                this.getActivityInRegion(decodedPath,this.allMapPolygon[districtId][j][k]);
            }
        }
    },

    hideDistrictPolygon: function(districtId){
        var district = this.allDistrictPolygon[districtId];
        var ref = district.polygons;
        for (j = 0, len1 = ref.length; j < len1; j++) {
            polygon = ref[j];
            for (k = 0, len2 = polygon.length; k < len2; k++) {
                this.allMapPolygon[districtId][j][k]["mapPolygon"].setMap(null);
                this.removeMarkers(this.allMapPolygon[districtId][j][k]["markers"]);
                this.allMapPolygon[districtId][j][k]["markers"] = [];
            }
        }
    },

    getActivityInRegion: function(path,polyObj){
        var LatLng = this.getAvgLatLng(path);
        var service = new google.maps.places.PlacesService(app.map);
        var self = this;
        service.nearbySearch({
            location: LatLng,
            radius: 500,
            types: ['food']
        }, function(results,status){
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0,len=results.length; i < len; i++) {
                    self.createMarker(results[i],polyObj);
                }
            }
        });
    },

    createMarker: function(place,polyObj) {

        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: app.map,
            position: place.geometry.location
        });

        var photosHTML="",photos = place.photos;
        if(photos){
            photoUrl = photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100});
            photosHTML += "<br><img src='"+photoUrl+"'/>";
        }

        polyObj["markers"].push(marker);

        google.maps.event.addListener(marker, 'click', function() {
            app.infowindow.setContent(place.name+""+photosHTML);
            app.infowindow.open(app.map, this);
        });
    },

    removeMarkers: function(markers){
        for(i=0,len=markers.length;i<len;i++){
            markers[i].setMap(null);
        }
    },

    getAvgLatLng: function(path){
        var lat = 0,lng = 0;
        var len=path.length;
        for(i=0;i<len;i++){
            lat += path[i].lat();
            lng += path[i].lng();
        }
        var avgLat = lat/len;
        var avgLng = lng/len;
        return {lat: avgLat, lng: avgLng};
    },

    // This was my earlier approach. Not using this function now.
    showDistrictPolygon2: function(districtIds){
        this.refreshMap();
        for(i=0,len=districtIds.length;i<len;i++){
            district = this.allDistrictPolygon[districtIds[i]];
            ref = district.polygons;
            for (j = 0, len1 = ref.length; j < len1; j++) {
                polygon = ref[j];
                for (k = 0, len2 = polygon.length; k < len2; k++) {
                    line = polygon[k];
                    decodedPath = google.maps.geometry.encoding.decodePath(line.points);
                    mapPolygon = new google.maps.Polygon({
                        paths: [decodedPath],
                        strokeColor: "#60A9E1",
                        strokeOpacity: 1,
                        strokeWeight: 2,
                        fillColor: "#3893d9",
                        fillOpacity: 0.15,
                        zIndex: -2
                    });
                    mapPolygon.setMap(app.map);
                }
            }
        }
    },

    // This was my earlier approach. Not using this function now.
    refreshMap: function(){
        var latlng = {lat: 1.352083, lng: 103.819836}; // lat lng of singapore
        app.map = new google.maps.Map(document.getElementById('map'), {
            center: latlng,
            zoom: 11
        });
    }


});