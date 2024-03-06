console.log("setTimeout")

function add(){
  a=10,b=90
    let sum =a+b;
    console.log(sum)
}

//setTimeout(add,5000)

console.log("\n")

// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

// setTimeout(greet, 10000);
// console.log('This message is shown first');

// showing time every one seconds

function Time(){
    let time = new Date()
    console.log(time.toLocaleTimeString())
    setTimeout(Time,1000)
}
//Time()

// showing date and time every one seconds
// this is kind of recursive function but using setTimeOut

const dateTime =()=>{
    let time = new Date()
    let Time= time.toLocaleTimeString()

    let date = time.getDate()
let month = time.getMonth() + 1;
let year = time.getFullYear()

let ti = `${Time} & ${date}-${month}-${year}`

console.log(ti) // time displayed using a variable which is read in console.log

setTimeout(dateTime,1000)
}
dateTime()

