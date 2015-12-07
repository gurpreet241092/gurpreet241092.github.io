$(function(){
    // Getting all district data and district polygon data which is present in data.js
    var allDistrictData = app.getAllDistrictData();
    var allDistrictPolygon = app.getAllDistrictPolygon();
    allDistrictView = new app.allDistrictView({collection : allDistrictData,allDistrictPolygon:allDistrictPolygon});
});

// initMap is called when Google Api loads.
function initMap(){
    var latlng = {lat: 1.352083, lng: 103.819836}; // lat lng of singapore
    app.map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 12
    });
    app.infowindow = new google.maps.InfoWindow();
}


