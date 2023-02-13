let direccionesTexto = []

const API_KEY = "AIzaSyA5nNaCbMXLLFjQH9oCSXUUA0QELudSzHY"

let divMapa = document.getElementById("map");
let coord = {lat:19.3906799675842 ,lng: -99.132637006249};
let coord2 = {lat: 19.45051566464307, lng: -99.21817769988648}

let addressWalmart = "JOSE MA. CASTORENA NO. 84  COL. SAN JOSE DE LOS CEDROS, DELEGACION CUAJIMALPA   MEXICO D.F. C.P. 05210";
let monumentoRevolucion = "Pl. de la República S/N, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX"

const URL2 = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(addressWalmart)}&key=${API_KEY}`;
//FETCH STORES
fetch("store_directory.json")
.then(response => response.json())
.then(data => showInfo(data));

function showInfo(data){
    // console.log(data)
    for(let i = 0; i < data.length; i++){
        direccionesTexto.push(data[i].Address)
    }
}


function initiazeMap(){
    let coordDinamicas;
    // markerAndCoord();
    // geoCodingPrueba(monumentoRevolucion);

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

}//initizeMap




// CHAT

async function getDataForEachElement(elements) {
    for (const element of elements) {
    await fetch(`https://api.example.com/data/${element}`)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }//ciclo FOR
}//async function



//FOR EACH

async function processData(data) {
    data.forEach(async item => {
      // Do some asynchronous processing on the item
    await asyncProcess(item);
    }); 
}

async function asyncProcess(item) {
// Asynchronous processing logic here
}



//FOR LOOP

async function processData(data) {
    for (let i = 0; i < data.length; i++) {
      // Do some asynchronous processing on the item
        await asyncProcess(data[i]);
    }
}

async function asyncProcess(item) {
    // Asynchronous processing logic here
}



//INITIZE MAPA



// let direccionesTexto = []

// let addressCoordenadas = {};

// let nuevoAddressTxt;

// const API_KEY = "AIzaSyA5nNaCbMXLLFjQH9oCSXUUA0QELudSzHY"

// let divMapa = document.getElementById("map");
// let coord = {lat:19.3906799675842 ,lng: -99.132637006249};
// let coord2 = {lat: 19.45051566464307, lng: -99.21817769988648}

// let addressWalmart = "JOSE MA. CASTORENA NO. 84  COL. SAN JOSE DE LOS CEDROS, DELEGACION CUAJIMALPA   MEXICO D.F. C.P. 05210";
// let monumentoRevolucion = "Pl. de la República S/N, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX"

// const URL2 = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(addressWalmart)}&key=${API_KEY}`;


function initiazeMap(){

    async function getJSON(){
        await fetch("store_directory.json")
        .then(response => response.json())
        .then(data => showInfo(data)); 
    }

    function showInfo(data){
        // console.log(data)
        for(let i = 0; i < data.length; i++){
            direccionesTexto.push(data[i].Address)
            // console.log(data[i].Address);
        }
        // return true;
        console.log(direccionesTexto.length)//273
    }



    let map  = new google.maps.Map(divMapa, {
        zoom: 10,
        center: coord
    });

    const URL2 = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(nuevoAddressTxt)}&key=${API_KEY}`;


    async function coordenates(direccionesTexto) {
                        //274 elementos = 273 index
        for(let i = 0; i < direccionesTexto.length; i++){
            console.log(direccionesTexto[i].Address)
            nuevoAddressTxt = direccionesTexto[i].Address;
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
        }//for loop
    }//async function
    


    coordenates().then(data => {
        const location = data.results[0].geometry.location;
        console.log(`Latitude: ${location.lat}`);
        console.log(`Longitude: ${location.lng}`);
        let latMarker = location.lat;
        let lngMarker = location.lng;
        let coordJSON = {lat: latMarker, lng: lngMarker}

        for(let i = 0; i < 10; i++){
            console.log("2")
            newMarker();
        }

        function newMarker(newCoord){
            // console.log("2")
            var marker = new google.maps.Marker({
            position: coordJSON,
            map: map
        })
        }//newMarker
    });

}//initizeMap    


