let x =9, message = ""

const promise = new Promise((reject,resolve)=>{
if(x>=10){
message = "The given number is not a single digit"
resolve(message)
}

else{
message = "given number is a single digit number"
reject(message)
}
})
console.log(promise)

let check = ()=>{
    promise.then(val=>{
        console.log("this is the output "+val)
    }).catch(err=>{
        console.log("there was an error "+err)
    })
}
check()














