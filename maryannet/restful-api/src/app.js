import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import axios from 'axios'

import Home from './components/common/Home'
import CharIndex from './components/characters/CharIndex'

axios.get('/api/characters')
  .then(res => console.log(res.data))
  .catch(err => console.log(err))

const App = () => (
  <BrowserRouter>
    <>
      <nav>
        <Link to="/">Home Page</Link>
        <Link to="/characters">Index Page</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/characters" component={CharIndex} />
      </Switch>
    </>

  </BrowserRouter>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)