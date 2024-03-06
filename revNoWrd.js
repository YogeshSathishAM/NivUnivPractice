console.log("reverse a number")

let num = 19073465, tempNum=0; storeNum=0; arr=[];

do{
tempNum = num%10;
storeNum = storeNum*10 + tempNum

num = parseInt(num/10)
console.log(num)
}
while(num!==0)

console.log(storeNum)

// reverse a word
let word = "Phenomenal", strg=""
console.log(word.split(""))

for(i=word.length-1;i>=0;i--){
    strg += word[i]
}
console.log(strg)

// reverse a sentence
let sent1 = "hello, welcome to niveus solutions!", TempSent="";
let arr1 = [], finRes=""

for(i=0;i<sent1.length;i++){

    if(sent1[i]!==" "){
        TempSent += sent1[i]
    }

    if(sent1[i]===" "){
        arr1.push(TempSent)
        TempSent=""
    }

    if(sent1[i]===sent1[sent1.length-1]){
        arr1.push(TempSent)
    }

}
console.log(arr1)

for(i=arr1.length-1;i>=0;i--){
finRes += arr1[i]+" "
}
console.log(finRes)




