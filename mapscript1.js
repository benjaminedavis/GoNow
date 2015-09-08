
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
}
