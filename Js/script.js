


var map;
var markers = [];
var infoWindow;
var locationSelect;

// Initializing a google map
function initMap() {
    var sydney = {lat: -33.863276, lng: 151.107977};
    map = new google.maps.Map(document.getElementById('map'), {
        center: sydney,
        zoom: 11,
        mapTypeId: 'roadmap',
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU}
    });
    infoWindow = new google.maps.InfoWindow();

    searchButton = document.getElementById("searchButton").onclick = searchLocations;

    locationSelect = document.getElementById("locationSelect");
    locationSelect.onchange = function() {
        var markerNum = locationSelect.options[locationSelect.selectedIndex].value;
        if (markerNum != "none"){
        google.maps.event.trigger(markers[markerNum], 'click');
        }
    };
    }