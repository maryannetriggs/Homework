import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <>
    <nav>
      <Link to="/">Home Page</Link>
      <Link to="/characters">Beano Characters</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </nav>

    <img src={'/images/beano-headline.png'} />
  </>
)

export default Header