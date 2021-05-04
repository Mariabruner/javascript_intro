//Base Class

class Student {
    constructor(name, grade){
        this.name = name
        this.grade = grade
    }
}
let basicStudent = new Student("adam", 10)
// College Student
// roomNumber: 155
class CollegeStudent extends Student {
    constructor(name, grade, roomNumber){
        super(name, grade)
        this.roomNumber = roomNumber
    }
    greet() {
        return `Hello my name is ${this.name} come find me at room ${this.roomNumber}`
    }
}
let collegeStudent = new CollegeStudent("ryan", 14, 123)
console.log(collegeStudent)


class EFAStudent extends Student {
    constructor(name, grade, course, badge){
        super(name, grade)
        this.course = course
        this.badge = badge
    }
    greet() {
        return `Hello my name is ${this.name}, I'm currently in ${this.course}, ${this.badge} badge`
    }
}

let matthew = new EFAStudent("matthew", undefined, "web dev", "gold")
console.log(matthew.greet())