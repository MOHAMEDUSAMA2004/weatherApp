import React, { useEffect, useState } from 'react'
import "./WeatherApp.css"
import axios from 'axios'
import img from '../../assets/03d@2x.png'
import { useNavigate } from 'react-router-dom'
function WeatherApp() {
  let navigate = useNavigate()
  let [city , setCity] = useState('')
  let [weatherData , setWeatherData] = useState(null)
  let [foreCastData , setForeCastData] = useState([])
  let [ error , setError] = useState('')
  let apiKey = '34d4b65db24311e91a1d9165a545618c'
  async function getWeatherData(){
    setError(null)
    try{
      let {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=${apiKey}`)
       setWeatherData(data)
      console.log(data);
    }
    catch(error){
      setError('Invalid City')
      setWeatherData(null)
    }
  }
  async function getForecastData(){
    setError(null)
    try{
      let {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city} &appid=${apiKey}`)
       setForeCastData([...data.list])
      console.log(data);
    }
    catch(error){
      setError('Invalid City')
      setForeCastData(null)
    }
  };
  function GoTo(){
    if(error==null){
      navigate('/cityDetails')
    }
    else{

    }
  }
useEffect(() => {
  getWeatherData()
  getForecastData()
  sessionStorage.setItem('weatherCity' , JSON.stringify(weatherData))
  sessionStorage.setItem('foreCastData' , JSON.stringify(foreCastData))
}, [weatherData , city])
  return (
    <div className='d-flex align-items-center justify-content-center flex-column' style={{textAlign:"center",fontFamily:'Arial,sans-serif',marginTop:'20px' , backgroundColor:'#000',height:'100%' ,width:'100%' , margin:'auto'}}>
      <h1 className='text-light'>Weather App <img src={img} alt="" /></h1>
      <div className='d-flex gap-3'>
        <input type="text" onChange={(e)=>setCity(e.target.value)} value={city} placeholder='Enter City Name' />
        <button onClick={GoTo} className='btn btn-light'>Search</button>
      </div>
    </div>
  )
}
export default WeatherApp
