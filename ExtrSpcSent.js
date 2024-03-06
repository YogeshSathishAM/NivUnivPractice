console.log("ihcbc");

let snt = "hello    there,  how are   you doing?  I am   fine.";
let str = "",
  newStr = "",
  countSpace = 0;

// try with if (space && Spacecount=1)

for (i = 0; i < snt.length; i++) {
  if (snt[i] !== " " && countSpace === 0) {
    str += snt[i];
    console.log("str in first IF is " + str);
  }

  // this IF code is only for the last word in snt to be added in newStr
  if (snt[i] !== " " && snt[i] === snt[snt.length - 1]) {
    newStr += str;
  }

  if (snt[i] === " " && countSpace === 0) {
    countSpace++;
    newStr += str + " ";
    console.log("newStr is " + newStr);
  }

  if (snt[i] === " " && countSpace === 1) {
    continue;
  }

  if (snt[i] !== " " && countSpace === 1) {
    countSpace = 0;
    str = 0;
    str += snt[i];
    console.log("str in last if is " + str);
  }
}
console.log(newStr);
let temp = "";
// to remove the "0" from newStr
