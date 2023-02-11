const tempIcon = document.getElementById('temp-icon');
const tempValue = document.getElementById('temp-value');
const wind = document.getElementById('wind');
const description = document.getElementById('description');
const wndChill = document.getElementById('chill');


window.addEventListener('load', ()=>{
    let long;
    let lat;
    navigator.geolocation.getCurrentPosition((position)=>{
        long = position.coords.longitude;
        lat = position.coords.latitude;
        // const proxy = 'https://cors-anywhere.herokuapp.com/';
        // const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a1dab4b3dd0e8924d8e02ff045956dac`

        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a1dab4b3dd0e8924d8e02ff045956dac`
        fetch(api).then((Response)=>{
            return Response.json();
        })
        .then (data =>{
            console.log(data)
            const{feels_like}= data.main;
            const id = data['weather']['0'] ;
            const descrip= data['weather']['0']['description'] ;
            const wndSpdKm= data['wind']['speed'] ;
            const wndSpdMiles= wndSpdKm / 1.609
            tempValue.textContent= Math.round(feels_like - 273);
            const tempFah = (feels_like - 273.15) * 9/5 + 32

            const windShill = 35.74 + 0.6215*(tempFah) - 35.75 * (wndSpdMiles)**0.16 + 0.4275*(tempFah)*(wndSpdMiles)**0.16


            

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
                tempIcon.src='images/clouds-and-sun.webp'
            }

            description.textContent = descrip
            wind.textContent = `${wndSpdKm} km/h`
            wndChill.textContent= windShill.toFixed(2)
        });
    });
});

