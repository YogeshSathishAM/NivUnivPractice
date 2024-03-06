console.log("ARROW FUNCTION")

// variables within function
let fct = (a,b)=>{
    a=10,b=90
    let sum = a+b;
    return sum
}
console.log(fct())

// variables not inside function function

const add1 =()=>{
    let a=70, b=90
    sum=a+b;
    console.log("\n")
    console.log(sum)
    return sum
}
console.log(add1())

//variables defined outside function 

let a=90,b=100;

const add = ()=>{
let sum = a+b;
console.log("\n")
//console.log(sum)
return sum
}
//add() this also gives result
console.log(add())

