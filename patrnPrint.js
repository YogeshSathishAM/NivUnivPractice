// print a triangle pattern
let str = "";
for(i=4;i>=0;i--){
    for(j=1;j<=(5-i);j++){
        //console.log("i "+i+" j "+j)
        str += "*"
    }
    console.log(str)
    str = ""
}

// print reverse triangle
console.log("print reverse triangle")
let str2=""
for(i=0;i<5;i++){
    for(j=0;j<(5-i);j++){
    str2 += "*"
    } 
    console.log(str2)
    str2=""
}

// print a pyramid
console.log("pyramid")
let str3="";

for(i=1;i<=5;i++){

   // to print blank spaces
    for(j=0;j<(5-i);j++){
    str3 += " "
    }

    // to print *
    for(k=0;k<(2*i-1);k++){
        str3 += "*"
        }
        console.log(str3)
        str3=""
}

// print a hollow square
let str4=""

for(i=0;i<5;i++){

    for(j=0;j<5;j++){

    if(i===0||i===4){
        str4 += "*"
    }

    else{
        if(j===0||j===4)
        str4 +="*"

    else{
        str4 +=" "
    }

    }
}
console.log(str4)
str4=""
}
