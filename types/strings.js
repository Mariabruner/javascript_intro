// Single line comment
// console.log("This is text, and a string")

let str_a = "This is a double quote string"
let str_b = 'This is a single quote string'

// console.log('This is\nnew')
//Use this to add data into a string
let str_c = `This is a backtick quote string`
//^this is a template string

//Just mentioning this, we will talk more later
let str_d = String(5);

let f_name = 'Maria'
let l_name = 'Bruner'

//New op: unary operator that gives back type info
console.log(typeof f_name)

let full_name = f_name + ' ' + l_name
let template_full = `${f_name} ${l_name}`
let concat_full = f_name.concat(l_name)
console.log(concat_full)


let multi_line1 = 'this is a long string ' + 'and I want it on many lines'

let multi_line2 = 'this is also a long string \ and I want it on many lines'

// console.log(multi_line1)
// console.log(multi_line2)

// console.log(full_name)
// console.log(template_full)

let demo_str = "This is a demo"
let result = demo_str.slice(3)

// console.log(result)

let indexed_string = "Hello world!"
console.log(indexed_string)
console.log(indexed_string[0])
console.log(indexed_string[6])

