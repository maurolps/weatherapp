import {forecast} from './script.js';

function updateWeatherData (weatherData) {
  const cityName = document.querySelector('.js-city-name')
  const location = document.querySelector('.js-location');
  const date = document.querySelector('.js-date');
  const ctemperature = document.querySelector('.js-temperature');
  const condition = document.querySelector('.js-condition');
  const feelslike = document.querySelector('.js-feelslike');
  const wind = document.querySelector('.js-wind');
  const humidity = document.querySelector('.js-humidity');
  const icon = document.querySelector('.js-city-icon');
  console.log('update: ', weatherData);

  const temperature = weatherData.current.temp_c.toFixed(0);
  ctemperature.textContent = `${temperature}`;

  cityName.textContent = `${weatherData.location.name}`
  location.textContent = `${weatherData.location.region}, ${weatherData.location.country}`;
  date.textContent = `${weatherData.location.localtime}`;
  condition.textContent = `${weatherData.current.condition.text}`;
  feelslike.textContent = `Feels like: ${weatherData.current.feelslike_c}`;
  wind.textContent = `Wind: ${weatherData.current.wind_kph}`;
  humidity.textContent = `Humidity: ${weatherData.current.humidity} %`;

  icon.setAttribute('src', weatherData.current.condition.icon);
}

export function eventHandler () {
  const btnSearch = document.querySelector('.js-btn-search');
  const inputSearch = document.querySelector('.js-input-search');

  btnSearch.addEventListener('click', () => {
    const city = inputSearch.value;
    if (city !== '') {
      //remove invalid characters
      const cityClean = city.normalize('NFD').replace(/\p{Mn}/gu, "");
      console.log ('search: ', cityClean);
      const weatherData = forecast(cityClean);
      weatherData.then((data) =>
        {
          updateWeatherData(data)
        });
    }

  })

}