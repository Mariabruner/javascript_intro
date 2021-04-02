// name(data) => data out
// f(x) = x * x // sqr function
/*
Way one: 
<keyword> <yourName>(<what i need to work>){
    //What I do
    return // what I want to give back
}
*/

//Two ways to write a function in js
//Normal Functions
function sqr(x){
    return x*x
}

console.log(sqr(5))

//Arrow Functions
let aSqr = (x) => {
    return x * x  //Explicit return
}
let bsqr = (x) => x * x 
let cSqr = x => x * x  //Implicit return

//Need to wrap variable if there is more than one. ex: (x, y) => x * y

function greet(){ //This needs no arguments to work
    console.log("Hello World")
}
greet()


function betterGreet(fName){ //This is a one argument function
    console.log("Hello " + fName)
}
betterGreet("Maria") //Passes in one argument

let createFullName = (fName, lName) => `${fName} ${lName}`

let fullName = createFullName("Maria", "Bruner")
console.log(fullName)


function add2(x, y) {
    let z = 5 //This line is not returned from the function call
   return x + y
}
console.log(add2(3, 5))