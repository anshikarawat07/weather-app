const API_KEY = "5878e469c456fd5a2afa28b50f3719c1";
let button = document.getElementById("Search");
let City = document.getElementById("city");
button.addEventListener("click", getWeather);
async function getWeather() {
    let city=City.value.trim();
    if (!city) return;
    
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    if (data.cod !=200) {
        document.getElementById("weather").innerHTML = `<p style="color: red;">City not found</p>`;
        return;
    }

    console.log(data);
    document.getElementById("weather").innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <img class="icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
        <p><strong>${data.weather[0].description}</strong></p>
        <p>Temperature: <strong>${data.main.temp}°C</strong></p>
        <p>Humidity: <strong>${data.main.humidity}%</strong></p>
        <p>Wind speed: <strong>${data.wind.speed} m/s</strong></p>

    `;
}