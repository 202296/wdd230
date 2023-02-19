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
            const wndSpdKm= data['wind']['speed'] ;
            const wndSpdMiles= wndSpdKm / 1.609
            const tempFah = (feels_like - 273.15) * 9/5 + 32
            const windShill = 35.74 + 0.6215*(tempFah) - 35.75 * (wndSpdMiles)**0.16 + 0.4275*(tempFah)*(wndSpdMiles)**0.16

            if( tempFah <= 50 && wndSpdMiles > 3.0 ) {
                wndChill.textContent= windShill.toFixed(2)
                  } else {
                wndChill.textContent= 'N/A'
            }
            
            if(id<300 && id>200) {
                tempIcon.src='images/thunderstorm.webp'
            }
            else if(id<400 && id>300) {
                tempIcon.src='images/cloud-solid.webp'
            }
            else if(id<600 && id>500) {
                tempIcon.src='images/rainy.webp'
            }
            else if(id<700 && id>600) {
                tempIcon.src='images/snow.webp'
            }
            else if(id<800 && id>700) {
                tempIcon.src='images/clouds.webp'
            }
            else if(id == 800) {
                tempIcon.src="images/clouds_and_sun.webp"
            }

            description.textContent = descrip
            wind.textContent = `${wndSpdKm} km/h`
            tempValue.textContent= Math.round(feels_like - 273);
        });