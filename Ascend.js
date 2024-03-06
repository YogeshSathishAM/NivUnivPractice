let arr1 = [9,2,44,89]
let temp=0;
// in ascending order
for(i=0;i<arr1.length;i++){

    for(j=0;j<arr1.length;j++){
        if(arr1[i]<arr1[j]){
temp=arr1[i]
arr1[i]=arr1[j]
arr1[j]=temp
        }
    }
    console.log(arr1)
}
console.log(arr1) // to get descending in line 7, replace '<' with '>'