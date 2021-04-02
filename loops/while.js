//While Loop
/*
keyword = while

<keyword>(<some eval or expression that is true or false>){
    //Do something
}
*/

let i = 0
while(i <= 10){
    console.log(i)
    i++
}

//same as
for(let x=0; x<=10; x++){
    for(let y=0; y<=10; y++){
        console.log(x, y)
    }
}

//Breaks
while(true){
    console.log("Help this loop is always true")
    break;
}


let names = ["Justin", "Adam", "Kate", "Jim", "Amy"]
for(let name in names){
    let curName = names[name]
    console.log(curName)
    if (curName == "Kate") break
}

//Conitnues
let counter = -1
while(counter<= 20){
    counter++
    if (counter % 2 === 1) {
        continue 
    }
    console.log(counter)
}

//examples
// for(let tmp = 100; tmp>=0; tmp -= 5){
//     console.log(tmp)
// }

let tmp = 100;
while (tmp>=0){
    console.log(tmp)
    tmp -= 5
}
