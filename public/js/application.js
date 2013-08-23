$(document).ready(function() {
 
  var getWeight = function() {
    var weight = 0;

    $.ajax({
      type: "GET",
      async: false,
      success: function(response) {
        if (parseInt(response) <= 2) {
          weight = 5;
          // console.log(weight);
        }
        else {
          weight = 100;
        }
      }
    });
    
    return weight;
  };



  var map, pointarray, heatmap;

  console.log(getWeight());

  var taxiData = [
    // {location: new google.maps.LatLng(21.256, -157.818), weight: 20}, //diamond head
    {location: new google.maps.LatLng(21.253, -157.809), weight: getWeight()},
    {location: new google.maps.LatLng(21.254, -157.799), weight: 5},
    // {location: new google.maps.LatLng(21.276, -157.833), weight: 75},  //queens
    // {location: new google.maps.LatLng(21.274, -157.829), weight: 75},
    // {location: new google.maps.LatLng(21.271, -157.826), weight: 75}
  ];

function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(21.466, -157.983),
    mapTypeId: google.maps.MapTypeId.MAP
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var pointArray = new google.maps.MVCArray(taxiData);

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray, radius: 20
  });

  heatmap.setMap(map);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.setOptions({
    gradient: heatmap.get('gradient') ? null : gradient
  });
}

function changeRadius() {
  heatmap.setOptions({radius: heatmap.get('radius') ? null : 20});
}

function changeOpacity() {
  heatmap.setOptions({opacity: heatmap.get('opacity') ? null : 0.2});
}

google.maps.event.addDomListener(window, 'load', initialize);
}); 

