//Global variables
const URL = 'https://covid19.mathdro.id/api';
const COUNTRIES_URL = 'https://covid19.mathdro.id/api/countries';


//Query selectors 
const worldConfirmed = document.querySelector('.world_confirmed');
const worldDeaths = document.querySelector('.world_deaths');
const worldRecovered = document.querySelector('.world_recovered');
const currentDatePlaceholder = document.querySelector('.current_date_placeholder');
const countriesList = document.querySelector('.countries_table');
const card = document.querySelector('.card');
const today = new Date().toDateString();


//Functions

//Gets data from API and renders global stats
async function getData() {
    let response = await fetch(URL);
    let data = await response.json();
    worldConfirmed.innerText = data.confirmed.value.toLocaleString();
    worldDeaths.innerText = data.deaths.value.toLocaleString();
    worldRecovered.innerText = (data.confirmed.value - data.deaths.value).toLocaleString();
    currentDatePlaceholder.innerText = today;
}


//Renders all countries from API
async function listCountries() {
    let response = await fetch(COUNTRIES_URL);
    let data = await response.json();
    data.countries.forEach(country => {
        let tableElement = document.createElement('td');
        tableElement.classList.add('table_element');
        tableElement.innerText = country.name;
        countriesList.appendChild(tableElement);
        tableElement.addEventListener('click', (e) => {
            printCountryStats(e.target.innerText);
        })
    });


//Allows user to select individual country and render it`s stats
async function printCountryStats(name) {
    let country_response = await fetch(`${COUNTRIES_URL}/${name}`);
    let country_data = await country_response.json();
   
        const countryName = document.createElement('h1');
        const countryConfirmed = document.createElement('h3');
        const countryRecovered = document.createElement('h3');
        const countryDeaths = document.createElement('h3');

        countryName.innerText = name;
        countryConfirmed.innerText = `Confirmed: ${country_data.confirmed.value.toLocaleString()}`;
        countryRecovered.innerText = `Recovered: ${(country_data.confirmed.value - country_data.deaths.value).toLocaleString()}`;
        countryDeaths.innerText = `Deaths: ${country_data.deaths.value.toLocaleString()}`;
        
        
        //Checks if card has children, to remove previous stats
        if (card.children) {
            card.innerHTML = '';
        }

        card.appendChild(countryName);
        card.appendChild(countryConfirmed);
        card.appendChild(countryRecovered);
        card.appendChild(countryDeaths)
        card.classList.remove('invisible')
   
    }
};


getData()

listCountries()




