import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'

import WinesIndex from './components/wines/WinesIndex'
import WinesShow from './components/wines/WinesShow'
import WinesNew from './components/wines/WinesNew'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

import 'bulma'


const App = () => (
  <BrowserRouter>

    <main>
      <nav className="navbar is-fixed-top is-primary">
        <Link className="navbar-item" to="/">Home Page</Link>
        <Link className="navbar-item" to="/wines">Index Page</Link>
        <Link className="navbar-item" to="/register">Sign Up</Link>
        <Link className="navbar-item" to="/login">Sign In</Link>
        <Link className="navbar-item" to="/wines/new">Add a New Wine</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/wines/new" component={WinesNew}></Route>
        <Route path="/wines/:id" component={WinesShow}></Route>
        <Route exact path="/wines" component={WinesIndex}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </main>

  </BrowserRouter>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)