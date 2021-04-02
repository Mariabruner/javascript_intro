
//Let Const var ... others
let x = 5
const favNum = 42 //const cant be reassigned


var z = 10 //For now these are equal but they are BAD
y = 5
x = 9 //This is fine, it is a reassignment

//Scope
if (true){
    let x = 8 //not the same x as outside of if statement
}
console.log(x) //returns 9

// for (i = 0; i < 10; i++){
//     console.log(i)
// }
// console.log(i)

for (let j = 0; j < 10; j++){
    console.log(j)
}
console.log(j)
