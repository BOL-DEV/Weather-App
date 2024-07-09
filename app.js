'use strict'

const cityName = document.querySelector('.city-name')
const icon = document.querySelector('.icon')
const temp = document.querySelector('.temp')
const desp = document.querySelector('.desp')
const humidity = document.querySelector('.humidity')
const searchInput = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')


const mykey = `f18d958649224948845e1c1e53b5c016`
const myApi = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

const getWeather = async () => {
    try {
        const city = searchInput.value.trim();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${mykey}` )
        const data = await response.json()
        console.log(response);
        console.log(data);
        
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        
        cityName.innerHTML = data.name
        temp.innerHTML = data.main.temp
        humidity.innerHTML = data.main.humidity
        desp.innerHTML = data.weather[0].description
        icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        
     
    } catch (err) {
        alert(err)
    }

} 


searchBtn.addEventListener('click', getWeather)