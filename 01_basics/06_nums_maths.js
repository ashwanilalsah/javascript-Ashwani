// // const score = 200

// // console.log(score)

// // const balance = new Number(100)

// // console.log(balance)              // o/p is number : 100

// // console.log(balance.toString().length)    // number changed to string and length become 3. (100 = 3)

// // console.log(balance.toFixed(2))       // it means 100.00
// // console.log(balance.toFixed(1))       // it means 100.0

// // const othernumber = 123.265676

// // console.log(othernumber.toPrecision(4))      // used to precise the 4th number it means 123.4

// // const hundreds = 1000000

// // console.log(hundreds.toLocaleString())       // 1,000,000(AMERICAN)

// // console.log(hundreds.toLocaleString('en-IN'))      // 10,00,000(INDIAN)

// // ---------------------------------Maths------------------------------------

// console.log(Math)                    // object
// console.log(Math.abs(-4))          //abs -> absolute,  it changes - to + but not + to -

// console.log(Math.abs(4))

// console.log(Math.round(4.6))      // roundoff the value = 5
// console.log(Math.round(4.3))     //   equal to 4
// console.log(Math.ceil(4.2))     //   think like top(ceiling) = 5
// console.log(Math.floor(4.9))   //  think like a floor of a house = 4
// console.log(Math.min(4,5,2,6,1)) // minimum of a number = 1
// console.log(Math.max(4,5,2,6,1))   // maximum of a number = 6


console.log(Math.random())    // Take random value between 0 and 1
console.log((Math.random()*10) + 1) // for taking value greater than 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)   // Always take the value between min and max