// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Abidjan&appid=a1dab4b3dd0e8924d8e02ff045956dac&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


  function  displayResults(weatherData) {
        currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
      
        const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        const desc = weatherData.weather[0].description;
      
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

        
              }

