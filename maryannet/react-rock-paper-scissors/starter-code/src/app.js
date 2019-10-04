import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      userInput: '',
      computerInput: '',
      gameOutcome: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.resetForm = this.resetForm.bind(this)

  }

  handleClick(e) {
    this.setState({ userInput: e.target.value })
    this.randomNumGenerator()
    this.whoWon()
  }

  randomNumGenerator() {
    const randomNum = Math.floor(Math.random() * 3)
    const computerInput = (randomNum === 0 ? 'Rock' : randomNum === 1 ? 'Paper' : 'Scissors')
    this.setState({ computerInput })
  }

  whoWon(userInput, computerInput) {
    if (userInput === computerInput) {
      this.setState({ gameOutcome: 'The game is a tie' })
    } else if (userInput === 'Rock' && computerInput === 'Paper' || userInput === 'Paper' && computerInput === 'Scissors' || userInput === 'Scissors' && computerInput === 'Rock') {
      this.setState({ gameOutcome: 'The computer wins' })
    } else {
      this.setState({ gameOutcome: 'The user wins' })
    } 
    console.log(userInput)
    console.log(computerInput)
  }

  resetForm() {
    this.setState({ userInput: '', computerInput: '', gameOutcome: '' })
  }


  render() {
    const { userInput, computerInput, gameOutcome } = this.state
    console.log(userInput)
    console.log(computerInput)
    return (
      <div className="wrapper">
        <h2>The user chose: {userInput}</h2>
        <h2 onClick={this.handleClick}>The computer chose: {computerInput}</h2>
        <h2 onClick={this.handleClick}>The winner is: {gameOutcome}</h2>
        <div>
          <button value="Rock" onClick={this.handleClick}>Rock</button>
          <button value="Paper" onClick={this.handleClick}>Paper</button>
          <button value="Scissors" onClick={this.handleClick}>Scissors</button>
        </div>
        <button onClick={this.resetForm}>Play Again?</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
