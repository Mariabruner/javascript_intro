//Objects

/*
syntax: 
    let obj = {
        k1: v1,
        k2: v2,
    }

    keys can be in "" but don't have to be if they are valied var names
    i.e. they don't start with a "number" or habe invalid characters, or has spaces
*/

let obj1 = {
    name: "Justin"
}
let obj2 = {
    "name": "Amit"
}
// There are two ways to get things out of objects: "Dot" notation and "square bracket" notation

console.log(obj1.name)
console.log(obj2["name"])

let car = {
    make: "Jeep",
    model: "Wrangler",
    year: 2020,
    miles: 10_000,
    owners: [
        {name: "Amy"}, 
        {name: "Josh"}
    ]
}
console.log(car.miles)
console.log(car["miles"])
console.log(car.owners[0].name) //obj can hold more than just a primitave type

let person = {
    fName: "Maria",
    lName: "Bruner",
    fullName: function(){
        return `${this.fName} ${this.lName}`
    },
    greet: function(greetWord){
        return `${greetWord} ${this.fName}`
    }
}

console.log(person.fName)
console.log(person.fullName())
console.log(person.greet("Hello"))

//This demo shows we can add new keys through assignment
let builderObj = {} //An empty object
console.log(builderObj)
builderObj.name = "Maria"
console.log(builderObj["age"] = 23)
builderObj.greet = function(greetWord){
    return `${greetWord} ${this.name}`
}
console.log(builderObj)
console.log(builderObj.greet("Hello"))

//A Look Ahead STACKS and QUEUS 
//Stacks are LIFO (Last in, First out)
//Queus are FIFO (First in, First out)

//A Look ahead at "Classes", special type of way to build an obj
// //Object oreiented programming (OOP)
// class Dog{
//     constructor(breed, age){
//         this.breed = breed
//         this.age = age
//     }
// }
// let fido = new Dog("lab", 25)
// console.log(fido.breed)

