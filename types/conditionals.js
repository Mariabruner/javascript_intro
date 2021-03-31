// Conditional Statements

/* Conditionals are used to execute a piece of code if a condition is true. They allow our code to make decisions and carry out actions based on those decisions.
*/

// 1. If statements
// 2. Switches
// 3. Ternaries

// If statements
let mathResult = 2 + 2 === 4
console.log(mathResult)

if(mathResult) console.log('This equates to true')

//Block Body + Else

mathResult = 2 + 2 === 5
if(mathResult){
    console.log("This equates to true")
} else{
    console.log("This equates to false")
}

//Chaining if/else statements
//else ifs allow us to provide a new condition to test if the conditions above are not met.

let tempF = 55;

if(tempF > 95){
    console.log("It's hot!")
} else if(tempF > 50){
    console.log("It's warm!")
} else if (tempF > 32){
    console.log("It's chilly!")
} else if(tempF <= 32) {
    console.log("It's freezing!")
} else{
    console.log("I cannot provide the weather")
}

//Testing multiple conditions

let myName = 'Maria';
let age = 22;

if(myName === 'Maria' && age === 22){
    console.log('Name and age logged')
} else if(age === 22){
    console.log('Age Logged')
} else if (myName === 'Maria'){
    console.log(' Name Logged')
}

// Switches
//Run a block of code based on different cases.

tempF = 72;

switch(true){
    case tempF > 95: 
    console.log("It's hot!")
    break;
    case tempF > 50:
        console.log("It's warm")
        break;
    case tempF > 32:
        console.log("It's chilly!")
        break;
    case tempF <= 32:
        console.log("It's freezing!")
        break;
        default :
        console.log("I cannot provide the weather")
}

let dog = 'lab'

switch(dog){
    case 'husky':
        console.log("The husky jumped in snow!")
        break
    case 'lab':
        console.log("The lab caught the ball!")
        break
    case 'shepherd':
        console.log("The shepherd wagged its tail")
        break
}


//Ternaries
//Condition ? True : False

let lightSwitch = true;

lightSwitch ? console.log("Lights are on") : console.log("Lights are off")

tempF = 55;

tempF > 95 ? console.log("It's hot!")
: tempF > 50 ? console.log("It's warm")
: tempF > 32 ? console.log("It's chily!")
: tempF <= 32 ? console.log("It's freezing")
: console.log("I cannot provide the weather!")

