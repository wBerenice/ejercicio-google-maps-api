
let direccionesTexto = []

let addressCoordenadas = {};

let nuevoAddressTxt = "";

const API_KEY = "AIzaSyA5nNaCbMXLLFjQH9oCSXUUA0QELudSzHY"

let divMapa = document.getElementById("map");
let coord = {lat:19.3906799675842 ,lng: -99.132637006249};
let coord2 = {lat: 19.45051566464307, lng: -99.21817769988648}

let addressWalmart = "JOSE MA. CASTORENA NO. 84  COL. SAN JOSE DE LOS CEDROS, DELEGACION CUAJIMALPA   MEXICO D.F. C.P. 05210";
let monumentoRevolucion = "Pl. de la República S/N, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX"

// const URL2 = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(addressWalmart)}&key=${API_KEY}`;

let contador = 0;

function initiazeMap(){

    const URL2 = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(addressWalmart)}&key=${API_KEY}`;
    
    /*
    1. Mandar a llamar al JSON store_directory.json
    2. Hacer un ciclo para que de manera dinámica pueda cambiar el URL2 dependiendo del elemento (index 0, 1, 2, 3) nuevoAddressTxt
    3. Del objeto grande que me retorna el fetch, tomar solo la latitud y longitud y asignarla a coordJSON
    4. Crear otro ciclo para que con los datos de coordJSON, se pueda crear un nuevo MARKER para cada store
    */
    let map  = new google.maps.Map(divMapa, {
        zoom: 10,
        center: coord
    });

    // marker();
    async function markerAndCoord() {
        try {
            const response = await fetch(URL2);
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }//async function
    
    markerAndCoord().then(data => {
        const location = data.results[0].geometry.location;
        console.log(`Latitude: ${location.lat}`);
        console.log(`Longitude: ${location.lng}`);
        let latMarker = location.lat;
        let lngMarker = location.lng;
        let coordJSON = {lat: latMarker, lng: lngMarker}

        var marker = new google.maps.Marker({
            position: coordJSON,
            map: map
        })

    });

}