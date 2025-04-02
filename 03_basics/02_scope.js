// let a = 10
// const b = 20
// var c = 30

// if(true){
//     let a = 50
//     const b = 60
//     var c = 70

// }

// console.log(a)               //10 as local scope
// console.log(b)             // 20 as value is constant
// console.log(c)            // 70 as var is global scope

// if(true){
//     // let d = 11
//     const e = 21
//     var f = 31
// }
// // console.log(d)              //not executed as it is a local scope
// // console.log(e)              // const cant be return 
// console.log(f)                //return 31 as it is a global scope

function one(){
    const username = "Ashwani"
    
    function two(){
        const website = "github"
        console.log(username)
    }
    // console.log(website)
    // two()
}
one()

if(true){
const username = "Badshah"
if(username === "Badshah"){
    const website = " github"
    console.log(username + website)
}
//console.log(website)
}
//console.log(username)



// +++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

addtwo(6)                 //canno`t access before initialization
const addtwo = function(num){
    return num + 2
}
