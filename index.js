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

// get the day after current day
const dayPlus1 = document.querySelector(".day__plus1");
const dayPlus1High = document.querySelector(".day__plus1High");
const dayPlus1Low = document.querySelector(".day__plus1Low");
const dayPlus1Icon = document.querySelector(".day__plus1Icon");

const dayPlus2 = document.querySelector(".day__plus2");
const dayPlus2High = document.querySelector(".day__plus2High");
const dayPlus2Low = document.querySelector(".day__plus2Low");
const dayPlus2Icon = document.querySelector(".day__plus2Icon");

const dayPlus3 = document.querySelector(".day__plus3");
const dayPlus3High = document.querySelector(".day__plus3High");
const dayPlus3Low = document.querySelector(".day__plus3Low");
const dayPlus3Icon = document.querySelector(".day__plus3Icon");

const dayPlus4 = document.querySelector(".day__plus4");
const dayPlus4High = document.querySelector(".day__plus4High");
const dayPlus4Low = document.querySelector(".day__plus4Low");
const dayPlus4Icon = document.querySelector(".day__plus4Icon");

const dayPlus5 = document.querySelector(".day__plus5");
const dayPlus5High = document.querySelector(".day__plus5High");
const dayPlus5Low = document.querySelector(".day__plus5Low");
const dayPlus5Icon = document.querySelector(".day__plus5Icon");

const dayPlus6 = document.querySelector(".day__plus6");
const dayPlus6High = document.querySelector(".day__plus6High");
const dayPlus6Low = document.querySelector(".day__plus6Low");
const dayPlus6Icon = document.querySelector(".day__plus6Icon");

const dayPlus7 = document.querySelector(".day__plus7");
const dayPlus7High = document.querySelector(".day__plus7High");
const dayPlus7Low = document.querySelector(".day__plus7Low");
const dayPlus7Icon = document.querySelector(".day__plus7Icon");

const getForecast = async () => {
	try {
		const response = await fetch(
			`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=Chicago&days=8`
		);
		const forecastData = await response.json();
		console.log(forecastData);

		// const options = { weekday: "long", timeZone: "Etc/GMT" };
		// const date = new Date(forecastData.forecast.forecastday[1].date);
		// const dayOfTheWeek = new Intl.DateTimeFormat("en-US", options).format(
		// 	date
		// );
		const options = { weekday: "long", timeZone: "Etc/GMT" };
		// const date = new Date(forecastData.forecast.forecastday[0].date);
		// const dayOfTheWeek = new Intl.DateTimeFormat("en-US", options).format(
		// 	new Date(forecastData.forecast.forecastday[0].date)
		// );
		// console.log(dayOfTheWeek);
		weatherChance.innerHTML = `${forecastData.forecast.forecastday[0].day.daily_chance_of_rain}%`;

		dayPlus1.innerHTML = `${new Intl.DateTimeFormat(
			"en-US",
			options
		).format(new Date(forecastData.forecast.forecastday[1].date))}:`;
		dayPlus1High.innerHTML = `${forecastData.forecast.forecastday[1].day.maxtemp_f} °F`;
		dayPlus1Low.innerHTML = `${forecastData.forecast.forecastday[1].day.mintemp_f} °F`;
		dayPlus1Icon.src = `${forecastData.forecast.forecastday[1].day.condition.icon}`;

		dayPlus2.innerHTML = `${new Intl.DateTimeFormat(
			"en-US",
			options
		).format(new Date(forecastData.forecast.forecastday[2].date))}:`;
		dayPlus2High.innerHTML = `${forecastData.forecast.forecastday[2].day.maxtemp_f} °F`;
		dayPlus2Low.innerHTML = `${forecastData.forecast.forecastday[2].day.mintemp_f} °F`;
		dayPlus2Icon.src = `${forecastData.forecast.forecastday[2].day.condition.icon}`;

		dayPlus3.innerHTML = `${new Intl.DateTimeFormat(
			"en-US",
			options
		).format(new Date(forecastData.forecast.forecastday[3].date))}:`;
		dayPlus3High.innerHTML = `${forecastData.forecast.forecastday[3].day.maxtemp_f} °F`;
		dayPlus3Low.innerHTML = `${forecastData.forecast.forecastday[3].day.mintemp_f} °F`;
		dayPlus3Icon.src = `${forecastData.forecast.forecastday[3].day.condition.icon}`;

		dayPlus4.innerHTML = `${new Intl.DateTimeFormat(
			"en-US",
			options
		).format(new Date(forecastData.forecast.forecastday[4].date))}:`;
		dayPlus4High.innerHTML = `${forecastData.forecast.forecastday[4].day.maxtemp_f} °F`;
		dayPlus4Low.innerHTML = `${forecastData.forecast.forecastday[4].day.mintemp_f} °F`;
		dayPlus4Icon.src = `${forecastData.forecast.forecastday[4].day.condition.icon}`;

		dayPlus5.innerHTML = `${new Intl.DateTimeFormat(
			"en-US",
			options
		).format(new Date(forecastData.forecast.forecastday[5].date))}:`;
		dayPlus5High.innerHTML = `${forecastData.forecast.forecastday[5].day.maxtemp_f} °F`;
		dayPlus5Low.innerHTML = `${forecastData.forecast.forecastday[5].day.mintemp_f} °F`;
		dayPlus5Icon.src = `${forecastData.forecast.forecastday[5].day.condition.icon}`;

		dayPlus6.innerHTML = `${new Intl.DateTimeFormat(
			"en-US",
			options
		).format(new Date(forecastData.forecast.forecastday[6].date))}:`;
		dayPlus6High.innerHTML = `${forecastData.forecast.forecastday[6].day.maxtemp_f} °F`;
		dayPlus6Low.innerHTML = `${forecastData.forecast.forecastday[6].day.mintemp_f} °F`;
		dayPlus6Icon.src = `${forecastData.forecast.forecastday[6].day.condition.icon}`;

		dayPlus7.innerHTML = `${new Intl.DateTimeFormat(
			"en-US",
			options
		).format(new Date(forecastData.forecast.forecastday[7].date))}:`;
		dayPlus7High.innerHTML = `${forecastData.forecast.forecastday[7].day.maxtemp_f} °F`;
		dayPlus7Low.innerHTML = `${forecastData.forecast.forecastday[7].day.mintemp_f} °F`;
		dayPlus7Icon.src = `${forecastData.forecast.forecastday[7].day.condition.icon}`;

		hourPlus1Time.innerHTML = ``;
	} catch (error) {}
};
function getCity() {
	const input = document.querySelector(".form-control");
	const cityName = input.value;

	return cityName;
}

