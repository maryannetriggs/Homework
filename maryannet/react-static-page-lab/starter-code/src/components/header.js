import React from 'react'

const Header = ({ image, title, subtitle }) => (
  <header>
    <h1>The Metropolitan Museum of Art</h1>
    <h2>Exhibit</h2>
    <img src={image} alt={title}></img>
    <h3>{title}</h3>
    <h3>{subtitle}</h3>
  </header>
)


export default Header