// remove last two digits from string and add in binning
console.log("string edit")
let empstr1="", empstr2="", str2=""
str2 = "hello world welcome12"

// str2.slice() // slice works when length is known

for(i=0;i<str2.length;i++){
console.log(i)

if(i<str2.length-2){
empstr1 += str2[i]
console.log("empstr1 is: "+empstr1)
}

if(i>=str2.length-2){
empstr2 += str2[i]
console.log("empstr2 is: "+empstr2)
}

}
console.log(empstr1+" "+empstr2) //em
// now to add last 2 characters of string in the beginning
console.log(empstr2+empstr1)

// now using slice method to do what we did above, can be used for any length string

let str3 = "beautiful36qwcjwdcij8u"
let part1 = str3.slice(0,str3.length-2)
let part2 = str3.slice(str3.length-2,str3.length)
console.log(part2+part1)