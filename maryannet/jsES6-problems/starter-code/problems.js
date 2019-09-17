/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string) {
  if (string) {
    return `Hello ${string}!`
  } else {
    return 'Hello World!'
  }
}

// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  return (Math.PI) * (radius * radius)
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  return (celcius * (9 / 5) + 32)
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  const revNumber = number + ''
  return parseFloat(revNumber.split('').reverse().join(''))
}

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  const noSpaces = string.replace(' ', '')
  const toArray = noSpaces + ''
  const reverseString = toArray.split('').reverse().join('')
  if (toArray === reverseString) {
    return true
  } else {
    return false
  }
}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  const noSpaces = string.replace(/\s/g,'')
  const lowerCase = noSpaces.toLowerCase()
  return lowerCase.split('').sort().join('')
}

// write a function which gets the total value of all elements in an array.
// it should be able to handle numbers and strings
// eg: sumArray([10, 9, 16]) => 35, sumArray(['10', '88', '1']) => 99
function sumArray(array) {
  // const toString = array.toString()
  // const numsInArray = parseFloat(array)
  // console.log(toString)
  // console.log(typeof toString)
  // console.log(numsInArray)
  return array.reduce((acc, sum) => {
    return acc + sum
  }, 0)
}

// in your sumArray( ) function you needed to parseInt both the arguments of the reduce method - so you were very close to getting the solution right!

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************

function frame(string) {
  const asterisks = '*'.repeat(string.length + 4)
  return `${asterisks}\n* ${string} *\n${asterisks}`
}

// write a function to remove all falsy values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  const falsyValues = [undefined, null, NaN, '', false]
  const falsyCheck = array.filter(() => {
    return !array.includes(falsyValues)
  })
  // console.log(falsyCheck)
  return falsyCheck
}


// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  const randomNumber = Math.floor(Math.random() * array.length)
  return array[randomNumber]

}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  const newArray = []
  array.sort(function(a, b) {
    return a - b
  })
  newArray.push(array[1])
  newArray.push(array[array.length - 2])
  return newArray
}

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  const mergedArray = arr1.concat(arr2)
  const uniqueArray = [...new Set(mergedArray)]
  return uniqueArray
}


// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  return array.map((string) => {
    const object = {}
    object[key] = string
    return object
  })
}// function arrayToObjects(array, key) {
//   const arrayToObjects = []
//   array.forEach( item => arrayToObjects.push({ [key]: item }))
//   return arrayToObjects
// }



// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {
  const keys = Object.keys(object)
  // console.log(typeof keys)
  return keys.map(key => {
    return [key, object[key]] 
  })
}

// function objectToArray(object) {
//   const objectToArray = []
//   for (const key in object){
//     objectToArray.push([key, object[key]])
//   }
//   return objectToArray
// }

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {

}

// write a function that FILLS every element of an array, except the first and the last, with the word 'Eggs'.
// eg: [ 'Bacon', 'Salmon', 'Bagel', 'Croissant', 'Tea', 'Coffee'] => [ 'Bacon', 'Eggs', 'Eggs', 'Eggs', 'Eggs', 'Coffee']
function eggsBreakie(array) {
  for (let i = 1; i < array.length - 1; i++) {
    array[i] = 'Eggs'
  }
  return array
}

// write a function that returns the number of items passed through (note: not the number of arguments)
// itemsCount(5, [ 1, 4 ,'hello' ], true) => 5
// note that result is not 3, as the function should count 5, 1, 4, 'hello' and true as 5 separate items regardless of some of them being in an array.
function itemsCount(a, b, c) {

}

// write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
// it should not return negative numbers
// eg: daysBetween("2017-01-01", "2017-02-01") => 31; daysBetween("2017-02-01", "2017-01-01") => 31
function daysBetween(date1, date2) {

}

// https://www.w3schools.com/js/js_date_methods.asp

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {

}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {

}
