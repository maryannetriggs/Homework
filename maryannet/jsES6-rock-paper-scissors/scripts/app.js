window.addEventListener('DOMContentLoaded', () => {

  // Getting computer input - generating random number and turning random number into a choice
  let computerChoice = Math.floor(Math.random() * 3)

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

  // Function to determine winner
  function whoWon(userInput, computerChoice) {
    if (userInput === computerChoice) {
      return 'The game is a tie'
    } else if (userInput === 'Rock' && computerChoice === 'Paper' || userInput === 'Paper' && computerChoice === 'Scissors' || userInput === 'Scissors' && computerChoice === 'Rock') {
      return 'The computer wins'
    } else {
      return 'The user wins'
    }
  }

  // DOM statements when user clicks on a button
  userInput.forEach(elem => {
    elem.addEventListener('click', () => {
      userChoice.innerHTML = elem.textContent
      computerInput.innerHTML = computerChoice
      winner.innerHTML = whoWon(userInput, computerChoice)
    })
  })

})