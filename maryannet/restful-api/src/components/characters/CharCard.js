import React from 'react'
import { Link } from 'react-router-dom'

const CharCard = ({ name, image, _id }) => (
  <div>
    <Link to={`/characters/${_id}`}>
      <h2>{name}</h2>
      <img src={image}/>
    </Link>
  </div>
)

export default CharCard