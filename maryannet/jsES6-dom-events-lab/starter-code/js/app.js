window.addEventListener('DOMContentLoaded', () => {

  // Task 5

  const heading = document.querySelector('h1')

  window.addEventListener('scroll', e => {
    if (window.scrollY >= 40) {
      heading.classList.add('fadeOutUp')
    } else {
      heading.classList.remove('fadeOutUp')
    }
  })

  // Commented out because it breaks the rest of the code

  // Task 1

  const button = document.querySelector('#toggle')
  const circle = document.querySelector('.circle')

  
  button.addEventListener('click', e => {
    circle.classList.toggle('pulse')
  })
  
  // Task 2

  const dropdown = document.querySelector('#cities')

  dropdown.addEventListener('change', e => {
    const choice = document.querySelector('#city')
    choice.textContent = `${e.target.value}`
  })

  // dropdown.addEventListener('change', e => {
  //   const selectedOption = event.target.value
  //   const choice = document.querySelector('#city')
  //   selectedOption = choice.textContent // Nick used innerHTML
  // })
  // event.target.value - tells us what was actually selected

  // Task 3 

  const nameElements = document.querySelectorAll('.name')
  const current = document.querySelector('#current')

  nameElements.forEach(elem => {
    elem.addEventListener('mouseover', elem => {
      current.innerHTML = elem.textContent
    })
  })

  nameElements.forEach(element => {
    element.addEventListener('mouseover', element => {
      current.innerHTML = ''
    })
  })


  // for (let i = 0; i < name.length; i++) {
  //   name[i].addEventListener('mouseover', e => {
  //     const current = document.querySelector('#current')
  //     current.textContent = `${e.target.value}`
  //   })
  // }

  // for (let j = 0; j < name.length; j++) {
  //   name[j].addEventListener('mouseout', e => {
  //     const current = document.querySelector('#current')
  //     current.textContent = ' '
  //   })
  // }
  
  // Task 4

  const formElement = document.querySelector('#subscribe')
  const subButton = document.querySelector('button.submit')

  formElement.addEventListener('submit', e => {
    e.preventDefault()
    subButton.classList.add('submitted')
    subButton.innerHTML = 'Submitted!'
  })

  
})