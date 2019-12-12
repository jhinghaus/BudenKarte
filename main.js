var map = L.map('map').setView(center, 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// customize functions
function createPopup(layer) {
  return layer.feature.properties.name + "<br>" + layer.feature.properties.description;
}

function createMarker(geoJsonPoint, latlng) {
  var icon = geoJsonPoint.properties.icon;
  return L.marker(latlng, {
  icon: L.divIcon({
    html: '<i class="fa ' + icon + '"></i>',
    iconSize: [20, 20],
    className: 'StandIcon'
  })
});
}

// customize the stands
var stand_geo = L.geoJSON(stands, {pointToLayer: createMarker}).bindPopup(createPopup);

// add stands to the map
var contentLayer = stand_geo.addTo(map);
