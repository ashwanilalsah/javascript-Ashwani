// const tinderUser = new Object()         //singleton

const tinderUser = {}        //empty object

tinderUser.id = "123dfhb"
tinderUser.name = "Ashwani"
tinderUser.isloggedIn = false

// console.log(tinderUser)

const regularUser= {
    email: "ashwanilalsah@gmail.com",
    fullname: {
        UserFullName:{
        firstName : "Ashwani",
        middleName: "Lal",
        lastName: "Sah"
        }
    }
}

// console.log(regularUser.fullname.UserFullName.firstName);
//console.log(regularUser.fullname?.UserFullName.firstName);        question mark is here for                                                     checking if the value is present or not

const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "a", 4 : "b"}

// const obj3 = Object.assign({}, obj1, obj2)  
//      {} is user for Target, obj1, obj2 is source

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const User = [
    {
    id : 1,
    email: "ashwanilalsah@gmail.com"
    },
    {
    id : 1,
    email: "ashwanilalsah@gmail.com"
    },
    {
    id : 1,
    email: "ashwanilalsah@gmail.com"
    },
    {
    id : 1,
    email: "ashwanilalsah@gmail.com"
    }
]

User[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))

// console.log(Object.values(tinderUser))

// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isloggedIn"))        //True
// console.log(tinderUser.hasOwnProperty("islogged"))       //False

const course = {
    courseName : "jamvaScript",
    courseFee : 999,
    courseInstructor : "Ashwanilalsah"
}

const{courseInstructor : instructor} = course

console.log(instructor)

[
{

},
                           //THIS IS NOTHING BUT JSON
{ 

},
{

},
{

}
]