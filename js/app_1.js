///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'arzoomalhotra.3b8fe59f'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiYXJ6b29tYWxob3RyYSIsImEiOiJCeGR5QkE0In0.DyE0UkeHDsORvO3YntdMsw'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
 map.setView([39, -96], 4);

 var dataFileToAdd = 'data/bike_routes.geojson';

 var featureLayer = L.mapbox.featureLayer().loadURL(dataFileToAdd).addTo(map)

featureLayer.on('ready',function(){
  this.setStyle({
  'color': '#ec008c',
  'fillColor': '#ec008c',
  'weight': 4, 
  'opacity':.7
  });
  map.fitBounds(featureLayer.getBounds());
});
