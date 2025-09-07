const user = {
    username : "Ashwani",
    price : 999,
    welcomemessage : function(){
        console.log(`${this.username}, welcome to the website`)
    }
}
// user.welcomemessage()
// user.username = "Badshah"
// user.welcomemessage()

// function chai(){
//     let username = "Ashwani"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//         let username = "Ashwani"
//         console.log(this.username)
//     }
//     chai()

// const chai = ()  => {                 //arrow function is nothing but () => {}
//      let username = "Ashwani"
//     console.log(this.username)
// }
// chai()

// const addtwonumber = (num1, num2) => {
//     sum = num1 + num2
//     return sum
// }
// console.log(addtwonumber(3, 4))

// const addtwonumber = (num1, num2) => num1 + num2
// console.log(addtwonumber(3, 4))

// const addtwonumber = (num1, num2) => (num1 + num2)        //prefer this code instead of above one
// console.log(addtwonumber(3, 4))

const addtwonumber = (num1, num2) => ({username : "Ashwani"})
console.log(addtwonumber(3, 4))