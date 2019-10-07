import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import DropdownForm from './components/DropdownForm'
import './style.scss'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      countries: null,
      filteredCountries: null,
      region: null
    }

    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    console.log('I have mounted and am now making the api call')
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({ countries: res.data }))
      .catch(err => this.setState({ error: err.message }))
  }

  handleChange(e) {
    this.setState({ region: e.target.value })
    this.filteredCountries()
  }

  filteredCountries() {
    const { region, countries } = this.state
    const filteredCountries = countries.filter(country => {
      return country.region === { region }
      // || this.state.region === 'All'
    })
    this.setState({ filteredCountries })
  }


  render() {

    console.log('I have rendered', this.state)
    const { filteredCountries } = this.state

    return (
      <>
        <DropdownForm
          handleChange={this.handleChange}
        />

        <div className="wrapper">
          {filteredCountries && filteredCountries.map(country => (
            <div key={country.name} className="countries">
              <h1>{country.name}</h1>
              <p>{country.nativeName}</p>
              <img src={country.flag} alt={country.name}></img>
            </div>
          ))}
        </div>
      </>
    )
  }
}

{/* <div className="wrapper">
  {countries && countries.map(country => (
    <div key={country.name} className="countries">
      <h1>{country.name}</h1>
      <p>{country.nativeName}</p>
      <img src={country.flag} alt={country.name}></img>
    </div>
  ))}
</div> */}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)