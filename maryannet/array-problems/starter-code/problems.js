/* eslint-disable no-unused-vars */

// using `filter` write a function which returns all the string elements in an array
// eg: stringsOnly([10, 'Mike', '23', NaN, 'elephant']) => ['Mike', '23', 'elephant']

function stringsOnly(array) {
  // console.log(array)
  const filteredArray = array.filter(item => {
    return typeof item === 'string'
  })
  return filteredArray
}


// using `map` write a function that converts an array of farenheit values to celcius
// eg: convertTemps([23, 140, 212, 41]) => [-5, 60, 100, 5]

function convertTemps(array) {
  // console.log(array)
  const temps = array.map(temp => {
    return (temp - 32) * (5 / 9)
  })
  return temps
}


// using `reduce` write a function that returns the total number of characters in an array of words
// eg: characterCount(['Stay', 'hungry', 'stay', 'foolish']) => 21

function characterCount(array) {
  // console.log(array)
  const count = array.reduce((acc, sum, index) => {
    sum = array[index].length
    return acc + sum
  }, 0)
  return count
}


// using `some` write a function that determines whether an array contains a falsey value
// eg: containsFalsey([100, {}, [], 'Mike']) => false, containsFalsey([100, {}, NaN, 'Mike']) => true

function containsFalsey(array) {
  // console.log(array)
  const isFalsey = array.some(element => {
    return !element
  })
  return isFalsey
}


// using `every` write a function that determines whether every number in an array is a square number (ie its square root is a whole number)
// eg: allSquare([81, 9, 16]) => true, allSquare([10, 50, 8]) => false


function allSquare(array) {
  // console.log(array)
  const squares = array.every(element => {
    return element % Math.sqrt(element) === 0
  })
  return squares
}


// using any array method, write a function that returns the product of an array (ie the values multiplied by each other). Your function should convert strings to numbers, and should only return a positive number
// eg: positiveProduct([5, 12, 6]) => 360, positiveProduct([-14, 8, 9]) => 1008

function positiveProduct(array) {
  // console.log(array)
  const positivity = array.reduce((acc, sum, index) => {
    sum = (parseFloat(array[index]))
    return Math.abs(acc * sum)
  }, 1)
  return positivity
}

// Almost there with this one!!

// using any array method, write a function that returns the string elements of an array that have a given number of characters or larger
// eg: wordsOfLength(['emu', 'caterpiller', 'rooster'], 4) => ['caterpiller', 'rooster']

function wordsOfLength(array, minLength) {
  // console.log(array)
  const stringOfLength = array.filter(item => {
    return item.length >= minLength
  })
  return stringOfLength
}

// using any array method, write a function that converts an array of measurements as strings, into an array of numbers
// eg: measurementToNumber(['10cm', '4.2cm', '205cm']) => [10, 4.2, 205]

function measurementToNumber(array) {

}

// using `split` and `filter` write a function that counts the number of vowels in a sentence
// eg: numberOfVowels('Stay classy San Diego') => 6

function numberOfVowels(string) {

}

// using, `split`, `map` and `join`, write a function that capitalises the first letter of each word in a sentance
// eg: titleCase('The lord of the rings') => 'The Lord Of The Rings'

function titleCase(string) {

}

// // Jack's Answers

// 1 new message since 10:41 on 11 September
// Mark as read
// Jenny Judova 10:16
//  function containsFalsey(array) {
//   console.log(array)
//   const falsy = [undefined, null, NaN, 0, '', 'false']
//   const falsyCheck = array.some((string) => {
//     return falsy.includes(string)
//   })
//   console.log(falsyCheck)
//   return falsyCheck
// }

// // // SHORTER SOLUTION
// // function containsFalsey(array) {
// //   const falsy = [undefined, null, NaN, 0, '', 'false']
// //   return falsyCheck = array.some(string => falsy.includes(string))
// // } 
// Paul Cooke 10:24
// function allSquare(array) {
//   return array.every(x => Math.sqrt(x)%1 === 0 )
// }
// Matt Wilkie - London 10:41
// function numberOfVowels(string) {
//   const lowerCase = (string.toLowerCase())
//   const splitArray = (lowerCase.split(''))
//   return (splitArray.filter(item => (item ===  'a') || (item ===  'e') || (item ===  'i') || (item ===  'o') || (item ===  'u'))).length
// }
// new messages
// Jack May 10:59
// /* eslint-disable no-unused-vars */

// // using `filter` write a function which returns all the string elements in an array
// // eg: stringsOnly([10, 'Mike', '23', NaN, 'elephant']) => ['Mike', '23', 'elephant']

// function stringsOnly(array) {
//   return array.filter(item => typeof item === 'string')
// }

// // using `map` write a function that converts an array of farenheit values to celcius
// // eg: convertTemps([23, 140, 212, 41]) => [-5, 60, 100, 5]

// function convertTemps(array) {
//   const newArray =  array.map((temp) => {
//     return (temp - 32) * 5 / 9
//   })
//   return newArray
//   // return array.map(temp => (temp - 32) * 5 / 9)
// }

// // using `reduce` write a function that returns the total number of characters in an array of words
// // eg: characterCount(['Stay', 'hungry', 'stay', 'foolish']) => 21

// function characterCount(array) {
//   return array.reduce((total, word) => {
//     return total + word.length
//   }, 0)
// }

// // using `some` write a function that determines whether an array contains a falsey value
// // eg: containsFalsey([100, {}, [], 'Mike']) => false, containsFalsey([100, {}, NaN, 'Mike']) => true

// function containsFalsey(array) {
//   return array.some(item => {
//     return !item
//   })
// }

// // using `every` write a function that determines whether every number in an array is a square number (ie its square root is a whole number)
// // eg: allSquare([81, 9, 16]) => true, allSquare([10, 50, 8]) => false


// function allSquare(array) {
//   return array.every(x => {
//     return Math.sqrt(x) % 1 === 0 
//   })
// }

// // using any array method, write a function that returns the product of an array (ie the values multiplied by each other). Your function should convert strings to numbers, and should only return a positive number
// // eg: positiveProduct([5, 12, 6]) => 360, positiveProduct([-14, 8, 9]) => 1008

// function positiveProduct(array) {
//   return array.reduce((product, num) => {
//     return Math.abs(product * 1)
//   }, 1)
// }

// // using any array method, write a function that returns the string elements of an array that have a given number of characters or larger
// // eg: wordsOfLength(['emu', 'caterpiller', 'rooster'], 4) => ['caterpiller', 'rooster']

// function wordsOfLength(array, minLength) {
//   return array.filter(word => {
//     return word.length >= minLength
//   })
// }

// // using any array method, write a function that converts an array of measurements as strings, into an array of numbers
// // eg: measurementToNumber(['10cm', '4.2cm', '205cm']) => [10, 4.2, 205]

// function measurementToNumber(array) {
//   array.map(measurement => parseFloat(measurement))
// }

// // using `split` and `filter` write a function that counts the number of vowels in a sentence
// // eg: numberOfVowels('Stay classy San Diego') => 6

// function numberOfVowels(string) {
//   const vowels = 'aeiouAEIOU'
//   return string.split('')
//     .filter(character => vowels.includes(character)).length
// }

// // using, `split`, `map` and `join`, write a function that capitalises the first letter of each word in a sentance
// // eg: titleCase('The lord of the rings') => 'The Lord Of The Rings'

// function titleCase(string) {
//   const value = string.split(' ')
//     .map(word => word.charAt(0).toUppercase() + word.substr(1))
//     .join(' ')
//   console.log(value) 
//   return value
// }