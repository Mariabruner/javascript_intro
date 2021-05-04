/* 
Classes are a template for creating objects.
They encapsulate data with code to work with that data. 
*/

/* Syntax
Class declarations
class <some class name> {
    constructor(<things needed to build the class>, <...>, ...){
        <this>
    }
}


Class expression

let <class name> = class {
    constructor(<things needed to build the class>, <...>, ...){
        <this>
    }
}
*/

//How to build a class and store data using the constructor
class Animal {
    constructor(name, isCute){
        this.name = name
        this.isCute = isCute
    }
}

let dog = new Animal("lab", true)
let bat = new Animal ("bat", true)
console.log(dog, bat)

let animalNames = ["great white shark", "zebra", "sugar glider"]
let animalArr = animalNames.map(animal => new Animal(animal, undefined))
console.log(animalArr)

class Point {
    constructor(x, y){
        this.x = x
        this.y = y 
    }
    location() {
        return [this.x, this.y]
    }
}

let p1 = new Point(5, 6)
console.log(p1)
console.log(p1.location())

class Student {
    constructor(name, grade){
        this.name = name
        this.grade = grade
    }
    greet() {
        return `Hello my name is ${this.name}`
    }
}

let aaron = new Student("aaron", 12)
console.log(aaron.greet())
aaron.name = "ryan"
console.log(aaron.greet())