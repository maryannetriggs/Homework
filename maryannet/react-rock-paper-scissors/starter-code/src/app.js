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

// Mia's code

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// ​
// class App extends Component {
//   constructor() {
//     super()
// ​
//     this.state = {
//       playerChoice: 'You have not chose yet', 
//       computerChoice: '', 
//       result: ''
//     }
// ​
//     this.winConditions = {
//       rock: 'scissors',
//       paper: 'rock',
//       scissors: 'paper'
//     }
// ​
//     this.choices = ['rock', 'scissors', 'paper']
// ​
//     this.handleClick = this.handleClick.bind(this)
//   }
// ​
//   // function that takes the player and the computer choice and returns a string (draw, win, lost)
//   checkWin(playerChoice, computerChoice) {
//     if (playerChoice === computerChoice) return 'Draw'
//     if (this.winConditions[playerChoice] === computerChoice) return 'You won'
//     return 'You lost'
//   }
// ​
//   // function that sets into state the new playerChoice, computerChoice and result
//   handleClick(e) {
//     const playerChoice = e.target.value
//     const computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)]
//     const result = this.checkWin(playerChoice, computerChoice)
//     this.setState({ playerChoice, computerChoice, result })
//   }
// ​
//   render() {
//     // remember to console.log here 
//     console.log(this.state)
//     return (
//       <div>
//         <h1>Game</h1>
//         <p>Player Choice: {this.state.playerChoice}</p>
//         <p>Computer Choice: {this.state.computerChoice}</p>
//         <p>Result: {this.state.result}</p>
//         <button onClick={this.handleClick} value="rock">Rock</button>
//         <button onClick={this.handleClick} value="paper">Paper</button>
//         <button onClick={this.handleClick} value="scissors">Scissors</button>
//       </div>
//     )
//   }
// }
// ​
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )





