async function populate() {
    const requestURL =
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    
    const result = await fetch(requestURL)
   
   
    let neRes =await result.json() //await to be used so that the delay in getting result is solved
 
    //const request = new Request(requestURL);
// const response = await fetch(request);
// const superHeroes = await response.json();

console.log(neRes) // await can be added here or in newResult line else we get promise pending

  //console.log(neRes.members[2].powers[2]) // to get members key in first entry, in third entry to get the array powers and in powers to get Inferno, this code is written
  console.log(neRes.members) // to get members key in first entry
  console.log(neRes.members[2]) //to get 2nd object in members key in first entry
  console.log(neRes.members[2].powers)
  console.log(neRes.members[2].powers[4])

  // to print all array values of array in 3rd entry of members

  console.log("array values of array in 3rd entry of members are: ")
  for(i=0;i<neRes.members[2].powers.length;i++){
    console.log(i+1+". "+neRes.members[2].powers[i])
  }
 

}
populate()

// asynchronus callback function gives a non blocking behaviour to js
// for example when there is a code that has to wait for 3 seconds, the
// control goes to next line of code without waiting for three seconds
// so that js doesnt have to wait 
  