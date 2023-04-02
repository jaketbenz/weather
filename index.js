const key = "6e6947115bf44d5f83a133629232803";
// console.log(`http://api.weatherapi.com/v1/current.json?key=${key}&q=london`);

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

		weatherConditions.innerHTML = weatherData.current.condition.text;
		locationCity.innerHTML = weatherData.location.name;

		const options = { weekday: "long" };
		const date = new Date(weatherData.location.localtime);
		const timeOfDay = date.toLocaleTimeString("en-US");
		const dayOfTheWeek = new Intl.DateTimeFormat("en-US", options).format(
			date
		);
		const dayOfTheMonth = new Intl.DateTimeFormat("en-US").format(date);

		locationDate.innerHTML = `${timeOfDay} ${dayOfTheWeek}, ${dayOfTheMonth}`;
		locationTemperature.innerHTML = `${weatherData.current.temp_f} °F`;
		locationIcon.src = `${weatherData.current.condition.icon}`;

		weatherFeel.innerHTML = `${weatherData.current.feelslike_f} °F`;
		weatherHumidity.innerHTML = `${weatherData.current.humidity}%`;

		weatherWind.innerHTML = `${weatherData.current.wind_mph} mph ${weatherData.current.wind_dir}`;
	} catch (error) {}
};

function getCity() {
	const input = document.querySelector(".form-control");
	const cityName = input.value;

	return cityName;
}
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

const getTestDailyForecast = async (cityName) => {
	try {
		const apikey = "3df118afb0098e7f7c49145c27c3f311";
		const location = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=Chicago&appid=${apikey}`
		);
		const locationData = await location.json();
		console.log(locationData);
		const latitude = locationData[0].lat;
		const longitude = locationData[0].lon;
		const weatherData = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=8&appid=${apikey}&units=imperial`
		);
		const forecastData = await weatherData.json();
		console.log(forecastData);

		const options = { weekday: "long", timeZone: "Etc/GMT" };

		const time = new Intl.DateTimeFormat("en-US", options).format(
			new Date(forecastData.list[0].dt * 1000)
		);
		console.log(time);

		const dailyForecast = document.querySelector(".daily__forecast");
		for (i = 0; i < 8; i++) {
			const row = document.createElement("div");
			row.className =
				"weather__row d-flex justify-content-evenly bg-dark bg-opacity-50 shadow-4-strong mb-2 border border-2 border-dark-subtle rounded-3 ";

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
			)} °F`;

			const dayPlusXMinTemp = document.createElement("p");
			dayPlusXMinTemp.className = `day__plus${i + 1}High m-0`;
			dayPlusXMinTemp.innerHTML = `${Math.round(
				forecastData.list[i].temp.min
			)} °F`;

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
	} catch {}
};

const getTestHourlyForecast = async (cityName) => {
	try {
		const apikey = "3df118afb0098e7f7c49145c27c3f311";

		const location = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=Chicago&appid=${apikey}`
		);
		const locationData = await location.json();
		console.log(locationData);
		const latitude = locationData[0].lat;
		const longitude = locationData[0].lon;
		const weatherData = await fetch(
			`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=imperial&cnt=24`
		);
		const forecastData = await weatherData.json();
		console.log(forecastData);
		const time = forecastData.list;
		console.log(time);

		// first carousel data
		for (let i = 0; i < 8; i++) {
			const carousel1 = document.querySelector(".carousel__1");

			const hourPlusX = document.createElement("div");
			hourPlusX.className = `hour__plus${
				i + 1
			} d-flex justify-content-between align-items-center`;

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
			)} °F`;

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
			const carousel1 = document.querySelector(".carousel__2");

			const hourPlusX = document.createElement("div");
			hourPlusX.className = `hour__plus${
				i + 1
			} d-flex justify-content-between align-items-center`;

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
			)} °F`;

			const hourPlusXIcon = document.createElement("img");
			hourPlusXIcon.className = `hour__plus${i + 1}Icon `;
			hourPlusXIcon.src = `https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}.png`;

			hourPlusX.appendChild(hourPlusXTime);
			hourPlusX.appendChild(hourPlusXTemp);
			hourPlusX.appendChild(hourPlusXIcon);
			carousel1.appendChild(hourPlusX);
		}
		// third carousel data
		for (let i = 16; i < 24; i++) {
			const carousel1 = document.querySelector(".carousel__3");

			const hourPlusX = document.createElement("div");
			hourPlusX.className = `hour__plus${
				i + 1
			} d-flex justify-content-between align-items-center`;

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
			)} °F`;

			const hourPlusXIcon = document.createElement("img");
			hourPlusXIcon.className = `hour__plus${i + 1}Icon `;
			hourPlusXIcon.src = `https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}.png`;

			hourPlusX.appendChild(hourPlusXTime);
			hourPlusX.appendChild(hourPlusXTemp);
			hourPlusX.appendChild(hourPlusXIcon);
			carousel1.appendChild(hourPlusX);
		}
	} catch {}
};

getCurrentWeather();
// getForecast();
getTestDailyForecast();
getTestHourlyForecast();
