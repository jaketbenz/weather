import "./index.css";

let cityName = "Chicago";
let units = "imperial";

const fahrenheitButton = document.querySelector(".fahrenheit__button");
const celsiusButton = document.querySelector(".celsius__button");
fahrenheitButton.addEventListener("click", () => {
	if (celsiusButton.classList.contains("active")) {
		fahrenheitButton.classList.add("active");
		celsiusButton.classList.remove("active");
		units = "imperial";
		let cityName;
		if (searchInput.value === "") {
			cityName = "Chicago";
		} else {
			cityName = searchInput.value;
		}
		getCurrentWeather(cityName, units);
		getDailyForecast(cityName, units);
		getHourlyForecast(cityName, units);
	}
});
celsiusButton.addEventListener("click", () => {
	if (fahrenheitButton.classList.contains("active")) {
		celsiusButton.classList.add("active");
		fahrenheitButton.classList.remove("active");
		units = "metric";
		let cityName;
		if (searchInput.value === "") {
			cityName = "Chicago";
		} else {
			cityName = searchInput.value;
		}

		getCurrentWeather(cityName, units);
		getDailyForecast(cityName, units);
		getHourlyForecast(cityName, units);
	}
});

const searchInput = document.querySelector(".form-control");
searchInput.addEventListener("submit", (e) => {
	e.preventDefault();
});

const searchButton = document.querySelector(".search__button");
searchButton.addEventListener("click", async () => {
	if (searchInput.value === "") {
		return "Chicago";
	}
	getCurrentWeather(searchInput.value, units);
	getHourlyForecast(searchInput.value, units);
	getDailyForecast(searchInput.value, units);
});

const getCurrentWeather = async (cityName, units) => {
	const weatherConditions = document.querySelector(".weather__conditions");
	const locationCity = document.querySelector(".location__city");
	const locationDate = document.querySelector(".location__date");
	const locationTemperature = document.querySelector(
		".location__temperature"
	);
	const locationIcon = document.querySelector(".location__image");
	const weatherSunrise = document.querySelector(".weather__sunriseTime");
	const weatherSunset = document.querySelector(".weather__sunsetTime");
	const weatherFeel = document.querySelector(".weather__feelsTemperature");
	const weatherHumidity = document.querySelector(
		".weather__humidityPercentage"
	);
	// const weatherChance = document.querySelector(".weather__rainChance");
	const weatherWind = document.querySelector(".weather__windSpeed");

	try {
		const apikey = "3df118afb0098e7f7c49145c27c3f311";
		// const response = await fetch(
		// 	`http://api.weatherapi.com/v1/current.json?key=${key}&q=Chicago`
		// );
		console.log(cityName);
		const location = await fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apikey}`
		);
		const locationData = await location.json();
		// console.log(locationData);
		const latitude = locationData[0].lat;
		const longitude = locationData[0].lon;
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}`
		);
		const weatherData = await response.json();
		console.log(weatherData);

		weatherConditions.innerHTML = weatherData.weather[0].description;
		locationCity.innerHTML = weatherData.name;

		// const options = { weekday: "long" };
		const date = new Date(weatherData.dt * 1000);
		const timeOfDay = `${date
			.toLocaleTimeString([], {
				hour: "numeric",
				minute: "2-digit",
			})
			.replace(" AM", "AM")
			.replace(" PM", "PM")}`;
		// const dayOfTheWeek = new Intl.DateTimeFormat("en-US", options).format(
		// 	date
		// );
		// const dayOfTheMonth = new Intl.DateTimeFormat("en-US").format(date);

		locationDate.innerHTML = `Today at ${timeOfDay}`;
		locationTemperature.innerHTML = `${Math.round(weatherData.main.temp)}°`;
		locationIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
		// locationIcon.src = "./img/Untitled 6.png";

		weatherSunrise.innerHTML = `${new Date(
			weatherData.sys.sunrise * 1000
		).toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "2-digit",
		})}`;
		weatherSunset.innerHTML = `${new Date(
			weatherData.sys.sunset * 1000
		).toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "2-digit",
		})}`;

		weatherFeel.innerHTML = `${Math.round(weatherData.main.feels_like)}° `;
		weatherHumidity.innerHTML = `${weatherData.main.humidity}%`;
		weatherWind.innerHTML = `${Math.round(weatherData.wind.speed)} mph`;
	} catch (error) {
		// alert(error);
		// return null;
	}
};

const dailyForecastContainer = document.querySelector(
	".daily__forecastContainer"
);
const hourlyForecastContainer = document.querySelector(
	".hourly__forecastContainer"
);
const dailyButton = document.querySelector(".daily__button");
const hourlyButton = document.querySelector(".hourly__button");

dailyButton.addEventListener("click", () => {
	if (dailyForecastContainer.classList.contains("d-none")) {
		dailyButton.classList.add("active");
		dailyForecastContainer.classList.remove("d-none");
		hourlyButton.classList.remove("active");
		hourlyForecastContainer.classList.add("d-none");
	}
});
hourlyButton.addEventListener("click", () => {
	if (hourlyForecastContainer.classList.contains("d-none")) {
		hourlyButton.classList.add("active");
		hourlyForecastContainer.classList.remove("d-none");
		dailyButton.classList.remove("active");
		dailyForecastContainer.classList.add("d-none");
	}
});

const getDailyForecast = async (cityName, units) => {
	try {
		const apikey = "3df118afb0098e7f7c49145c27c3f311";
		const location = await fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apikey}`
		);
		const locationData = await location.json();
		// console.log(locationData);
		const latitude = locationData[0].lat;
		const longitude = locationData[0].lon;
		const weatherData = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=8&appid=${apikey}&units=${units}`
		);
		const forecastData = await weatherData.json();
		// console.log(forecastData);

		const options = { weekday: "long", timeZone: "Etc/GMT" };

		// const time = new Intl.DateTimeFormat("en-US", options).format(
		// 	new Date(forecastData.list[0].dt * 1000)
		// );
		// console.log(time);

		const dailyForecast = document.querySelector(".daily__forecast");
		dailyForecast.innerHTML = "";
		for (let i = 0; i < 8; i++) {
			const row = document.createElement("div");
			row.className =
				"weather__row d-flex justify-content-evenly bg-light bg-opacity-50 shadow-4-strong rounded-3 mb-2 pt-2";

			const dayPlusX = document.createElement("div");
			dayPlusX.className = `day__plus${i + 1} col-4 mb-4`;
			dayPlusX.innerHTML = `${new Intl.DateTimeFormat(
				"en-US",
				options
			).format(new Date(forecastData.list[i].dt * 1000))}`;

			const dayPlusXTemp = document.createElement("div");
			dayPlusXTemp.className = `day__plus${i + 1}col-4 text-center`;

			const dayPlusXMaxTemp = document.createElement("h6");
			dayPlusXMaxTemp.className = `day__plus${i + 1}High m-0`;
			dayPlusXMaxTemp.innerHTML = `${Math.round(
				forecastData.list[i].temp.max
			)}° `;

			const dayPlusXMinTemp = document.createElement("p");
			dayPlusXMinTemp.className = `day__plus${i + 1}High m-0`;
			dayPlusXMinTemp.innerHTML = `${Math.round(
				forecastData.list[i].temp.min
			)}° `;

			const dayPlusXImage = document.createElement("div");
			dayPlusXImage.className = `day__plus${i + 1}Image col-4 text-end`;

			const dayPlusXIcon = document.createElement("img");
			dayPlusXIcon.className = `day__plus${i + 1}Icon`;
			dayPlusXIcon.style = "height: 48px";
			dayPlusXIcon.src = `https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}.png`;

			dayPlusXTemp.appendChild(dayPlusXMaxTemp);
			dayPlusXTemp.appendChild(dayPlusXMinTemp);

			dayPlusXImage.appendChild(dayPlusXIcon);

			row.appendChild(dayPlusX);
			row.appendChild(dayPlusXTemp);
			row.appendChild(dayPlusXImage);
			dailyForecast.appendChild(row);
		}
	} catch (error) {
		// alert(error);
		// return null;
	}
};

const getHourlyForecast = async (cityName, units) => {
	try {
		const apikey = "3df118afb0098e7f7c49145c27c3f311";

		const location = await fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apikey}`
		);
		const locationData = await location.json();
		// console.log(locationData);
		const latitude = locationData[0].lat;
		const longitude = locationData[0].lon;
		const weatherData = await fetch(
			`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}&cnt=24`
		);
		const forecastData = await weatherData.json();
		// console.log(forecastData);
		// const time = forecastData.list;
		// console.log(time);
		const carousel1 = document.querySelector(".carousel__1");
		const carousel2 = document.querySelector(".carousel__2");
		const carousel3 = document.querySelector(".carousel__3");
		carousel1.innerHTML = "";
		carousel2.innerHTML = "";
		carousel3.innerHTML = "";

		// first carousel data
		for (let i = 0; i < 8; i++) {
			const hourPlusX = document.createElement("div");
			hourPlusX.className = `hour__plus${
				i + 1
			} d-flex justify-content-between justify-content-md-evenly  align-items-center`;

			const time = new Date(forecastData.list[i].dt * 1000);
			const hourPlusXTime = document.createElement("div");
			hourPlusXTime.className = `hour__plus${i + 1}Time`;
			hourPlusXTime.innerHTML = `${time.toLocaleTimeString(
				navigator.language,
				{
					hour: "2-digit",
					minute: "2-digit",
				}
			)}`;

			const hourPlusXTemp = document.createElement("h6");
			hourPlusXTemp.className = `hour__plus${i + 1}Temp m-0`;
			hourPlusXTemp.innerHTML = `${Math.round(
				forecastData.list[i].main.temp_max
			)}° `;

			const hourPlusXIcon = document.createElement("img");
			hourPlusXIcon.className = `hour__plus${i + 1}Icon `;
			hourPlusXIcon.src = `https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}.png`;

			hourPlusX.appendChild(hourPlusXTime);
			hourPlusX.appendChild(hourPlusXTemp);
			hourPlusX.appendChild(hourPlusXIcon);
			carousel1.appendChild(hourPlusX);
		}
		// second carousel data
		for (let i = 8; i < 16; i++) {
			const hourPlusX = document.createElement("div");
			hourPlusX.className = `hour__plus${
				i + 1
			} d-flex justify-content-between justify-content-md-evenly  align-items-center`;

			const time = new Date(forecastData.list[i].dt * 1000);
			const hourPlusXTime = document.createElement("div");
			hourPlusXTime.className = `hour__plus${i + 1}Time`;
			hourPlusXTime.innerHTML = `${time.toLocaleTimeString(
				navigator.language,
				{
					hour: "2-digit",
					minute: "2-digit",
				}
			)}`;

			const hourPlusXTemp = document.createElement("h6");
			hourPlusXTemp.className = `hour__plus${i + 1}Temp m-0`;
			hourPlusXTemp.innerHTML = `${Math.round(
				forecastData.list[i].main.temp_max
			)}° `;

			const hourPlusXIcon = document.createElement("img");
			hourPlusXIcon.className = `hour__plus${i + 1}Icon `;
			hourPlusXIcon.src = `https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}.png`;

			hourPlusX.appendChild(hourPlusXTime);
			hourPlusX.appendChild(hourPlusXTemp);
			hourPlusX.appendChild(hourPlusXIcon);
			carousel2.appendChild(hourPlusX);
		}
		// third carousel data
		for (let i = 16; i < 24; i++) {
			const hourPlusX = document.createElement("div");
			hourPlusX.className = `hour__plus${
				i + 1
			} d-flex justify-content-between justify-content-md-evenly align-items-center`;

			const time = new Date(forecastData.list[i].dt * 1000);
			const hourPlusXTime = document.createElement("div");
			hourPlusXTime.className = `hour__plus${i + 1}Time`;
			hourPlusXTime.innerHTML = `${time.toLocaleTimeString(
				navigator.language,
				{
					hour: "2-digit",
					minute: "2-digit",
				}
			)}`;

			const hourPlusXTemp = document.createElement("h6");
			hourPlusXTemp.className = `hour__plus${i + 1}Temp m-0`;
			hourPlusXTemp.innerHTML = `${Math.round(
				forecastData.list[i].main.temp_max
			)}° `;

			const hourPlusXIcon = document.createElement("img");
			hourPlusXIcon.className = `hour__plus${i + 1}Icon `;
			hourPlusXIcon.src = `https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}.png`;

			hourPlusX.appendChild(hourPlusXTime);
			hourPlusX.appendChild(hourPlusXTemp);
			hourPlusX.appendChild(hourPlusXIcon);
			carousel3.appendChild(hourPlusX);
		}
	} catch (error) {
		// alert(error);
		// return null;
	}
};

getCurrentWeather(cityName, units);
getDailyForecast(cityName, units);
getHourlyForecast(cityName, units);
