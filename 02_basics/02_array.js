const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)       //push in array but like this[" ",[]]

// console.log(marvel_heroes[3][1])

// //o/p is flash becouse ["thor", "ironman", "spiderman", ["superman", 
// // "flash", "batman"]]
// //   3.1        3.2         0       1           2            3.0 
const allheroes = marvel_heroes.concat(dc_heroes)
console.log(allheroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes] //spread like a broken glass

console.log(all_new_heroes)            // easy method

const another_array = [1, 2, 3, 4, 5, 6, 7, [1, 3, 4], [1, [3, 7]]]

const real_another_array = another_array.flat(Infinity)

// FLAT is used to arrange the array while array is present inside an array

console.log(real_another_array)

console.log(Array.isArray("ASHWANI"))       //return false as ahwani is not present in the array 

console.log(Array.from("ASHWANI")) //expected o/p 'A','S','H','W','A','N','I'

console.log(Array.from({name : "ASHWANI"}))      //return blank [ ] and it is interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))