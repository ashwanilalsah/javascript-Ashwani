            //FOR

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
}

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(i + '*' + j + ' = ' + i*j)
    }
}
let myArray = ['Ashwani', 'Badshah', 'sabkapappaji']
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(myArray.join(' '))
    console.log(element)
}

        // Break and continue

for(let index = 1; index <= 20; index++)
{
    if(index == 5){
        console.log("5 is detected")
        // continue
        // break
    }
    console.log(`value of i is ${index}`)
}