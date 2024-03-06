let arr1 = [1,41,19,101,56,32,11,7]
let max=arr1[0], min=arr1[0]

//printing the elements
for(i=0;i<arr1.length;i++){
    console.log(arr1[i])
}

// find largest
for(i=0;i<arr1.length;i++){
    if(arr1[i]>max){
        max=arr1[i]
    }
}
console.log("the greatest in the array is "+max)

// FIND SMALLEST
for(i=0;i<arr1.length;i++){
    if(arr1[i]<min){
        min=arr1[i]
    }
}
console.log("the smallest in the array is "+min)

// concerting number into a string
let nub = 9248934, strr="";
strr = nub.toString()
for(i=0;i<strr.length;i++){
    console.log(strr[i])
}