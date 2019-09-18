window.addEventListener('DOMContentLoaded', () => {

  // Getting computer input - generating random number
  let computerChoice = Math.floor(Math.random() * 3)

  // Getting computer input - turning random number into a choice
  if (computerChoice === 0) {
    computerChoice = 'Rock'
  } else if (computerChoice === 1) {
    computerChoice = 'Paper'
  } else {
    computerChoice = 'Scissors'
  }

  // Declaring variables to use with DOM
  const userInput = document.querySelectorAll('.userInput')
  const userChoice = document.querySelector('#userChoice')
  const computerInput = document.querySelector('#computerChoice')
  const winner = document.querySelector('#winner')

  // Console log statements
  // console.log(computerChoice)
  // console.log(userInput)
  // console.log(userChoice)
  // console.log(winnerx())

  // DOM statements and comparing user to computer input then determining a winner
  userInput.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      userChoice.innerHTML = elem.textContent
      computerInput.innerHTML = computerChoice
      const userAnswer = elem.textContent

      console.log(userChoice)

      function winnerx(userAnswer, computerChoice) {
        if (userAnswer === computerChoice) {
          return 'The game is a tie'
        } else if (userAnswer === 'Rock') {
          if (computerChoice === 1) {
            return 'The computer wins'
          } else if (computerChoice === 2) {
            return 'The user wins'
          }
        } else if (userAnswer === 'Paper') {
          if (computerChoice === 0) {
            return 'The user wins'
          } else if (computerChoice === 2) {
            return 'The computer wins'
          }
        } else if (userAnswer === 'Scissors') {
          if (computerChoice === 0) {
            return 'The computer wins'
          } else if (computerChoice === 1) {
            return 'The user wins'
          }
        }
      }

      winner.innerHTML = winnerx(userAnswer, computerChoice)

    })
  })







})