function initialise() {
  let countries = []
  let selectedCountry = 'All'
  const countryList = document.querySelector('.countries')
  const dropdown = document.querySelector('#dropdown')

  function getCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(res => {
        countries = res
        // console.log(countries)
        displayCountries()
      })
      .catch(err => console.log(err))
  }

  function displayCountries() {

    dropdown.addEventListener('change', option => {
      selectedCountry = option.target.value

      const filteredCountries = countries.filter(country => {
        return country.region === selectedCountry || selectedCountry === 'All'
      })

      const htmlCountryArray = filteredCountries.map(country => {
        return `
      <div>
        <h1>${country.name}</h1> 
        <p>${country.nativeName}</p> 
        <img src="${country.flag}" alt="Flag of ${country.name}">
      </div>
      `
      })

      countryList.innerHTML = htmlCountryArray.join('')

    })
  }
  getCountries()
}

window.addEventListener('DOMContentLoaded', initialise) 

// *****************JACKS SOLUTIONS******************


// function init() {
//   // ! Gathering all the dom elements we will need to affect/
//   const countriesContainer = document.querySelector('.countries')
//   const select = document.querySelector('select')
//   const input = document.querySelector('input')
//   //  ! Setting some variables to store our data in and the values of our searchbox and dropdown select.
//   let countries = []
//   let region = 'All'
//   let search = ''

//   //  ! on page load this fetches all our data from the api, it comes back as an array of country objects.
//   fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json()) // ! fetched response must first be converted to json.
//     .then(res => {
//       countries = res // ! setting our global countries variable to be the result of our fetch, our countries array
//       displayCountries() // ! now calling this display counties function to display our array in the dom.
//     })
  
  
//   // ! we use this function to filter our array of countries to only include results either from the selected dropdown option or a match of country name in the search box
//   function filterCountries(countries) {
//     const re = new RegExp(search, 'i') // ! creating a regular expression to match our 'search' variable
//     return countries.filter(country => {
//       return re.test(country.name) && (country.region === region || region === 'All') // ! we use test on the search term with our regexp (really handy as if there is no matches, it returns everything as true) and we also check against the value of the dropdown, keeping only matched country region, or all of them if 'All' is selected. This is the default
//     })
//   } 

//   function displayCountries() {
//     countriesContainer.innerHTML = '' // ! this line makes sure we always empty the countries container div of any children before adding some new ones.
//     const htmlArray = filterCountries(countries).map((country) => { // ! instead of mapping our counties array, we map the filtered version
//       return `
//         <div>
//           <h4>${country.name}</h4>
//           <h6>${country.nativeName}</h6>
//           <img src="${country.flag}" alt="${country.name} flag" />
//         </div>
//       `
//     }) // ! We've mapped over each country in and transformed the object into a string that can be parsed as valid html.
//     countriesContainer.innerHTML = htmlArray.join('') // ! we join our array into a big valid html string and use the inner HTML dom method to have this parsed into REAL html.
//   }

//   // ! Setting event listeners for our searchbox and dropdown select and updating their respective values.
//   select.addEventListener('change', (e) => {
//     region = e.target.value // ! When the change event triggers we set the value of the 'region' variable defined at the top to be the new value
//     displayCountries()
//   })

//   input.addEventListener('keyup', (e) => {
//     search = e.target.value // ! same as above but a key up event and the value of the text box to the 'search' variable
//     displayCountries()
//   })
// }

// window.addEventListener('DOMContentLoaded', init)