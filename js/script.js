// api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric&appid=2632e4b62ff4efb474000e422076a135
const weatherApi = {
    baseUrl : 'https://api.openweathermap.org/data/2.5/weather',
    apiKey : '2632e4b62ff4efb474000e422076a135'
}

const temp = document.getElementById('temp');
const placeName = document.getElementById('place-name');
const weather = document.getElementById('weather');
const weatherDescrip = document.getElementById('weather-description');
const icon = document.getElementById('icon');
const body = document.getElementById('wrapper');
const inputText = document.getElementById('city');
const dateText = document.getElementById('date');


const todayDate = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

inputText.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
        getData(inputText.value);
        inputText.value = '';
    }
})

function getData(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&units=metric&appid=${weatherApi.apiKey}`).then((respone)=>{
        return respone.json();
    }).then((data)=>{
        console.log(data);
        temp.innerText = `${data.main.temp} °C`;
        placeName.innerText = `${data.name}, ${data.sys.country}`
        weather.innerText = data.weather[0].main;
        weatherDescrip.innerText = data.weather[0].description;
        dateText.innerText = `${days[todayDate.getDay()]}, ${todayDate.getDate()} ${months[todayDate.getMonth()]} ${todayDate.getFullYear()}`;
        // icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        switch(data.weather[0].main){
            case 'Clouds':
                body.style.backgroundImage = 'url("images/cloud.jpg")';
                body.style.backgroundSize = 'cover';
                break;

            case 'Haze':
                body.style.backgroundImage = 'url("images/cloud.jpg")';
                body.style.backgroundSize = 'cover';
                break;
            
            case 'Rain':
                body.style.backgroundImage = 'url("images/rain.jpg")';
                body.style.backgroundSize = 'cover';
                break;

            case 'Thunderstorm':
                body.style.backgroundImage = 'url("images/thunderstorm.jpg")';
                body.style.backgroundSize = 'cover';
                break;

            case 'Clear':
                body.style.backgroundImage = 'url("images/clear.jpg")';
                body.style.backgroundSize = 'cover';
                break;

            case 'Snow':
                body.style.backgroundImage = 'url("images/snow.jpg")';
                body.style.backgroundSize = 'cover';
                break;

            default: console.log('success');
        }
    })
}