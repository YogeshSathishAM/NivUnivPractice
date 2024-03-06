console.log("string methods")

let str = "hello there"
console.log(str.endsWith("r")) // false since str has e in ending, not r
console.log(str.endsWith("e")) // true

console.log(str.charAt(4)) // gives character at certain position, here its o for 4th place

console.log(str.concat("12"))

//NOT YET to remove the last 2 characters from string and join in beginning
console.log(str.match("h"))
console.log(str.matchAll("ib"))

console.log(str.length)

console.log(str.padEnd(17,9)) // It pads the string with another string (multiple times) until it reaches a given length
console.log(str.replace("e","p")) // replace e with p,find genExp operation also here

console.log(str.search("r")) // returns the position of character that we search for in the string

console.log(str.slice(2,7)) // hello

console.log(str.split(" "))

console.log(str.toLocaleUpperCase())

console.log(str.trimEnd())

console.log(str.trimStart())

console.log(str.valueOf("h"))

let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/))

// separate case
let str1 = "hello there, hello here"
console.log(str1.match(/lo/i))
console.log(str1.matchAll(/h/gi))

// remove last two digits from string and add in binning
let empstr1="", empstr2=""
let str2 = "hello world welcome"

// str2.slice() // slice works when length is known

for(i=0;i<str2.length;i++){
//console.log(str2[i])

if(str2[i]<str2.length-2)
empstr1 += str2[i]

if(str2[i]>=str2.length-2)
empstr2 += str2[i]
}
console.log(empstr1+" "+empstr2) //em






