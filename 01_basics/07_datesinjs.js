// // let myDate = new Date()
// // // console.log(myDate)

// // // console.log(myDate.toDateString());
// // // console.log(myDate.toString())
// // // console.log(myDate.toLocaleString())

// // // console.log(typeof myDate)                      //object

// // // let myCreatedDate = new Date(2025, 0, 29)

// // // console.log(myCreatedDate.toString())

// // // let myCreatedDate = new Date(2025, 0, 29, 5, 3)

// // // console.log(myCreatedDate.toDateString())

// // // console.log(myCreatedDate.toLocaleDateString())

// // console.log(myCreatedDate.toLocaleString())

// // let myCreatedDate = new Date("2025-00-29")           //invalid Date due to 00

// let myCreatedDate = new Date("01-29-2025")

// //console.log(myCreatedDate.toLocaleString())

// let mytimestamp = Date.now()

// console.log(mytimestamp)                      // o/p is in millisecond

// console.log(myCreatedDate.getTime())          // o/p is in millisecond

// console.log(Date.now())                       // o/p is in millisecond

// //For converting it in seconds we have to multiply it with 1000

// console.log(Math.floor(Date.now()/1000))

let newdate = new Date()

console.log(newdate)

console.log(newdate.getMonth()+1)        //because month will start with 00

console.log(newdate.getDay())             // today is friday so, it will show 5 becouse monday = 1

newdate.toLocaleString('defoult', { weekday: "long"})