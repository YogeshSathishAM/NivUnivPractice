console.log("Regular Expression")

let exp1 = "Yog@grhc.com"
let test1 = /yog/
console.log(test1.test(exp1)) // false because y is in uppercase, so add case insensitivity

// try with case insensitivity
let exp2 = "Yog@grhc.com hello"
let test2 = /yog/i
console.log(test2.test(exp2))

let exp3 = "Yog@grhc.com hello"
let test3 = /hello/i
console.log(test3.test(exp3))

// use match function of string

let str = "hello World, how 67 are you?"
let exp4 = /\w/g
console.log(str.match(exp4))

let str1 = "hello World, how 67 are you?"
let exp5 = /\d+/g // /\d/ means one digit and /\d+/ means more digits
console.log(str1.match(exp5))

let str2 = "hello World, how 675 384 are you?"
let exp6 = /\d+/g
console.log(str2.match(exp6))

// validate an email address
let email = "yogesh.am@niveus.com"
let exp7 = /^[\w]/
let exp8 = /.com$/ // $ means matches ending part of email
console.log("exp7 result: "+exp7.test(email))
console.log("exp8 result: "+exp8.test(email))

let email2 = "yogesh.am@niveus.com"
let exp9 = /^[\w]+.[\w]+@[\w]+[.com]/
console.log("exp9 result: "+exp9.test(email2))

const regex = /^(\w){8}(\#\!\&){2}$/g; // () gives wrong result with {2}
const str10 = 'abcde156#!&#!&';
const matches = str10.match(regex);
console.log(matches);

//email match having @

const email3 = "test@example.com";
const regex2 = /^[^\s@]+@[^\s@]+\.com$/; // from net
const regex3 = /^[\w]+@[\w]{5,10}[.com]/      // 7 means the letters in example word i.e, 7 letters. {5,10} means the words can be minimum 5 or max 10              

const result = regex2.test(email3);
const result2 = regex3.test(email3);

console.log("email3 result: "+result);
console.log("email3 result with regex3: "+result2);

// common example
// to test how mny numbers can be printed in a given format i.e, "-"

let num = "1839860-2644";
let rege = /^(\d{7})-(\d{4})$/
console.log("num with rege: "+rege.test(num));

//*********************************************************//
console.log("\n")
console.log("reg expr digits number combo")

let str11 = "193jkfk"
let reg11 = /[\w]+/ // \w means words and numbrs can come
let reg12 = /[\w]/  // below both conditions are true
console.log(reg11.test(str11))
console.log(reg11.test(str11))

console.log("number operations")

let num1 = "1918404"
let regexp3 = /\d/
let regexp4 = /[\d]+/
console.log(regexp3.test(num1))
console.log(regexp4.test(num1))

let num2= "1234506789"
let regex5 = /[6-7]/
console.log("regex5: "+regex5.test(num2))

let num3= "1234506789"
let regex6 = /[6-7]/
console.log("regex5: "+regex5.test(num2))

let num4= "12345"
let regex7 = /^[\d]{5}$/
let regex8 = /^\d{5}$/  // here without square brackets, ^ and $ are must
console.log("regex7: "+regex7.test(num4))
console.log("regex8: "+regex8.test(num4))

let num5 = "1935507357"
let regex9 = /^\d{10}$/
let regex10 = /^\d{6}$/
console.log("regex9: "+regex9.test(num5)) // true as num5 has only 10 digits
console.log("regex10: "+regex10.test(num5)) // false as num5 has more than 6 digits

// square bracket in RE
let str12= "hello world!"
let ge= /(el)/  // marches the combination of el in sentence
console.log(str12.match(ge))

// curved bracket in RE
let str13= "hello world"
let ge1= /[ho]/g // this searches for all h and o letters separately 
console.log(str13.match(ge1))

















