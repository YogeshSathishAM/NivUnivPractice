console.log("recursive function")

// add digits of a number- first normal way

let num = 123456789, tempNum=0;sum=0

do {
    tempNum = num%10;
    console.log(tempNum)
num = parseInt(num/10)
//console.log(num)

sum += tempNum
} 

while(num!==0);
console.log(sum)

//*****************************************//

// now using recursive function to find sum of digits of a number
let tempNum1 =0;

function addDgitOfNumb(num){
    console.log("num is "+num)
    if(num===0){
        return 0;
    }
tempNum1 = num%10
console.log("tempNum1 is "+tempNum1)
num = parseInt(num/10)
return (tempNum1 + addDgitOfNumb(num))
}
console.log("The result of addDgitOfNumb(num) is "+addDgitOfNumb(26859))

//*****************************************//

// program to count down numbers to 1
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);

//*****************multiply digits of a number*************************** /

function MultDigs(num){
    console.log("num is "+num)
    if(num===0){
        return 1;
    }
tempNum1 = num%10
console.log("tempNum1 is "+tempNum1)
num = parseInt(num/10)
return (tempNum1 * MultDigs(num))
}
console.log("The result of MultDigs(num) is "+MultDigs(1234))
//*****************multiply digits of a number*************************** /


//*****************Factorial of a number*************************** /

function factNumb(num){
     if(num===0)
    return 1

     return num*factNumb(num-1)
     }
     console.log("the factNumb(num) is "+factNumb(5))
//*****************Factorial of a number*************************** /
//got grip of recursive function, yayyy...


