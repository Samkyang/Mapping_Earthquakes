// add console.log to see if our code is working
console.log("working");

// We create the street view tile layer that will be the default background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
  });

// We create the dark view tile layer that will be an option for our map.
<<<<<<< HEAD
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
=======
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
>>>>>>> 1e959705eedb7bd1314189a5d9fe75d08e27337d
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
<<<<<<< HEAD
  "Streets": streets,
  "Satellite Street": satelliteStreets
=======
  Street: streets,
  Dark: dark
>>>>>>> 1e959705eedb7bd1314189a5d9fe75d08e27337d
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
<<<<<<< HEAD
  layers: [streets]
});
=======
  layers: [satelliteStreets]
})
>>>>>>> 1e959705eedb7bd1314189a5d9fe75d08e27337d

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
<<<<<<< HEAD
let torontoHoods = "https://raw.githubusercontent.com/Samkyang/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
  color: "blue",
  fillColor: "yellow",
  weight: 1
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
=======
let torontoData = "https://raw.githubusercontent.com/Samkyang/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
>>>>>>> 1e959705eedb7bd1314189a5d9fe75d08e27337d
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  style: myStyle,
<<<<<<< HEAD
  onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3>Neighborhood: " + feature.properties.AREA_NAME + "</h3>")
  }
}).addTo(map);
=======
  oneEachFeature: function(feature, layer) {
    layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: "
    + feature.properties.dst + "</h3>");
  }
}
  ).addTo(map);
>>>>>>> 1e959705eedb7bd1314189a5d9fe75d08e27337d
});