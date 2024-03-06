// check if a number is palindrome

let numb = 123321, arr=[], result=true;
console.log(typeof(numb))
// convert number to string for operating in for loop
numb = numb.toString();
console.log(typeof(numb)) 
let temp = 0;
do{
   temp = numb%10 
   arr.push(temp)
   numb = parseInt(numb/10)
   console.log(numb)
}
while(numb!==0)
console.log(arr)

// now check palindrome with the array

for(i=0;i<arr.length;i++){
   for(j=(arr.length-1)-i;j>=0;j--){
      console.log("arr[i] is "+arr[i]+" arr[j] is "+arr[j])
   if(arr[i]!==arr[j]){
 result = false;
   }
   break;
   }
}
if(result)
console.log("the given number is a palindrome")
else{
   console.log("the given number is not a palindrome")

}

