function saymyname(){
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("W")
    console.log("A")
    console.log("N")
    console.log("I")
}
saymyname()

function addtwonumber(number1, number2){
    // console.log(number1 + number2)
    let result = number1 + number2
    return result
}
// addtwonumber(1, 3)                //4
// addtwonumber(3, "4")              //34
// addtwonumber(3, "A")             //3A
// addtwonumber(3, null)            // 3

const result = addtwonumber(3, 4)
console.log("result :", result)

function loginusermessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return 
    }
    return `${username} justloggedin`
}
console.log(loginusermessage("Ashwani"))
console.log(loginusermessage())           //undefined

function calculatecartprice(val1, val2, ...num1){           // ...num1 is called as rest here sometimes we this as spread
    return num1
}
console.log(calculatecartprice(200, 300, 500, 2000))       //here val1 = 200, val2 = 300 o/p is 500, 2000

const user = {
    username : "Ashwani",
    price : 999
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user)

handleobject(
    {
        price : 999,
        username : "Badshah"
    }
)

const mynewarray = [100, 200, 300, 400]

function returnsecondvalue (getarray){
    return getarray[0]                      //return 1st value
}
// console.log(returnsecondvalue(mynewarray))
console.log(returnsecondvalue([100, 200, 300, 400]))