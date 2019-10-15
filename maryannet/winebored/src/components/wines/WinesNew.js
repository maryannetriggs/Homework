import React from 'react'
import Axios from 'axios'
import Auth from '../../lib/Auth'

import WinesForm from '../wines/WinesForm'

class WinesNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        origin: '',
        image: '',
        tastingNotes: '',
        grape: '',
        abv: '',
        price: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    
    Axios.post('https://winebored.herokuapp.com/wines', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.props.history.push(`/wines/${res.data._id}`)
      })
      .catch(err => console.log(err))
  }

  render() {
    const { data } = this.state
    return (
      <section className="section">
        <div className="container">
          <WinesForm 
            data={data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default WinesNew