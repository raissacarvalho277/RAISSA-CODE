function searchCity(city) {
    let apiKey = "2b4313f041f1fca7400123ot91d63f92";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  
    // Show loading message
    let showTemper = document.querySelector(".current-temperature-value");
    showTemper.innerHTML = "Loading..."; // Before the request starts
  
    axios
      .get(apiUrl)
      .then(cityTemperature)
      .catch(function (error) {
        console.error("Error fetching weather data:", error);
        showTemper.innerHTML = "Weather data not available"; // Error handling message
      });
  }
  
  function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    let city = searchInputElement.value; // Get the city name from the input
    cityElement.innerHTML = city; // Display the city name
    searchCity(city); // Call the function to fetch and display weather data
  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let currentDateElement = document.querySelector("#current-date");
  let currentDate = new Date();
  currentDateElement.innerHTML = formatDate(currentDate); // Display the current date and time
  
  function cityTemperature(response) {
    console.log(response); // Log the response to check the data structure
    let temper = Math.round(response.data.temperature.current); // Round the temperature value
    let showTemper = document.querySelector(".current-temperature-value");
    showTemper.innerHTML = `${temper}°C`; // Display the temperature in the element
  }
  