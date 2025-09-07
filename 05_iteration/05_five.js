const coading = ['js', 'py', 'cpp', 'swift']
// coading.forEach( function (item) {
//     console.log(item)
// })

// coading.forEach( (item) => {
//     console.log(item)
// })

// function printme(item){
//     console.log(item)
// }

// coading.forEach(printme)

// coading.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const mycoading = [
    {
    language : 'javascript',
    languagefilename : 'js'
    },
    {
    language : 'python',
    languagefilename : 'py'
    },
    {
    language : 'cpp',
    languagefilename : 'c++'
    },
    {
    language : 'swift',
    languagefilename : 'swift by apple'
    }
]
mycoading.forEach( (item) => {
    console.log(item.languagefilename);
})