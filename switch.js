console.log("SWITCH.JS")

// The switch statement evaluates an expression. The value of the expression 
//is then compared with the values of each case in the structure. 
//If there is a match, the associated block of code is executed. The switch 
//statement is often used together with a break or a default keyword (or both)

var day = 3;
var dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Today is " + dayName);

// second example using switch

