let btnCountries = document.getElementById("btnCountries");
let countriesMainDiv = document.getElementById("countriesMainDiv");

const apiUrl = "https://jsonplaceholder.typicode.com/users";

const apiCountriesUrl = "https://restcountries.com/v3.1/all";
// const apiCountriesUrl = "https://restcountries.eu/rest/v2/all";

btnCountries.addEventListener("click", () => {

    showCountries();

})


function showCountries(){
    let xhr = new XMLHttpRequest()

    //Initizialing request
    xhr.open('GET', apiCountriesUrl, true)

    //Handeling successful response 
    xhr.onload = function(){
        if(xhr.status == 200){
            console.log("Success")

            //JSON response
            let countries = JSON.parse(this.response)
            console.log(countries)

            countries.forEach(country => {
                const countryCard = document.createElement('div');
                const countryCardImage = document.createElement('img');
                countryCard.innerHTML = country.name.official;
                countryCardImage.src = country.flags.png;
                countriesMainDiv.appendChild(countryCard)
                countriesMainDiv.appendChild(countryCardImage)
            })
        }
    }
    
    
    
    //Sending resquest
    xhr.send()



}//showCountries




