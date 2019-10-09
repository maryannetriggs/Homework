import React from 'react'
import axios from 'axios'

// import '../style.scss'

class WinesShow extends React.Component {
  constructor() {
    super()

    this.state = {
      wine: null

    }
  }

  componentDidMount() {
    const wineId = this.props.match.params.id
    axios.get(`https://winebored.herokuapp.com/wines/${wineId}`)
      .then(res => this.setState({ wine: res.data }))
      .catch(err => console.log(err))
  }  

  render() {
    if (!this.state.wine) return null
    const { wine } = this.state
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">{wine.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image wines-show">
                <img src={wine.image} alt={wine.name} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Tasting Notes</h4>
              <p>{wine.tastingNotes}</p>
              <hr />
              <h4 className="title is-4">Origin</h4>
              <p>{wine.origin}</p>
              <hr />
              <h4 className="title is-4">Alcohol Content</h4>
              <p>{wine.abv}</p>
              <hr />
              <h4 className="title is-4">Price</h4>
              <p><strong>£{wine.price}</strong></p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}



export default WinesShow 