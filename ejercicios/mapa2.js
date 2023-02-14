// let btnInput = document.getElementById("btnInput");

// btnInput.addEventListener("click", () => {
//     codeAddress();
// })

// var geocoder;
// var map;
// function initialize() {
//     geocoder = new google.maps.Geocoder();
//     var latlng = new google.maps.LatLng(-34.397, 150.644);
//     var mapOptions = {
//     zoom: 8,
//     center: latlng
//     }
//     map = new google.maps.Map(document.getElementById('map'), mapOptions);
// }

// function codeAddress() {
//     var address = document.getElementById('address').value;
//     geocoder.geocode( { 'address': address}, function(results, status) {
//     if (status == 'OK') {
//         map.setCenter(results[0].geometry.location);
//         var marker = new google.maps.Marker({
//             map: map,
//             position: results[0].geometry.location
//         });
//     } else {
//         alert('Geocode was not successful for the following reason: ' + status);
//     }
//     });
// }



//TRAVERSY MEDIA 


const addressWalmart = "JOSE MA. CASTORENA NO. 84  COL. SAN JOSE DE LOS CEDROS, DELEGACION CUAJIMALPA   MEXICO D.F. C.P. 05210";

const address1 = "BOULEVARD MANUEL AVILA CAMACHO NO. 491 COL. PERIODISTAS C.P.11220";
// const address2 = "AV. PROLONGACIÓN PASEO DE LA REFORMA NO. 400, ENTRE LAS CALLES: AVENIDA VASCO DE QUIROGA  Y DE AVENIDA PASEO DE LA REFORMA, COL. SANTA FE,  DELEGACIÓN ÁLVARO OBREGÓN CP  01210";

const API_KEY = "AIzaSyA5nNaCbMXLLFjQH9oCSXUUA0QELudSzHY"
// const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(addressWalmart)}&key=${API_KEY}`;
const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address1)}&key=${API_KEY}`;

fetch(URL)
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
    .then(data => {
        const location = data.results[0].geometry.location;
        console.log(`Latitude: ${location.lat}`);
        console.log(`Longitude: ${location.lng}`);
    })
    .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});



