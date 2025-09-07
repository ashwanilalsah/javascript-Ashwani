// const coding = ["java", "cpp", "javascript", "python"]

// // const values = coding.forEach((item) => {
// //     console.log(item)
// //     return item                    //for each can't return any values it return undefined
// // });
// // console.log(values)

// filter is also just like a for each, but it return the value

const mynum= [1, 2, 3, 4 ,5, 6, 7, 8, 9, 10]

// const newnum = mynum.filter((nums) => (nums > 4))

// const newnum = mynum.filter((nums) => {return nums > 4})    // if we cant return here then it give empty array

// console.log(newnum)

//we can do the same work with foreach also

const newnum = []
mynum.forEach((num) => {
    if(num > 4)
    {
        newnum.push(num)
    }
   
});
console.log(newnum)
