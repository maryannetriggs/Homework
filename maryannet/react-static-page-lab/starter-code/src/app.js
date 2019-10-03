import React from 'react'
import ReactDOM from 'react-dom'
import './scss/style.scss'
import Header from './components/header'
import GeneralInfo from './components/general-info'
import DonorInfo from './components/donor-info'

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <GeneralInfo />
        <DonorInfo />
      </div>
      
      
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)