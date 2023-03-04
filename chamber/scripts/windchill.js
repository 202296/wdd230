const tempIcon = document.getElementById('temp-icon');
const tempValue = document.getElementById('temp-value');
const wind = document.getElementById('wind');
const description = document.getElementById('description');
const wndChill = document.getElementById('chill');




const api = `https://api.openweathermap.org/data/2.5/weather?q=Abidjan&appid=a1dab4b3dd0e8924d8e02ff045956dac`
        fetch(api)
        .then(Response => Response.json())
        .then (data =>{
            const{feels_like}= data.main;
            const id = data['weather']['0']['id'] ;
            const descrip= data['weather']['0']['description'] ;
            const weathIcon =  `https://openweathermap.org/img/w/${data['weather']['0']['icon']}.png`
            const wndSpdKm= data['wind']['speed'] ;
            const wndSpdMiles= wndSpdKm / 1.609
            const tempFah = (feels_like - 273.15) * 9/5 + 32
            const windShill = 35.74 + 0.6215*(tempFah) - 35.75 * (wndSpdMiles)**0.16 + 0.4275*(tempFah)*(wndSpdMiles)**0.16

            if( tempFah <= 50 && wndSpdMiles > 3.0 ) {
                wndChill.textContent= windShill.toFixed(2)
                  } else {
                wndChill.textContent= 'N/A'
            }
      
            tempIcon.setAttribute('src', weathIcon);
            tempIcon.setAttribute('alt', descrip);
            


            description.textContent = descrip.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
            wind.textContent = `${wndSpdKm} km/h`
            tempValue.textContent= Math.round(feels_like - 273);
        });