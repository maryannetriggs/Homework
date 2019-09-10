// General Calculator

// Gathering info from user for calculation
const mathsOperator = prompt('Please enter the mathmematical operator you wish to use in the calculation. For example: + for addition, - for subtraction, / for division, * for multiplication, type \'power\' for exponentials, type \'root\' for square root calculations ')
const userNum1 = parseFloat(prompt('Please enter the first number of your calculation'))
const userNum2 = parseFloat(prompt('Please enter the second number of your calculation (type 0 for square root calculations'))

// console.log(userNum1, typeof userNum1)
// console.log(userNum2, typeof userNum2)
// console.log(mathsOperator, typeof mathsOperator)

// Mathematical calculations
const add = (userNum1 + userNum2)
const subtract = (userNum1 - userNum2)
const multiply = (userNum1 * userNum2)
const divide = (userNum1 / userNum2)
const power = Math.pow(userNum1, userNum2)
const root = Math.sqrt(userNum1)

// Determining operator and returning calculation via an alert
if (mathsOperator === '+') {
  alert(`${userNum1} ${mathsOperator} ${userNum2} equals ${add}`)
} else if (mathsOperator === '-') {
  alert(`${userNum1} ${mathsOperator} ${userNum2} equals ${subtract}`)
} else if (mathsOperator === '*') {
  alert(`${userNum1} ${mathsOperator} ${userNum2} equals ${multiply}`)
} else if (mathsOperator === '/') {
  alert(`${userNum1} ${mathsOperator} ${userNum2} equals ${divide}`)
} else if (mathsOperator === 'power') {
  alert(`${userNum1} to the ${mathsOperator} of ${userNum2} equals ${power}`)
}  else if (mathsOperator === 'root') {
  alert(`the square root of ${userNum1} equals ${root}`)
} else {
  alert('invalid entry, please try again')
}



// BMI Calculator

// Gathering info from user for calculation
const imperialOrMetric = prompt('Do you want to calculate your BMI with imperial or metric figures?')
const weight = parseFloat(prompt('Please enter your weight (metric - kg or imperial - lb)'))
const height = parseFloat(prompt('Please enter your height (metric - m or imperial - in)'))

console.log(imperialOrMetric, typeof userNum1)
console.log(weight, typeof userNum2)
console.log(height, typeof mathsOperator)

// Mathematical calculations and output
if (imperialOrMetric === 'metric') {
  const bmi = (weight / (height * height))
  alert(`Your BMI is ${bmi}`)
} else {
  const bmi = (weight / (height * height)) * 703
  alert(`Your BMI is ${bmi}`)
}



// Trip Calculator

// Gathering info from user for calculation
const distance = parseFloat(prompt('Please enter the distance you are travelling in miles'))
const fuelEfficiency = parseFloat(prompt('Please enter your car\'s fuel efficiency in miles per gallon'))
const costPerGallon = parseFloat(prompt('Please enter your fuel price per gallon GBP'))
const speed = parseFloat(prompt('Please enter the speed you will be travelling in miles per hour'))

// console.log(distance)
// console.log(fuelEfficiency)
// console.log(costPerGallon)
// console.log(speed)

// Calculating a value for time taken rounded to 1dp
const time = (distance / speed)
const roundedTime = time.toFixed(1)
// console.log(time)
// console.log(roundedTime)

// Calculating a value for cost of trip rounded to 2dp
const cost = (distance / fuelEfficiency) * costPerGallon
const roundedCost = cost.toFixed(2)
// console.log(roundedCost)
// console.log(cost)

// If statement to account for higher speeds
if (speed >= 60) {
  if (speed >= 74) {
    alert('You\'re travelling too fast, slow down!')
  } else {
    const sillySpeed = (speed - 60) * 2
    const sillyFuelEfficiency = fuelEfficiency - sillySpeed
    const sillyCost = (distance / sillyFuelEfficiency) * costPerGallon
    const roundedSillyCost = sillyCost.toFixed(2)
    console.log(sillySpeed)
    console.log(sillyFuelEfficiency)
    alert(`You trip will take ${roundedTime} hours and cost £${roundedSillyCost}`)
  }
} else {
  alert(`You trip will take ${roundedTime} hours and cost £${roundedCost}`)
}

// Still has an issue calculating trip as costing £infinity