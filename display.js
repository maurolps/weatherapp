import {forecast} from './script.js';

function updateWeatherData (weatherData) {
  console.log('update: ', weatherData);
}

export function eventHandler () {
  const btnSearch = document.querySelector('.js-btn-search');
  const inputSearch = document.querySelector('.js-input-search');

  btnSearch.addEventListener('click', () => {
    const city = inputSearch.value;
    if (city !== '') {
      console.log ('search: ', city);
      const weatherData = forecast(city);
      weatherData.then((data) =>
        {
          updateWeatherData(data)
        });
    }

  })

}