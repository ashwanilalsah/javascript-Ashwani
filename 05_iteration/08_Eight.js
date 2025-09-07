// const myNum = [1, 2, 3]

// const mytotal = myNum.reduce(function(accumulator , currentvalue){
//     console.log(`acc: ${accumulator} and currval: ${currentvalue}`)
//     return accumulator + currentvalue}, 0)     // 0 is accumalator here, we can put here whatever value we want
//     console.log(mytotal)

const shopingcart = [
    {
        itemname : "cpp course",
        price : 1999,
    },
    {
        itemname : "javascript course",
        price : 4999,
    },
    {
        itemname : "java course",
        price : 2999,
    },
    {
        itemname : "py course",
        price : 199,
    },
]

const pricetopay = shopingcart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetopay)