import React , {useState , useEffect} from 'react'
import './App.css'
import {Route , Routes ,BrowserRouter} from 'react-router-dom'
import WeatherApp from './components/WeatherApp/WeatherApp'
import CityWeatherDetails from './components/CityWeatherDetails/CityWeatherDetails'
function App() {
  return (
    <div className='' style={{height:'43.45555pc'}}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<WeatherApp/>} /> 
          <Route path='cityDetails'  element={<CityWeatherDetails />}/> 
        </Routes>
      </BrowserRouter>
    </div> 
  )
}

export default App
