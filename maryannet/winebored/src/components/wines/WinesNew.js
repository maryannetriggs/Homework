import React from 'react'

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
        location: {
          lat: '',
          lng: ''
        },
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
    console.log('clicked')
  }

  render() {
    console.log(this.state)
    const { data } = this.state
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input 
                  className="input"
                  placeholder="Name"
                  name="name"
                  onChange={this.handleChange}
                  value={data.name}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Origin</label>
              <div className="control">
                <input 
                  className="input"
                  placeholder="Origin"
                  name="origin"
                  onChange={this.handleChange}
                  value={data.origin}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input 
                  className="input"
                  placeholder="Image"
                  name="image"
                  onChange={this.handleChange}
                  value={data.image}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Tasting Notes</label>
              <div className="control">
                <textarea 
                  className="textarea"
                  placeholder="Please enter your tasting notes here..."
                  name="tastingNotes"
                  onChange={this.handleChange}
                  value={data.tastingNotes}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Grape Type</label>
              <div className="control">
                <input 
                  className="input"
                  placeholder="Grape Type"
                  name="grape"
                  onChange={this.handleChange}
                  value={data.grape}
                />
              </div>
            </div>
            <label className="label">Location</label>
            <div className="field">
              <label className="label">Longitude</label>
              <div className="control">
                <input 
                  className="input"
                  placeholder="longitude"
                  name="lng"
                  onChange={this.handleChange}
                  value={data.lng}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Latitude</label>
              <div className="control">
                <input 
                  className="input"
                  placeholder="latitude"
                  name="lat"
                  onChange={this.handleChange}
                  value={data.lat}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Alcohol Percentage</label>
              <div className="control">
                <input 
                  className="input"
                  placeholder="abv%"
                  name="abv"
                  onChange={this.handleChange}
                  value={data.abv}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Price</label>
              <div className="control">
                <input 
                  className="input"
                  placeholder="Price £"
                  name="price"
                  onChange={this.handleChange}
                  value={data.price}
                />
              </div>
            </div>
            <button type="submit" className="button is-warning is-fullwidth">Add my wine!</button>
          </form>

        </div>
      </section>
    )
  }
}

export default WinesNew