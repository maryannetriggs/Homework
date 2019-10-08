import React from 'react'
import { Link } from 'react-router-dom'

const WineCard = ({ name, image, price, user, _id }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/wines/${_id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={name} />
          </figure>
          <div className="card-content">
            <h5 className="title is-6">{price}</h5>
            <h6 className="subtitle is-6">{user.username}</h6>
          </div>
        </div>
      </div>
    </Link>
  </div>
)

export default WineCard