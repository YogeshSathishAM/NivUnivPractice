// in synchronous promise we dont need to define and call async functions
// fetch is improvisation over synch promise

const requestURL =
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    

fetch(requestURL).then(res =>{
    result = res
    fetch(result).then()
}).catch(err =>{
    console.log(err)
})
let newResult = result.json() 