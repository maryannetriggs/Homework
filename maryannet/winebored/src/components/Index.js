import React from 'react'
import axios from 'axios'

import WineCard from './WineCard'

class Index extends React.Component {
  constructor() {
    super()

    this.state = {
      wines: null
    }

  }

  componentDidMount() {
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({ wines: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log('I have rendered', this.state)
    if (!this.state.wines) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.wines.map(wine => (
              <WineCard key={wine._id} {...wine}/>
            ))}
          </div>
        </div>
      </section>
    )
  }
}


export default Index