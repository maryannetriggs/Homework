import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import Index from './components/Index'
import Home from './components/Home'
import WinesShow from './components/WinesShow'

const App = () => (
  <BrowserRouter>

    <main>
      <nav className="navbar is-primary">
        <Link className="navbar-item" to='/'>Home Page</Link>
        <Link className="navbar-item" to='/wines'>Index Page</Link>
      </nav>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/wines/:id' component={WinesShow}></Route>
        <Route path='/wines' component={Index}></Route>
      </Switch>
    </main>

  </BrowserRouter>
)



ReactDOM.render(
  <App />,
  document.getElementById('root')
)