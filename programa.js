var map = L.map('map').setView([4.627947, -74.065791], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.627947, -74.065791]).addTo(map);
var map = L.map('map').setView([4.6208079, -74.0721415], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marcador fijo
var marker = L.marker([4.6208079, -74.0721415]).addTo(map);

// -------------------------
// Abrir el archivo de GeoJSON
// Javascript se ejecuta de tal manera que si una línea de código se demora,
// se pasa a la siguiente sin esperar
// -------------------------
async function CargarPuntos() {
    var miArchivo = await fetch("microonad.geojson");

    // Convertir el archivo a JSON: objeto js
    var datos = await miArchivo.json();

    // Obtener el array de la llave features
    let listaFeatures = datos["features"];

    for (let i = 0; i < 10; i++) {
        console.log(datos["features"][i]);

        // Obtener la geometría del primer elemento
        listaFeatures[i]["geometry"]["coordinates"];
        var miCoordenadas = listaFeatures[i]["geometry"]["coordinates"];

        var miMarcador = L.marker([miCoordenadas[1], miCoordenadas[0]]);
        miMarcador.addTo(map);
    }
}

CargarPuntos();

// Marcador adicional con popup
const marker2 = L.marker([4.60971, -74.08175]).addTo(map);
marker2.bindPopup('<strong>Marcador 1</strong><br>Información adicional del marcador.');