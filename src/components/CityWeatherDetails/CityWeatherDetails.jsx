import React from 'react'
import "./CityWeatherDetails.css"
import img from '../../assets/03d@2x.png'
import { useNavigate } from 'react-router-dom'
function CityWeatherDetails() {
  let data =JSON.parse(sessionStorage.getItem('weatherCity'))
  let forecast = JSON.parse(sessionStorage.getItem('foreCastData'))
  console.log(forecast);
  let Navigate = useNavigate();
  function Return(){
    Navigate('/')
  }
  return (
    <div className='CityWeatherDetails '>
      <div className="container py-4 d-flex flex-column " style={{gap:'50px'}}>
      <button onClick={Return} className='btn btn-light ' style={{width:'max-content'}}>Search Another City</button>
          <div  className='cityDetails'>
            <div className='first'>
              <h2> {data.name}</h2>
              <div>
              <h1>{data.main.temp}˚</h1>
                <sub>Overcast</sub>
              </div>
            </div>
            <div className='second'>
              <span>Sun 63˚ 57˚</span>
              <span>Air quality : 20 - Good</span>
            </div>
          </div>
          <div className="bottom d-flex justify-content-between gap-5">
            <div className="weather">
              <div className='first'>
                <div>
                  <h5>Feels like</h5>
                  <span>{data.main.feels_like}˚</span>
                </div>
                <div>
                  <h5>ENE wind</h5>
                  <span>{data.wind.speed} mi/h</span>
                </div>
                <div>
                  <h5>Humidity </h5>
                  <span>{data.main.humidity} %</span>
                </div>
              </div>
              <div className='first'>
                <div>
                  <h5>sea level</h5>
                  <span>{data.main.sea_level}</span>
                </div>
                <div>
                  <h5>visibility</h5>
                  <span>{data.visibility / 1000} mi</span>
                </div>
                <div>
                  <h5>Pressure</h5>
                  <span>{data.main.pressure} hPa</span>
                </div>
              </div>

            </div>
            <div className="forecast w-75">
              <div className='d-flex align-items-center gap-4 justify-content-between' style={{color:'#7D7878'}}>
                <span className='px-4' >Sat</span>
                <span className='px-4'>Sun</span>
                <span className='px-4'>Mon</span>
                <span className='px-4'>Tue</span>
                <span className='px-4'>WEd</span>
                <span className='px-4'>Thur</span>
                <span className='px-4'>Fri</span>
              </div>
              <div className='d-flex  justify-content-between  gap-4 py-2'>
                {
                    forecast.slice(0,7).map((val,i)=>{
                      return(
                        <div className='d-flex flex-column gap-4 ' style={{fontSize:'14px'  }}>
                          <span>{val.weather[0].description} <img src={`http://openweathermap.org/img/wn/${val.weather[0].icon}@2x.png`} width={'30px'} height={'30px'} alt="" /></span>
                          <span className='d-flex flex-column'>Wind Speed : <span style={{color:'#7D7878'}}>{val.wind.speed} Km/h</span></span>
                          <span className='d-flex flex-column'>Temp Max : <span style={{color:'#7D7878'}}>{val.main.temp_max} F</span></span>
                          <span className='d-flex flex-column'>Temp Min : <span style={{color:'#7D7878'}}>{val.main.temp_min} F</span></span>
                        </div>
                      )
                    })
                }
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CityWeatherDetails
