'use strict';

const city = document.querySelector('#city');
city.textContent = 'Dnipro';

//Icon
let weatherIcon = document.querySelector('#weatherIcon');
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.textContent.toUpperCase()}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then(res => res.json())
    .then(data => {
        weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    });

//Temperature
let temperature = document.querySelector('#temperature');
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.textContent.toUpperCase()}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then(res => res.json())
    .then(data => {
        temperature.textContent = `Temperature:  ${data.main.temp} °C`;
    });

//Pressure
let pressure = document.querySelector('#pressure');
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.textContent.toUpperCase()}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then(res => res.json())
    .then(data => {
        pressure.textContent = `Pressure:  ${data.main.pressure}`;
    });

//Description
let description = document.querySelector('#description');
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.textContent.toUpperCase()}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then(res => res.json())
    .then(data => {
        description.textContent = `Description:  ${data.weather[0].description}`;
    });

//Humidity
let humidity = document.querySelector('#humidity');
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.textContent.toUpperCase()}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then(res => res.json())
    .then(data => {
        humidity.textContent = `Humidity:  ${data.main.humidity}`;
    });

//Speed
let speed = document.querySelector('#speed');
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.textContent.toUpperCase()}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then(res => res.json())
    .then(data => {
        speed.textContent = `Speed:  ${data.wind.speed}`;
    });

//Deg
let deg = document.querySelector('#deg');
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.textContent.toUpperCase()}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then(res => res.json())
    .then(data => {
        deg.textContent = `Deg:  ${data.wind.deg}`;
    });