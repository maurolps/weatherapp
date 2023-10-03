

async function forecast (city) {
  const weatherApi = 'https://api.weatherapi.com/v1/current.json?key=2460c90164ff4b66a89171433230310&q=';
  try {
  const response = await fetch(`${weatherApi}${city}`, {"mode": "cors"});
  const weatherData = await response.json();
  console.log('Country: ', weatherData.location.country);
  console.log('Localtime: ', weatherData.location.localtime);
  console.log('name: ', weatherData.location.name);
  console.log('Region: ', weatherData.location.region);
  console.log('');
  console.log('Condition: ', weatherData.current.condition.text);
  console.log('Feels Like C: ', weatherData.current.feelslike_c);
  console.log('Feels Like F: ', weatherData.current.feelslike_f);
  console.log('Wind Mph: ', weatherData.current.wind_mph); // 1 Mph = 0,44704 m/s
  console.log('Humidity: ', weatherData.current.humidity, '%');

  } catch (err) {
    console.error(err);
  }
}

// forecast('sao paulo'); 

