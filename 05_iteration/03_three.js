//                 // for of
// // [' ', ' ', ' ']         string Array
// // [{}, {}, {}]            object
// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     // console.log(arr)
//     console.log(num)
// }

// const greeting = 'hello world'
// for (const greet of greeting) {
//     console.log(greet)
// }

                // map
const map = new Map()
map.set("IN", "india")
map.set("USA", "united state of india")
map.set('FR', "france")
map.set("IN", "india")              //duplicate value not accessed

// console.log(Map)

for (const [key, value] of map) {
    console.log(key, ':-', value)
}