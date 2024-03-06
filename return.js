console.log("Normal function")

// without return
function add(){
    let a=6,b=4;
    let sum = a+b
    console.log(sum)
    }
add()

//*****************************************************************//
// return used in function. 
// return function will return the variable to the function which can be read after its included in CONSOLE.LOG
function add1(a,b){
    let sum = a+b
    //console.log(sum)
    return sum
}
console.log(add1(3,6))

//*****************************************************************//
// return use
function getRectArea(width, height) {

    if (width < height) {
      return width * height;
    }
   return width * height; // irrespective of if return statement above executes or not based on if condition, this return statement will execute since there is no condition applied here
  }
  
  console.log(getRectArea(4, 8)); // we can read return value only using CONSOLE.LOG