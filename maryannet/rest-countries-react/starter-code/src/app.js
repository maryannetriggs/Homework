import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import DropdownForm from './components/DropdownForm'
import './style.scss'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      countries: [],
      region: 'All'
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
  }

  filteredCountries() {
    const { region, countries } = this.state
    return countries.filter(country => {
      return country.region === region || region === 'All'
    })
  }


  render() {

    console.log('I have rendered', this.state)

    return (
      <>
        <DropdownForm
          handleChange={this.handleChange}
        />

        <div className="wrapper">
          {this.filteredCountries.map(country => (
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

// import React from 'react'
// import ReactDOM from 'react-dom'
// import axios from 'axios'
// import './style.scss'

// import Country from './components/Country'

// class App extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       countries: [],
//       region: 'All',
//       search: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   componentDidMount() {
//     axios.get('https://restcountries.eu/rest/v2/all')
//       .then(res => this.setState({ countries: res.data }))
//       .catch(err => console.log(err))
//   }

//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }
  
//   filteredCountries() {
//     const { region, countries, search } = this.state
//     const re = new RegExp(search, 'i')
//     return countries.filter(country => {
//       return re.test(country.name) && (country.region === region || region === 'All')
//     })
//   }

//   render() {
//     return (
//       <>
//       <div className="container">
//         <select onChange={this.handleChange} name="region">
//           <option value="All">All</option>
//           <option value="Africa">Africa</option>
//           <option value="Asia">Asia</option>
//           <option value="Europe">Europe</option>
//           <option value="Oceania">Oceania</option>
//           <option value="Americas">Americas</option>
//         </select>
//         <input
//           placeholder="Search"
//           onChange={this.handleChange}
//           name="search"
//         />
//       </div>
//       <div className="container">
//         <div className="countries">
//           {this.filteredCountries().map(country => <Country key={country.name} {...country} />)}
//         </div>
//       </div>
//       </>
//     )
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )