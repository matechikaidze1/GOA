function WeatherApp() {
    const app = document.createElement("div");
    app.style.textAlign = "center";
    app.style.marginTop = "50px";
  
    const title = document.createElement("h1");
    title.innerText = "weather app";
    app.appendChild(title);
  
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "enter city name";
    app.appendChild(input);
  
    const button = document.createElement("button");
    button.innerText = "get weather";
    app.appendChild(button);
  
    const weatherText = document.createElement("p");
    app.appendChild(weatherText);
  
    button.onclick = async () => {
      const city = input.value;
      if (!city) {
        weatherText.innerText = "enter city";
        return;
      }
      
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        
        if (data.cod === 200) {
          weatherText.innerText = `Temperature: ${data.main.temp}°C, ${data.weather[0].description}`;
        } else {
          weatherText.innerText = "invalid city";
        }
      } catch {
        weatherText.innerText = "error while getting weather data";
      }
    };
  
    document.body.appendChild(app);
  }
  
  WeatherApp();
  