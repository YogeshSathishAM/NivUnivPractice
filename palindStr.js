console.log("palindrome of string")

let word =  "asdffdsa"
let result = 0

for(i=0;i<word.length;i++){
    console.log("word[i] is "+word[i])

    for(j=(word.length-1)-i;j>=0;j--){
        console.log("word[j] is "+word[j])
    if(word[i]!==word[j]){
        result=1
    }
    break;
    } 
}
if(result=1)
console.log("the given string is a palindrome")
else{
    console.log("the given string is not a palindrome")

}

