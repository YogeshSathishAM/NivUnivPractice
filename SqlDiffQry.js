const express = require('express');
const app = express();
const path = require("path")   

const pg = require("./dbConnect")  // refer dbConnec.js file 1for db connection

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,resp)=>{

console.log("1")

// pg.query("select * from personlist",(err,res)=>{
//     if(err)
//     console.log(err)

//     if(res){
//     console.log(res.rows)}
// })

// pg.query("select * from personlist").then((err,res)=>{
//     console.log("changed query 2")
//     if(err){console.log(err)}
//     if(res){console.log(res.rows)}
// })

console.log("changed query 3")
pg.query("select * from personlist")
.then((res)=>
{console.log(res.rows) 
resp.send(res.rows)})
.catch((err)=>{console.log(err)})

console.log("2")

})

app.listen(3000,(req,res)=>{
    console.log("listening to server 3000")
})