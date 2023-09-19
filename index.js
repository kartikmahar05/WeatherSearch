const apikey = "2f778a3ddfabd96464a3690b10a7fdcf"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheatherIcon = document.querySelector(".wheather-icon")
async function checkweather(City) {
    const response = await fetch(apiurl + City + `&appid=${apikey}`);
    var data = await response.json()
    console.log(data)
    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main == 'Clouds') {
        wheatherIcon.src = "cloudy-day.png"
    }
    else if (data.weather[0].main == 'Clear') {
        wheatherIcon.src = "sun.png"
    }
    else if (data.weather[0].main == 'Rain') {
        wheatherIcon.src = "rainy.png"
    }
}
searchBtn.addEventListener('click', () => {
    checkweather(searchBox.value);
})