const hourPlus1 = document.querySelector(".hour__plus1");
const hourPlus1Time = document.querySelector(".hour__plus1Time");
const hourPlus1Conditions = document.querySelector(".hour__plus1Conditions");
const hourPlus1Temp = document.querySelector(".hour__plus1Temp");
const hourPlus1Icon = document.querySelector(".hour__plus1Icon");

const getTestForecast = async (cityName) => {
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

		for (let i = 0; i < 8; i++) {
			const time = new Date(forecastData.list[i].dt * 1000);
			console.log(
				time.toLocaleTimeString(navigator.language, {
					hour: "2-digit",
					minute: "2-digit",
				})
			);

			const carousel1 = document.querySelector(".carousel__1");
			const hourPlusX = document.createElement("div");
			hourPlusX.className = `hour__plus${
				i + 1
			} d-flex justify-content-between align-items-center`;

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
			hourPlusXTemp.innerHTML = `${forecastData.list[i].main.temp_max} °F`;

			const hourPlusXIcon = document.createElement("img");
			hourPlusXIcon.className = `hour__plus${i + 1}Icon `;
			hourPlusXIcon.src = `https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}.png`;

			hourPlusX.appendChild(hourPlusXTime);
			hourPlusX.appendChild(hourPlusXTemp);
			hourPlusX.appendChild(hourPlusXIcon);
			carousel1.appendChild(hourPlusX);
		}
		for (let i = 8; i < 16; i++) {
			const time = new Date(forecastData.list[i].dt * 1000);
			console.log(
				time.toLocaleTimeString(navigator.language, {
					hour: "2-digit",
					minute: "2-digit",
				})
			);

			const carousel1 = document.querySelector(".carousel__2");
			const hourPlusX = document.createElement("div");
			hourPlusX.className = `hour__plus${
				i + 1
			} d-flex justify-content-between align-items-center`;

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
			hourPlusXTemp.innerHTML = `${forecastData.list[i].main.temp_max} °F`;

			const hourPlusXIcon = document.createElement("img");
			hourPlusXIcon.className = `hour__plus${i + 1}Icon `;
			hourPlusXIcon.src = `https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}.png`;

			hourPlusX.appendChild(hourPlusXTime);
			hourPlusX.appendChild(hourPlusXTemp);
			hourPlusX.appendChild(hourPlusXIcon);
			carousel1.appendChild(hourPlusX);
		}
		for (let i = 16; i < 24; i++) {
			const time = new Date(forecastData.list[i].dt * 1000);
			console.log(
				time.toLocaleTimeString(navigator.language, {
					hour: "2-digit",
					minute: "2-digit",
				})
			);

			const carousel1 = document.querySelector(".carousel__3");
			const hourPlusX = document.createElement("div");
			hourPlusX.className = `hour__plus${
				i + 1
			} d-flex justify-content-between align-items-center`;

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
			hourPlusXTemp.innerHTML = `${forecastData.list[i].main.temp_max} °F`;

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
getForecast();
getTestForecast();
