import React from 'react'

const WinesEdit = ({ data, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input 
          className="input"
          placeholder="Name"
          name="name"
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          value={data.grape}
        />
      </div>
    </div>

    {/* <label className="label">Location</label>
            <div className="field">
              <label className="label">Longitude</label>
              <div className="control">
                <input 
                  className="input"
                  placeholder="longitude"
                  name="lng"
                  onChange={handleChange}
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
                  onChange={handleChange}
                  value={data.lat}
                />
              </div>
            </div> */}

    <div className="field">
      <label className="label">Alcohol Percentage</label>
      <div className="control">
        <input 
          className="input"
          placeholder="abv%"
          name="abv"
          onChange={handleChange}
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
          onChange={handleChange}
          value={data.price}
        />
      </div>
    </div>
    <button type="submit" className="button is-warning is-fullwidth">Add my wine!</button>
  </form>
)

export default WinesEdit