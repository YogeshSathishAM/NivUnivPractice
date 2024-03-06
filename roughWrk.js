let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  //string += "\n";
  console.log(string);
  string=""
}
//console.log(string);

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