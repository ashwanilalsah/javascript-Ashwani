// const useremail = "Aswani.ai"
const useremail = []
if(useremail){
    console.log("User Email found")
}
else{
    console.log("Uesr Email not found")
}

        //falsy value
// false, 0, -0, NaN(Not a Number), "", null, undefined, BigInt on

        // truthy value
// true, [], 'false', {}, " ", "0", function(){}

const emptyObject = { }
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty")
}

        // Nullish coalescing operator(??) : anull undefined

let val1;
// val1 = 5 ?? 10           //o/p is 5
// val1 = null ?? 10       // o/p is 10
// val1 = undefined ?? 10           // o/p is 10
// val1 = undefined ?? 10 ?? 20         // o/p is 10
val1 = undefined ?? 10 ?? -20         // o/p is 10
console.log(val1)


                    //terniary operator
//condition ? true : false

const iceteaprice = 100
iceteaprice <= 80 ? console.log("less than 80") : console.log("greater than 80")