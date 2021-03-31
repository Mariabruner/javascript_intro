// What is a boolean?
// They are either a true/false
/*
x = 5 <-- Never do this
var x = 5 <-- Don't do this either
let x = 5 <-- When you might change the value
const x = 5 <-- When you want the value to stay the same
*/
//creating a new variable (2 steps)
//Declaration
let y

//Initialization / variable assignment
y = 5
//Declaration and Initialization typically done together

//How can we make one?
let x = Boolean(5) //Function that turns something to a bool
x = Boolean(0)  //reassignment, OK to do
console.log(x)

let z = false
z = true
console.log(typeof z)

let result = 5 > 4
console.log(result)
/*
== checks for equality
>= 
>
<=
<

&& returns true if both (a && b) are true
|| returns true is either(a || b) are true
*/
let flippedBool = !true
//console.log(flippedBool)
console.log(!true || false)


//Truthy // Falsy
//Truthy 'test', [1, 2], { test:5 }, 1
let testResult = Boolean ([1, 2])
testResult = Boolean("test")
console.log(testResult)

//Falsey 0, "", {}, null, undefined, NaN
falseyTest = Boolean(0) //If you try to turn an empty [], {} you get back true
console.log(falseyTest)

//Bonus
let boolConv = !!("teststring") //Just for exposure, turns anything into a Boolean (turns it false, then back to true)
console.log(boolConv)






