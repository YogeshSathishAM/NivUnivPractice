console.log("Normal function")

// without return
function add(){
    let a=6,b=4;
    let sum = a+b
    console.log(sum)
    }
add()
 
//with return
function add1(){
    let a=6,b=4;
    let sum = a+b
    //console.log(sum)  //this isnt needed here as return is used which can be read by bringing function inside CONSOLE.LOG
    return sum
    }
console.log(add1())

//with return and variables being passed by calling function
function add2(a,b){
    let sum = a+b
    //console.log(sum)  
    return sum
    }
console.log(add2(10,55))

// Anonymous function Normal without return

let x = function(){
    let a=2,b=100
    let sum = a+b;
    console.log(sum)
}
x()

// Anonymous function Normal with return

let y = function(){
    let a=2,b=50
    let sum = a+b;
    return sum
}
console.log(y())

// Anonymous function Normal with variables predefined

let z = function(a,b){
    let sum = a+b;
    return sum
}
console.log(z(10,20))


// FUNCTION GETTING VALUES FROM OTHER FUNCTIONS  
console.log("FUNCTION GETTING VALUES FROM OTHER FUNCTIONS")

let t = function(a,b){
    sum=a+b;
console.log(sum)
    return sum
}
let res = t(10,60)
console.log("first res is "+res)

function multiply(res){
    let result = res * 10
    console.log("result is "+result)
    return result
}
//console.log("The value is "+multiply(res)) ans=700, it works
//multiply(t(10,60)) // this also works as function calling

function divide(x){
result = x/100
// console.log("x/100 is "+result) this works
return result
}
let multres = divide(multiply(res))

//console.log(divide(multiply(res)))  // this also works
console.log(multres)

function FinalRes(x){
    if(x>10){
console.log(`The result is greater than 10 i.e ${x}`)
    }
    else{
        console.log(`The result is smaller than 10 i.e ${x}`)
    }
}
FinalRes(multres)

// finding factorial

function fact(a){
    let fact=1;
for(i=a;i>0;i--){
fact *= i;
}
//console.log("The factorial is "+fact)
return fact
}
console.log(fact(5))

// find power of a given number to any power

function power(a,b){
    let res=1
for(i=b;i>0;i--){
 res = res*a
}
return res;
}
console.log(power(50,3))








