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
    <div className="imageWrapper">
      <img src={'/images/dnbanner.jpg'}/>
    </div>
  </>
)

export default Header