import {eventHandler} from './display.js';

function formatDate (date) {
  // yyyy-MM-dd for weather history api
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}


async function forecast (city) {
  const weatherFuture = 'https://api.weatherapi.com/v1/forecast.json?key=2460c90164ff4b66a89171433230310';
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const dt = formatDate(today);
  try {
    const response = await fetch(`${weatherFuture}&days=3&q=${city}`, {"mode": "cors"});
    const weatherFutureData = await response.json();
    return weatherFutureData;
    } catch (err) {
      console.error(err); 
  }
}

export {forecast};

eventHandler();
