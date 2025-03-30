const apiKey = "b4f1f93423ec4b7984874509253003";
const apiUrl = "https://api.weatherapi.com/v1/current.json?";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    const response = await fetch(apiUrl + `key=${apiKey}&q=${city}`);
    
    if(response.status !== 200) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C"; 
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";
    
        if(data.current.condition.text === "Overcast") {
            weatherIcon.src = "img/overcast.png";
        }
        if(data.current.condition.text === "Clear") {
            weatherIcon.src = "img/clear.png";
        }
        else if (data.current.condition.text === "Clouds") {
            weatherIcon.src = "img/cloudy.png";
        }
        else if (data.current.condition.text === "Partly cloudy") {
            weatherIcon.src = "img/partly-cloudy.png";
        }
        else if (data.current.condition.text === "Rain") {
            weatherIcon.src = "img/rain.png";
        }
        else if (data.current.condition.text=== "Snow") {
            weatherIcon.src = "img/snow.png";
        }
        else if (data.current.condition.text === "Thunderstorm") {
            weatherIcon.src = "img/thunderstorm.png";
        }
        else if (data.current.condition.text === "Fog") {
            weatherIcon.src = "img/fog.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }   
}

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
});