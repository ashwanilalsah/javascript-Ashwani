//singleton

//object.create              //using this method we can create object directly, this method can be called as constructor

// object literals

const mysym = Symbol("key1")            //for symbol

const jsuser = {
    name : "ASHWANI",
    "full name" : "ASHWANI LAL SAH",
    [mysym] : "mykey1",                
    age : 22,
    location : "Bhopal",
    email : "ashwani@google.com",
    isloggedin : false,
    lastloggedindays : ["monaday", "saturday"],
}

console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["full name"])
console.log(jsuser.mysym)          //this return the value but it cant return the original datatypes

console.log(typeof jsuser.mysem)   //it return string type
console.log(jsuser[mysym])

jsuser.email = "ashwani@chatgpt.com"      //we can update the value like this 
console.log(jsuser.email)

// Object.freeze(jsuser)      //no we can't change the value in jsuser updation is freezed

jsuser.email = "ashwani@microsoft.com"
console.log(jsuser.email)         //updation not possible updation is freezed
console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello js user")
}

jsuser.greetingtwo = function(){
    console.log(`hello js user , ${this.name}`)
}

// console.log(jsuser.greeting)        // show [function (anonymous)]
console.log(jsuser.greeting())
// console.log(jsuser.greetingtwo)      // show [function (anonymous)]
console.log(jsuser.greetingtwo())  