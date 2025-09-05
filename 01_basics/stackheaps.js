//     Heap memoy(non-premitive deatypes) ,     Stack memory(premitive)


let myname = "Ashwani"
let myanotherbname = myname

myanothername = "Badshah"

console.log(myname)

console.log(myanothername)

let user = {
    email : "ashwani@google.com",
    upi : "ashwani@ybl"
}

let usertwo = user
usertwo.email = "abc@google.com"  // reference of stack memory is heap as user data is store in heap and usertwo take reference from user


console.log(user.email)
console.log(usertwo.email)
