import {eventHandler} from './display.js';

async function forecast (city) {
  const weatherApi = 'https://api.weatherapi.com/v1/current.json?key=2460c90164ff4b66a89171433230310&q=';
  try {
  const response = await fetch(`${weatherApi}${city}`, {"mode": "cors"});
  const weatherData = await response.json();
  return weatherData;

  } catch (err) {
    console.error(err);
  }
}

eventHandler();

export {forecast};

