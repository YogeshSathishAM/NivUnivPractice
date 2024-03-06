console.log("constructor")

//*********************************************************************/

// this si a constructor Person
function Person(name,age,job,location){  // same can be applid to Class
    this.name = name
    this.age=age
    this.job=job
    this.location=location
}

// constructor is used to create an object

let person1 = new Person("yogesh",67,"IT","Dubai") // here object person1 is created using the Person constructor
// In the above example, we have passed arguments to the constructor Person during the creation of the object person1

console.log(person1.name+" "+person1.age+" "+person1.job+" "+person1.location)

// creating another person object
let person2 = new Person("Raju",56,"Builder","Bangalore")
console.log(person2.name+" "+person2.age+" "+person2.job+" "+person2.location)
//*********************************************************************/


//*********************************************************************/

// using constructor function where new property can be added
function Persons () {
    this.name = 'Sam'
}

let peson1 = new Persons();
let peson2 = new Persons();

// adding new property to person1
peson1.age = 20;
// the age property is unique to person1 and person2 is not having this age property
console.log(peson1.age) // this works as age propety is added to peason1
console.log(peson2.age) // undefined since age property is not added to peason2
//*********************************************************************//

//*********************************************************************//
// changing property of an object

function animal(type){
    this.type=type
}
let animal1 = new animal("cat")
console.log(animal1.type) // cat

animal1.type = "lion"
console.log(animal1.type) // property changed from cat to lion
//*********************************************************************//

//*********************************************************************//
//We can also add properties and methods to a constructor function using a prototype

function Dog(){
    this.name="Jacky"
    this.gender="Male"
}

// creating objects of Dog
let dog1 = new Dog()
let dog2 = new Dog()

// Adding a propert using prototype so that the property can be added to all the objects of the constructor Dog

Dog.prototype.colour = "Brown"

console.log("dog1 colour: "+dog1.colour+" dog2 colour: "+dog2.colour)
//*********************************************************************//

//**************CONSTRUCTOR EXAMPLE FROM CHATgpt*********************************************//
console.log("CONSTRUCTOR EXAMPLE FROM CHATgpt")

// In Node.js, as in JavaScript in general, a constructor is a function that 
//is used to create and initialize objects. Constructors are typically defined 
//using the class syntax or as regular functions, and they are invoked with 
//the new keyword to create instances of objects.

// Constructor function
function Personx(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Creating an instance using the constructor
  const personx = new Personx('John', 30); 
  //above is nothing but the function calling with values passing(john and 30) where Personx is defined above 
  // 
  console.log(personx.name); // Output: John
  console.log(personx.age);  // Output: 30

  const personx1 = new Personx('Major', 45); // major and 45 are values passed and these are assigned to personx1 as name and age
// now to print the values passed to personx1
console.log("personx1 name and age is: "+personx1.name+" and "+personx1.age)


//**************CONSTRUCTOR EXAMPLE FROM CHATgpt ends*********************************************//
