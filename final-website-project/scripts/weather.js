

const apikey="a1dab4b3dd0e8924d8e02ff045956dac";


    var urlsearch= `https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=${apikey}`;

    fetch(urlsearch).then((res)=>{
        return res.json();
    }).then((data)=>{
        weatherReport(data);
    })

function weatherReport(data){

    var urlcast= `https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&units=metric&` + `appid=${apikey}`;

    fetch(urlcast).then((res)=>{
        return res.json();
    }).then((forecast)=>{
        dayForecast(forecast)

        document.getElementById('city').innerText= data.name + ', '+data.sys.country;
    
        document.getElementById('temperature').innerText= Math.floor(data.main.temp)+ ' °C';
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}`
        document.getElementById('clouds').innerText= data.weather[0].description;
        
        let icon1= data.weather[0].icon;
        let iconurl= "https://api.openweathermap.org/img/w/"+ icon1 +".png";
        document.getElementById('img').src=iconurl
    })

}

function dayForecast(forecast){
    document.querySelector('.weekF').innerHTML=''
    for (let i = 8; i < forecast.list.length; i+=8) {
        let div= document.createElement('div');
        div.setAttribute('class','dayF');
        
        let day= document.createElement('p');
        day.setAttribute('class','date')
        day.innerText= new Date(forecast.list[i].dt*1000).toDateString(undefined,'America/Carlsbad');
        div.appendChild(day);

        let temp= document.createElement('p');
        temp.innerText= Math.floor((forecast.list[i].main.temp_max))+ ' °C' + ' / ' + Math.floor((forecast.list[i].main.temp_min))+ ' °C';
        div.appendChild(temp)

        let description= document.createElement('p');
        description.setAttribute('class','desc')
        description.innerText= forecast.list[i].weather[0].description;
        div.appendChild(description);

        document.querySelector('.weekF').appendChild(div)
    }
} 