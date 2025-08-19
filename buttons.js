const apiKey = "0d7d0ea42cade75534014734740c6f41"

    document.getElementById("get-weather").addEventListener("click", () => {
      const city = document.getElementById("city-input").value.trim();
      const weatherInfo = document.getElementById("weather-info");
      const errorMessage = document.getElementById("error-message");

      weatherInfo.innerHTML = "";
      errorMessage.textContent = "";

      if (!city) {
        errorMessage.textContent = "Please enter a city name.";
        return;
      }

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
          if (!response.ok) {
            throw new Error("City not found");
          }
          return response.json();
        })
        .then(data => {
          const cityName = data.name;
          const temp = data.main.temp;
          const description = data.weather[0].description;
          const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

          weatherInfo.innerHTML = `
            <h2>${cityName}</h2>
            <p><strong>Temperature:</strong> ${temp}°C</p>
            <p><strong>Condition:</strong> ${description}</p>
            <img src="${icon}" alt="${description}">
          `;
        })
        .catch(error => {
          errorMessage.textContent = error.message;
        });
    });
  
