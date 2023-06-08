import React, { Fragment, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const api = {
  key: "5065d6f162bd9d989e326115531dd093",
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})
  const time = new Date();
  const dateTracker = {
    day: ["Sunday", "Mondqy", "Tuesday", "Wednesday", "Thuresday", "Friday", "Saturady"],
    month: ["January", "Fabruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }
  const day = dateTracker.day[time.getDay()]
  const month = dateTracker.month[time.getMonth()]
  const date = time.getDate()
  const year = time.getFullYear()
  const search = evt => {
    if (evt.key === "Enter") { fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => setWeather(result),console.log(weather)) }
  }
  const clsvar = document.querySelector('.app')
  if (typeof weather.main != "undefined")
  {
    switch (weather.weather[0].main)
    {
      case "Clear":
        if(weather.main.temp >= 20 ){
        clsvar.className = 'app warm';
        break;}
        else{
        clsvar.className = 'app winter';
          break;    
        }
        case "Haze":
          if(weather.main.temp >= 20 ){
            clsvar.className = 'app haze';
            break;}
            else{
            clsvar.className = 'app winter';
              break;    
            }
        case "Rain":
          if(weather.main.temp >= 20 ){
            clsvar.className = 'app rain';
            break;}
            else{
            clsvar.className = 'app winter';
              break;    
            }
        case "Clouds":
          if(weather.main.temp >= 20 ){
            clsvar.className = 'app cloud';
            break;}
            else{
            clsvar.className = 'app winter';
              break;    
            }
      default:
        clsvar.className = 'app' ;
    }
  }



  return (
    <Fragment>
      
        
        {/* <div className={(typeof weather.main != "undefined") ? ((switch) ? 'app warm' :'app') :'app'}> */}
        <div className='app'>

          <div className='container-md main'>

            <input className='searchInput px-3 mx-auto' type='text' placeholder='Search City...' onChange={e => { setQuery(e.target.value) }} value={query} onKeyPress={search} />
            {(typeof weather.main != "undefined") ? (
            <div className='text-center locName'>
              <h1 className='cityName'>{weather.name} , {weather.sys.country} </h1>
              <h2 className='date'>{day}  {date}  {month}  {year}</h2>
              <p className='temp'>{Math.round(weather.main.temp)}°C</p>
              <p className='wheatherType'>{weather.weather[0].main}</p>
            </div> 
            ) :('')}
           
          </div>
        </div>
         
    </Fragment>
  );
}

export default App;
