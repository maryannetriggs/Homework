window.addEventListener('DOMContentLoaded', () => {

  const onePound = document.querySelector('.onePound')
  const fivePounds = document.querySelector('.fivePounds')
  const tenPounds = document.querySelector('.tenPounds')
  let totalRaised = 0
  let toRaise = 100
  const currentTotal = document.querySelector('#currentTotal')
  const leftToRaise = document.querySelector('#leftToRaise')
  const fillMe = document.querySelector('.fillMe')
  const toRaiseMessage = document.querySelector('.leftToRaise p')
  // fillMe.classList.add = ('animated', 'fadeInLeft')
  

  // console.log(totalRaised)

  onePound.addEventListener(('click'), () => {
    totalRaised += 1
    currentTotal.innerHTML = `${totalRaised}%`
    toRaise -= 1
    leftToRaise.innerHTML = toRaise
    const percentage = `${totalRaised}%`
    fillMe.classList.add('animated', 'bounceInLeft')
    fillMe.style.width = percentage
    if (totalRaised === 100) {
      toRaiseMessage.innerHTML = 'Target Reached!'
      toRaiseMessage.classList.add('animated', 'rubberBand')
    }
    if (totalRaised >= 100) {
      fillMe.style.width = '100%'
    }
  })

  fivePounds.addEventListener(('click'), () => {
    totalRaised += 5
    currentTotal.innerHTML = `${totalRaised}%`
    toRaise -= 5
    leftToRaise.innerHTML = toRaise
    const percentage = `${totalRaised}%`
    fillMe.classList.add('animated', 'bounceInLeft')
    fillMe.style.width = percentage
    if (totalRaised === 100) {
      toRaiseMessage.innerHTML = 'Target Reached!'
      toRaiseMessage.classList.add('animated', 'rubberBand')
    }
    if (totalRaised >= 100) {
      fillMe.style.width = '100%'
    }
  })

  tenPounds.addEventListener(('click'), () => {
    totalRaised += 10
    currentTotal.innerHTML = `${totalRaised}%`
    toRaise -= 10
    leftToRaise.innerHTML = toRaise
    const percentage = `${totalRaised}%`
    fillMe.classList.add('animated', 'bounceInLeft')
    fillMe.style.width = percentage
    if (totalRaised === 100) {
      toRaiseMessage.innerHTML = 'Target Reached!'
      toRaiseMessage.classList.add('animated', 'rubberBand')
    }
    if (totalRaised >= 100) {
      fillMe.style.width = '100%'
    }
  })





})


