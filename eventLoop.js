console.log("event loop")

//In JavaScript, an event loop is a mechanism that allows asynchronous tasks to be 
//executed in a non-blocking manner. It's at the heart of JavaScript's concurrency model, 
//ensuring that tasks are executed  efficiently without blocking the main execution thread.

//Event Loop: The event loop constantly checks two things: the call stack 
//and the event queue. If the call stack is empty, it takes the first event 
//from the queue and pushes it onto the call stack, effectively executing it. 
//This process continues indefinitely.

// Example 1: USING SETTIMEOUT()

console.log("Start");

// Asynchronous task using setTimeout()
setTimeout(() => {
  console.log("Async task 1");
}, 2000); // This will execute after 2000 milliseconds (2 seconds)

console.log("Middle");

// Another asynchronous task
setTimeout(() => {
  console.log("Async task 2");
}, 1000); // This will execute after 1000 milliseconds (1 second)

console.log("End");
console.log("\n")

// EXAMPLE-2 
console.log("EXAMPLE-2")
console.log("Start");

// Asynchronous task using Promise
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});

promise1.then((result) => {
  console.log(result);
});

console.log("Middle");

// Another asynchronous task
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 1000);
});

promise2.then((result) => {
  console.log(result);
});

console.log("End");

// YOU TUBE EXAMPLE FOR EVENT LOOP
console.log("\n")
console.log("YOU TUBE EXAMPLE FOR EVENT LOOP")

// JS is single threaded, asynchronous, non blocking language. Also there is HEAP
// it has CALL STACK, EVENT LOOP and a CALLBACK QUE and other API's
// HEAP is used for memory allocation and STACK holds execution context
// example:

function greeting(){
  console.log(sayHi())
  
}

function sayHi(){
  return "Hi"
}
greeting()

// in above example, greeting function gets in STACK which calls sayHi() function
// which then prints "Hi" message and sayHi() function is taken out of stack
// while greeting function still runs, then the greeting function also is removed out of stack

// TASK QUE
console.log("TASK QUE")