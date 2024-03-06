console.log("IF-ELSE-IF")

//The "else if" statement in JavaScript allows you to check multiple 
//conditions sequentially. It's useful when you have more than two 
//possible outcomes based on different conditions

function checkWeather(weather) {
    if (weather === "rainy") {
        console.log("Remember to bring an umbrella!");
    } 
    else if (weather === "sunny") {
        console.log("Don't forget your sunglasses!");
        return; // Exit the function early if it's sunny
    } 
    else if (weather === "cloudy") {
        console.log("It might be a bit gloomy today.");
    } 
    else {
        console.log("Check the weather forecast for today.");
    }

    // Code here will not be executed if the weather is sunny
    console.log("Enjoy your day!");
}

checkWeather("sunny");

