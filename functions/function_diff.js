// Hoisting

const add2 = (x, y) => {
    return x + y 
}


console.log(
    add2(2, 5),
    adder(2, 5)
)

function adder(x, y){
    return x + y
}