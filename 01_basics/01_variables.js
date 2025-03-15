const accountId = 215784

let accountEmail = "ashwanilalsah@google.com"

var accountPassword = "djfyg"

accountCity = "Bhopal"

let accountState ;

// console.log(accountId)
// const -> value can't be re-assigned a value and can't be declare again(block scope)

// let-> can be re-assigned a value but can't be declare again (block scope)

// var-> can be re-assign a value and it can also be declare again (global scope)

// refer not to use var because of issue in block scope and functional scope)

accountEmail = "abc@gmail.com"
accountCity = "patna"
accountPassword = "jkrytgh"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])