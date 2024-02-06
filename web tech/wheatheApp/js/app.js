// script.js

async function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Get your API key from a weather API provider
    const city = document.getElementById('cityInput').value;

    if (city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            const data = await response.json();

            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        }
    } else {
        alert('Please enter a city.');
    }
}
