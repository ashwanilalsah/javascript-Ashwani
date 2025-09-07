const myobject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    py : 'python',
    swift : 'swift by apple'
}
for (const key in myobject) {               //for in loop
    
    console.log(`${key} is shortcut for ${myobject[key]}`)
}