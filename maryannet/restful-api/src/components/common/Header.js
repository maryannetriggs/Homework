import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../lib/auth'

class Header extends React.Component {
  constructor() {
    super()

    this.handleLogout = this.handleLogout.bind(this)
  }
  

  handleLogout() {
    Auth.logout()
    this.props.history.push('/')
  }
  
  render() {
    return (
      <>
      <nav>
        <Link to="/">Home Page</Link>
        <Link to="/characters">Beano Characters</Link>
        {!Auth.isAuthenticated() && <Link to="/register">Register</Link>}
        {!Auth.isAuthenticated() && <Link to="/login">Log In</Link>}
        {Auth.isAuthenticated() && <Link to="/characters/new">Add Another Character</Link>}
        {Auth.isAuthenticated() && <a onClick={this.handleLogout}>Logout</a>}      
      </nav>
      <div className="imageWrapper">
        <img src={'/images/dnbanner.jpg'}/>
      </div>
    </>
    )
  }
  
}



export default withRouter(Header)