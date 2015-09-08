
function initMap() {
// Specify features and elements to define styles.
var styleArray = [
  {
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },

{
  "featureType": "landscape.natural",
  "elementType": "geometry.fill",
  "stylers": [
      {
          "visibility": "on"
      },
      {
          "color": "#e0efef"
      }
  ]
},
{
  "featureType": "poi",
  "elementType": "geometry.fill",
  "stylers": [
      {
          "visibility": "on"
      },
      {
          "hue": "#1900ff"
      },
      {
          "color": "#c0e8e8"
      }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [
      {
          "lightness": 100
      },
      {
          "visibility": "simplified"
      }
  ]
},
{
  "featureType": "road",
  "elementType": "labels",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},
{
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [
      {
          "visibility": "on"
      },
      {
          "lightness": 700
      }
  ]
},
{
  "featureType": "water",
  "elementType": "all",
  "stylers": [
      {
          "color": "#7dcdcd"
      }
  ]
}
]

// Create a map object and specify the DOM element for display.
var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 34.014, lng: 241.505},
  scrollwheel: false,
  // Apply the map style array to the map.
  styles: styleArray,
  zoom: 16
});

var infoWindow = new google.maps.InfoWindow({map: map});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Your Location.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  };


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
};

// Create a black down arrow marker at the same lat and lng.
var marker1 = new google.maps.Marker({
    position: {lat: 34.017, lng: 241.502},
    icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 4
    },
    map: map,
  });

var marker2 = new google.maps.Marker({
    position: {lat: 34.0157, lng: 241.506},
    icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 4
    },
    map: map,
  });

}
