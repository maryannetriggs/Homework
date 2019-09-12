/* eslint-disable no-unused-vars */

/*
Create an object that defines a laptop. It should have the following properties:

make (string)
model (string)
ram (number)
storage (number)
*/

const laptop = {
  make: 'Apple Mac',
  model: 'Snazzle-Bomb',
  ram: 2,
  storage: 10
}

/*
Create an object that defines a bottle of wine. It should have the following properties:

name (string)
grape (string, eg: Merlot)
vintage (number, eg: 2017)
volume (number, eg: 750)
amountRemaining (number, eg: 750)

It should have the following methods:

drink(amount) - removes the `amount` from the `amountRemaining`
refill(amount) - adds the `amount` to the amountRemaining

*/

const wineBottle = {
  name: 'Silver Moki',
  grape: 'Sauvignon Blanc',
  vintage: 2018,
  volume: 750,
  amountRemaining: 750,
  drink(amount) {
    return this.amountRemaining = this.volume - amount
  },
  refill(amount) {
    return this.amountRemaining += amount
  }
}

/*
Write a Product class that has the following properties:

name (string)
description (string)
price (number)
*/

class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
  }
}

/*
Write a Cart class that has the following properties:

contents (array)

and the following methods:

addItem(product) - adds the given product into the contents array
removeItem(product) - removes the given product from the contents array
empty() - removes all items from the contents array
getTotal() - returns the total price of all items in the contents array
*/

class Cart extends Product {
  constructor(contents) {
    super(name, contents)
    this.contents = [contents]
  }
  addItem(Product) {
    // return Product.forEach(element => {
    //   return this.contents.push(element)
    // })
  }
  removeItem(Product) {
    // return Product.forEach(element => {
    //   return this.contents.pop(element)
    // })
  }
  empty() {
    this.contents.length = 0
  }
  getTotal() {
    let totalPrice = 0
    this.contents.reduce((acc, sum) => {
      return totalPrice = acc + sum
    }, 0)
    console.log(totalPrice)
  }
}

// CONFUSED ABOUT ERRORS FOR THIS TEST

/*
Write a Shape class that has the following properties:

width (number)
height (number)

and the following methods:

getArea() - calculates the area of the shape
getPerimeter() - calculates the total length of all sides of the shape
*/

class Shape {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
  getPerimeter() {
    return (this.width * 2) + (this.height * 2)
  }
}

/*
Write a Square class that extends the Shape class above. It should have the same properties and methods as the Shape class, but only take a width when being instantiated. The height should be automatically set to be equal to the width.
*/

class Square extends Shape {
  getArea() {
    return this.width * this.width
  }
  getPerimeter() {
    return this.width * 4
  }
}

// NOT SURE WHY HEIGHT ERROR OCCURING AS HEIGHT NOT REQUIRED IN THIS CLASS

/*
Write a Tringle class that extends the Shape class above. It should have the following properties:

width (number)
height (number)

and the following methods:

getArea() - calculates the area of the triangle
getPerimeter() - calculates the perimeter of the triangle (assuming it's right-angled, so width + height + √width + √height)
*/

class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2
  }
  getPerimeter() {
    return Math.sqrt((this.width * this.width) + (this.height * this.height)) + this.height + this.width
  }
}

// FORMULA BASED ON PYTHAGORUS FOR PERIMETER