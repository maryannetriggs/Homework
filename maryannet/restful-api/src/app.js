import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './style.scss'
import 'bulma'

import Home from './components/common/Home'
import Header from './components/common/Header'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
// import SecureRoute from './components/common/SecureRoute'

import CharIndex from './components/characters/CharIndex'
import CharShow from './components/characters/CharShow'
import CharNew from './components/characters/CharNew'

const App = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/characters/new" component={CharNew}></Route>
        <Route path="/characters/:id" component={CharShow}></Route>
        <Route exact path="/characters" component={CharIndex}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </>

  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)