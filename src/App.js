import React, {useState} from 'react'
import Form from './components/Form'
import './assets/css/App.css';
import Card from "./components/Card";
import Cards from "./components/Cards";
import Intro from './components/Intro.js'
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom"
import Spinner from "./components/Spinner.js";
import Background1 from './images/intro.jpg'

function App() {
  let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=89ae52217045b8b7360394fe4b61c4aa&lang=es'
    let ciudad = {
        id: '',
        city: '',
        weather: '',
        forecast: '',
        showCard: false,
    };
    const city = '&q='
    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=89ae52217045b8b7360394fe4b61c4aa&lang=es' 
    const [citiess, setCitiess] = useState([]);
    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState("")

    function onClose(id) {
        setCitiess(oldCities => oldCities.filter(c => c.id !== id));
      }

    async function getLocation(loc) {
      setLoading(true)
      setLocation(loc)
        urlWeather = urlWeather + city + loc;
        await fetch(urlWeather).then((response)=> {
            if (!response.ok) {throw response}
            return response.json()
        }).then((weatherData) => {
          ciudad.weather = weatherData
          setWeather(weatherData)
            ciudad.city = weatherData.name
            ciudad.id = weatherData.id
            console.log("weatherData: ",weatherData);
        }).catch((err)=> {
            console.log(err)
            setLoading(false);
            alert("No se pudo encontrar")
            //return;
            setShow(false);
            ciudad.showCard = false

        });

        urlForecast = urlForecast + city + loc
        await fetch(urlForecast).then((response)=> {
            if (!response.ok){throw response}
            return response.json()
        }).then((forecastData) => {
            console.log("forecast: ",forecastData);
            setForecast(forecastData)
            ciudad.forecast = forecastData;
            ciudad.showCard = true;
            setLoading(false);
            setShow(true);
        }).catch((err)=> {
            console.log(err)
            setLoading(false);
            ciudad.showCard = false;
            setShow(false);
        });

        
        if (citiess.length>0 && ciudad.id !== ''){
          const filtrado = citiess.find(e => e.id === ciudad.id);
          if (filtrado !== undefined){
            alert("La ciudad ya fue ingresada");
            setShow(false)
            return
          }else{
            setCitiess(oldCitiess => [...oldCitiess, ciudad])
          }
        }else if (citiess.length === 0 && ciudad.id !== ''){
          setCitiess(oldCitiess => [...oldCitiess, ciudad])
        }
    }

    return(
      <BrowserRouter>
        <Routes>
          <Route
           exact path='/'
           element={<Intro/>}
          />
          <Route
          path='/home'
          element={<div className= 'formAndCardContainer'>
          <Form newLocation = {getLocation}/>
          <Cards showCard= {show}
          loadingCard= {loading}
          weather= {weather}
          forecast= {forecast}
          cities= {citiess}
          onClose= {onClose}/>
          </div>}>
         </Route>
        </Routes>
      </BrowserRouter>
    )
}


export default App;
 

      /*<BrowserRouter>
         <Routes>
        <Route
        path='/'
        element={<Form newLocation = {getLocation}/>}
        />
        <Route
          exact path='/'
          element={<Cards showCard= {show}
            loadingCard= {loading}
            weather= {weather}
            forecast= {forecast}
            cities= {citiess}
            onClose= {onClose}/>} 
        />  
          </Routes>
      </BrowserRouter>*/

