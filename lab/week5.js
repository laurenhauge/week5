// Goal: Implement a weather application using data from an external API
// - Signup for an api key @ https://weatherapi.com
// - The API takes three inputs (querystring parameters)
//   - key = 79bee9cec94646bea2111705213004
//   - q = a location query (e.g. Chicago)
//   - days = number of days of forecast data to return, between 1-10
// - Example: https://api.weatherapi.com/v1/forecast.json?key=YOUR-API-KEY&q=Chicago&days=3
// - The basic recipe (algorithm) is included; write the rest of the recipe in the comments!
// - Lab: Follow the provided recipe and the "mock-up" provided in the hard-coded HTML; respond 
//        to the user filling out the location on the form by fetching the weather API and 
//        displaying the city/state, e.g. if the user enters "chicago" on the form, show "Current
//        Weather for Chicago, Illinois".
// - Homework: Complete the application by accepting a number of days; show the current weather 
//             conditions and forecast based on the number of days entered by the user.

window.addEventListener('DOMContentLoaded', async function() {
  // Get a reference to the "get weather" button
  let getWeatherButton = document.querySelector(`.get-weather`)

  // When the "get weather" button is clicked:
  getWeatherButton.addEventListener(`click`, async function(event){

    // - Ignore the default behavior of the button
    event.preventDefault()

    // - Get a reference to the elements containing the user-entered location and days
    let locationInput = document.querySelector(`#location`)
    let daysInput = document.querySelector(`#days`)

    // - Get the user-entered location and days from the element's value
    let location = locationInput.value
    let days = daysInput.value

    // default to 3 days if user enters no days, default to three day if user enters more than three days (free version of API)
    if (days.length < 1){
      days = 3
    }
    else if (days < 1) {
      days = 3
    } else if (days > 3) {
      days = 3
    }
    // console.log(days)

    // - Check to see if the user entered anything; if so:
    if (location.length > 0) { 

      // - Construct a URL to call the WeatherAPI.com API
      let url = `https://api.weatherapi.com/v1/forecast.json?key=79bee9cec94646bea2111705213004&q=${location}&days=${days}`
      
      // console.log(url)

      // - Fetch the url, wait for a response, store the response in memory
      let response = await fetch(url)

      // - Ask for the json-formatted data from the response, wait for the data, store it in memory
      let json = await response.json()

      // - Write the json-formatted data to the JavaScript console
      console.log(json)

      // - Store the interpreted location, current weather conditions, the forecast as three separate variables
      let locationResult = json.location
      let currentResult = json.current
      let forecastResult = json.forecast 

      // reference current element
      let currentElement = document.querySelector(`.current`)

      //replace current element's contents
      currentElement.innerHTML = `
        <div class="text-center space-y-2">
          <div class="font-bold text-3xl">Current Weather for ${locationResult.name}, ${locationResult.region}</div>
          <div class="font-bold">
            <img src="https:${currentResult.condition.icon}" class="inline-block">
            <span class="temperature">${currentResult.temp_f}</span>° 
            and
            <span class="conditions">${currentResult.condition.text}</span>
          </div>
        </div>
      </div>
      `
       // reference forecast element
       let forecastElement = document.querySelector(`.forecast`)

       forecastElement.innerHTML = (`<div class="text-center space-y-8">
       <div class="font-bold text-3xl">${days} Day Forecast</div>
       `)
      
      for (let i=0; i < days; i++) {
        let dayForecast = forecastResult.forecastday[i]
        

        //replace current element's contents
        forecastElement.innerHTML +=
        ( ` <div class="text-center space-y-8">
            <img src="https:${dayForecast.day.condition.icon}" class="mx-auto">
            <h1 class="text-2xl text-bold text-gray-500">${dayForecast.date}</h1>
            <h2 class="text-xl">High ${dayForecast.day.maxtemp_f}° – Low ${dayForecast.day.mintemp_f}°</h2>
            <p class="text-gray-500">${dayForecast.day.condition.text}</h1>
          </div>
        </div>
        `
        )
      }
    } 
    })
})