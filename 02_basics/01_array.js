const myarr = [0, 1, 2, 3, 4, 5]
// const myheros = ["Ashwani", "Badshah"]

// const myarr1 = new Array(1, 2, 3, 4)

// console.log(myarr[1])                          // o/p is 1

// myarr.push(6)

// console.log(myarr)

// myarr.pop()

// console.log(myarr)

// myarr.unshift(9)                     //add 9 at 0th position of an array

// console.log(myarr)

// myarr.shift()                      // remove array of 0th position

// console.log(myarr)

// console.log(myarr.includes(9))  //it check the value id present in array or not
// console.log(myarr.indexOf(9))   //check index of array, if not present return -1

// const newarray = myarr.join()     //change this array into string

// console.log(newarray)
// console.log(typeof newarray)     //string

          //slice    and     splice

console.log("A", myarr)

const myn1 = myarr.slice(1, 3)       // remove arr from index 1 to 2 exclude 3

console.log(myn1)                // Expected o/p (1, 2)

console.log("B", myarr)

const myn2 = myarr.splice(2,4)     //remove 4 element at index 2
 
console.log(myn2)              //expect o/p (2, 3, 4, 5)
