const key = "6e6947115bf44d5f83a133629232803";
console.log(`http://api.weatherapi.com/v1/current.json?key=${key}&q=london`);

const weatherConditions = document.querySelector(".weather__conditions");
const locationCity = document.querySelector(".location__city");
const locationDate = document.querySelector(".location__date");
const locationTemperature = document.querySelector(".location__temperature");
const locationIcon = document.querySelector(".location__image");
const weatherFeel = document.querySelector(".weather__feelsTemperature");
const weatherHumidity = document.querySelector(".weather__humidityPercentage");
const weatherChance = document.querySelector(".weather__rainChance");
const weatherWind = document.querySelector(".weather__windSpeed");

const getCurrentWeather = async () => {
	try {
		const response = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${key}&q=Chicago`
		);
		const weatherData = await response.json();
		console.log(weatherData);
		weatherConditions.innerHTML = weatherData.current.condition.text;
		locationCity.innerHTML = weatherData.location.name;
		locationDate.innerHTML = weatherData.location.localtime;
		locationTemperature.innerHTML = `${weatherData.current.temp_f}°F`;
		locationIcon.src = `${weatherData.current.condition.icon}`;

		weatherFeel.innerHTML = `${weatherData.current.feelslike_f}° F`;
		weatherHumidity.innerHTML = `${weatherData.current.humidity}%`;

		weatherWind.innerHTML = `${weatherData.current.wind_mph} mph ${weatherData.current.wind_dir}`;
	} catch (error) {}
};

getCurrentWeather();
