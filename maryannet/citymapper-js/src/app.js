import './style.scss'

let tubes = []
const tubeWrapper = document.querySelector('.tubeWrapper')

function getTubes() {
  fetch('https://api.tfl.gov.uk/line/mode/tube/status')
    .then(res => res.json())
    .then(res => {
      tubes = res
      displayTubes()
    })
    .catch(err => console.log(err))
}

getTubes()

setInterval(() => {
  console.log('updated')
  getTubes()
}, 3000000)


function displayTubes() {
  const tubeArray = tubes.map(tube => {
    return `
    <div>
      <h3>${tube.name}</h3> 
      <p>${tube.lineStatuses[0].statusSeverityDescription}</p>
    </div>
    `
  })
  tubeWrapper.innerHTML = tubeArray.join('')
}