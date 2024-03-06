console.log("Middleware")


//Middleware in JavaScript, particularly in the context of web development, 
//refers to functions that have access to the request and response objects in 
//an application's HTTP request-response cycle. These functions can modify the 
//request and response objects, terminate the request-response cycle, or pass 
//control to the next middleware function in the stack.

const express = require('express');
const app = express();

// Middleware function
app.use((req, res, next) => {
    console.log('This is a middleware function.');
    next(); // Pass control to the next middleware function
});

// Route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log("we are in /")
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});