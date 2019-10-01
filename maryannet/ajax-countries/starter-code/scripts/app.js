function initialise() {
  let countries = []
  let selectedCountry
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
        return country.region === selectedCountry
      })
    
      const htmlCountryArray = filteredCountries.map(country => {
        return `
      <div><h1>${country.name}</h1> <p>${country.nativeName}</p> <img src="${country.flag}" alt="Flag of ${country.name}"></div>
      `
      })

      countryList.innerHTML = htmlCountryArray.join('')

    })
  }
  getCountries()
}

window.addEventListener('DOMContentLoaded', initialise) 