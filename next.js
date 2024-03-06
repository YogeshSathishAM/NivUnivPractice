console.log("next.js")

//next function is commonly used in middleware functions within Express.js, 
//which is a popular web framework for Node.js. The next function is used to 
//pass control to the next middleware function in the stack.


const express = require('express');
const app = express();

// Middleware function
app.use((req, res, next) => {
    console.log('This middleware function is called.');
    // Call next to pass control to the next middleware function
    next();
});

// Route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log("in /")
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});