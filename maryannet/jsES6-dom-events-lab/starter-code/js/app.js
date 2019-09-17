window.addEventListener('DOMContentLoaded', () => {

  // Task 5

  // const heading = document.getElementsByTagName('h1')
  // const scrollSetting = window.style.scrollY

  // window.addEventListener('scroll', e => {
  //   if (scrollSetting >= 40) {
  //     heading.classList.add('fadeOutUp')
  //   } else if (scrollSetting < 40) {
  //     heading.classList.remove('fadeOutUp')
  //   }
  // })

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

  // Task 3 

  const name = document.querySelectorAll('.name')
  // console.log(name)

  // const trial = name.map(() => {
  //   name.addEventListener('mouseover', e => {
  //     const current = document.querySelector('#current')
  //     current.textContent = name
  //   })
  //   return trial
  // })

  for (let i = 0; i < name.length; i++) {
    name[i].addEventListener('mouseover', e => {
      const current = document.querySelector('#current')
      current.textContent = `${e.target.value}`
    })
  }

  for (let j = 0; j < name.length; j++) {
    name[j].addEventListener('mouseout', e => {
      const current = document.querySelector('#current')
      current.textContent = ' '
    })
  }
  
  // Task 4

  const submit = document.querySelector('#subscribe')

  submit.addEventListener('submit', e => {
    e.preventDefault()
    submit.classList.add('submitted')
    submit.innerHTML = 'Submitted!'
  })

  
})

