// const name = "Ashwani"

// const repoCount = 40

// //console.log(name + repoCount + "Values")
// //that is older version and nowadays that id not use frequently

// console.log(`my name is ${name} and my repocount is ${repoCount}`) //this is newer version, use this instead of previous console.log

// // const gameName = new String('ashwanils')

// // console.log(gameName[0]) //  o/p is a from ashwani

// // console.log(gameName.__proto__)      //    o/p is { } blank object

// // console.log(gameName.length)         //    o/p is 9 as ashwnails

// // console.log(gameName.toUpperCase())   //   o/p is ASHWANILS

// // console.log(gameName.charAt(2))       //   o/p  is h

// // console.log(gameName.indexOf('h'))    //   o/p is 2

// const gameName = new String('ashwani-ls')

// const newstring = gameName.substring(0 , 4)    // o -> st, 4 -> end.

// console.log(newstring)    //o/p is ashw 4 is not included  

// const anotherstring = gameName.slice(-8 , 4)    // -8 -> start (we can take starting in -ve also),  4 -> end

// console.log(anotherstring)

// const newstringone = '    ashwani   '

// console.log(newstringone)      //  o/p doesn't affect

// console.log(newstringone.trim())   //   o/p is 'ashwnai' anli spaces get trim

// const url = "https://ashwnai.com/ashwani%20lalsah"

// console.log(url.replace('%20' , '-'))

// console.log(url.includes('badshah'))        // for checking key as present or abscent, here badshah is abscent so, the o/p is false
const gameName = new String('ashwani-lal-sah')

console.log(gameName.split('-'))