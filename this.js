console.log("this.js")

const person = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function() {
        return this.name + " " + this.surname
    }
}
console.log(person.sayName())

//*********************************************************************/

// this is a constructor Person
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
