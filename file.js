const fs = require("fs")

// fs.mkdir("./NiveusAssignment",(err)=>{
//     if(err)
//     console.log("error in file creation")

//     console.log("file created")
// })

fs.appendFile("./NiveusAssignment/message.txt","this is newly created file \n",err=>{
    console.log("new file created inside NiveusAssignment folder")
})

