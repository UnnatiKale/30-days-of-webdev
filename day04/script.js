const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");

const loading = document.getElementById("loading");
const weatherCard = document.getElementById("weatherForecast");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const icon = document.getElementById("weatherIcon");

const forecastContainer = document.getElementById("forecastContainer");
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = cityInput.value.trim();

    if (!city) return;

    loading.classList.remove("hidden");
    weatherCard.classList.add("hidden");
    forecastContainer.innerHTML = "";

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=api_key&units=metric`
        );

        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error("City not found");
        }

        cityName.textContent = data.name;
        temperature.textContent = `${data.main.temp}°C`;
        description.textContent = data.weather[0].description;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;

        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        changeBackground(data.weather[0].main);

        outfitSuggestion(data.main.temp);

        getForecast(city);

        loading.classList.add("hidden");
        weatherCard.classList.remove("hidden");

    } catch (error) {
        alert("City not found or API error");
        loading.classList.add("hidden");
    }

});

function changeBackground(condition) {

    const body = document.body;

    if (condition === "Clear") {
        body.style.background = "linear-gradient(135deg, #f6d365, #fda085)";
    }
    else if (condition === "Rain") {
        body.style.background = "linear-gradient(135deg, #4facfe, #00f2fe)";
    }
    else if (condition === "Clouds") {
        body.style.background = "linear-gradient(135deg, #bdc3c7, #2c3e50)";
    }
    else if (condition === "Snow") {
        body.style.background = "linear-gradient(135deg, #e6dada, #274046)";
    }
    else {
        body.style.background = "linear-gradient(135deg, #9c9d9d, #ACB6E5)";
    }
}

function outfitSuggestion(temp) {

    const suggestion = document.getElementById("outfitSuggestion");

    if (temp > 30) {
        suggestion.textContent = "☀ Wear light cotton clothes and stay hydrated!";
    }
    else if (temp > 20) {
        suggestion.textContent = "🌤 Great weather for casual outfits!";
    }
    else if (temp > 10) {
        suggestion.textContent = "🧥 A hoodie or light jacket is recommended.";
    }
    else {
        suggestion.textContent = "🥶 Wear heavy winter clothes and stay warm!";
    }
}

async function getForecast(city) {

    forecastContainer.innerHTML = "";

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=YOUR_API_KEY&units=metric`
        );

        const data = await response.json();

        const dailyData = data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );

        dailyData.forEach(day => {

            const card = document.createElement("div");
            card.classList.add("forecast-card");

            const date = new Date(day.dt_txt).toLocaleDateString();

            card.innerHTML = `
                <p>${date}</p>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">
                <p>${day.main.temp}°C</p>
            `;

            forecastContainer.appendChild(card);
        });

    } catch {
        console.log("Forecast error");
    }
}

