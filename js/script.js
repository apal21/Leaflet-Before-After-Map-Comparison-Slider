const before = L.map('before', {
    attributionControl: false,
    minZoom: 5
}).setView(center, zoom);
    
const after = L.map('after', {
    attributionControl: false,
    minZoom: 5
}).setView(center, zoom);

L.tileLayer(map1URL).addTo(before);
L.tileLayer(map2URL).addTo(after);

// Draw a red circle on 'Before Map'
const circle1 = L.circle(center, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: 5000
}).addTo(before);

// Draw a blue circle on 'After Map'
const circle2 = L.circle(center, {
    color: 'blue',
    fillColor: '#30f',
    fillOpacity: 0.2,
    radius: 5000
}).addTo(after);

$('.container').beforeAfter(before, after);