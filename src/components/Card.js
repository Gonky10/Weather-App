import React from "react";
import Spinner from "./Spinner.js";
import img from '../images/cityV.jpg'
import nuboso from '../images/nuboso.jpg'
import soleado from '../images/soleado.jpg'
import tormenta from '../images/tormenta.jpg'
import nuboso2 from '../images/muy nuboso.jpg'
import edificios from '../images/edificios.jpg'
import Afternoon from '../images/AfternoonAndClouds.jpg'
import Storm from '../images/Storm.jpg'





export default function Card({loadingCard, showCard, weather, forecast, onClose}) {
    var separacion; 
    var today = new Date()
    var day = today.getDate()
    var month = today.getMonth() + 1;
    var year = today.getFullYear()
    var rightNow = day + "/" + month + "/" + year;
    var iconUrl = '';
    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";
    var url = ''

    if (!showCard){
        return <Spinner/>
    }

    if(showCard){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
    }

    function name (somth){
        if (somth.length > 14){
            console.log("MAYOR QUE 15")
            return somth.substring(0,14)
        }else{
            console.log("MENOR QUE 15")
            return somth
        }
    }

    function change(image){
        switch (image) {
            case 'nubes dispersas':
                return nuboso 
            case 'muy nuboso':
                return nuboso2
            case 'cielo claro':
                return soleado
            case 'lluvia de gran intensidad':
                return tormenta
            case 'algo de nubes':
                return edificios
            case 'nubes':
                return Afternoon
            case 'tormenta':
                return tormenta
            default:
                return soleado
        }
    }
    return(
        <div className='mt-5'>
            {
                showCard ? (
                    <div className= 'container'>
                        <div className= "card mb-3 mx-auto bg-dark text-light">
                            <div className= 'row g-0'>

                               <div className="col-md-4">
                                   <div className = 'card-titleAdate'>
                                      <div className= 'backNameCity'>
                                        <h3 className= 'card-title'>{name(weather.name)}</h3>
                                      </div>
                                      <p className= 'card-date'>{rightNow}</p>
                                   </div>
                                    <p className='card-text'><img src= {iconUrl} alt= 'Icono del tiempo'/>{weather.weather[0].description}</p>
                                    <h3 className= 'card-temp' style= {{color: 'black'}}>{(weather.main.temp - 273.15).toFixed(1)}°C</h3>
                                    <img src={change(weather.weather[0].description)} style= {{width: '100%', height: '100%'}} alt="..."/>
                                </div>

                                <div className="col-md-8">
                                    <div className= 'textContainer'>
                                        <h5 style= {{display: 'inline-block'}}className= 'text'>Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC {(<button onClick={onClose} className="btn btn-sm btn-danger" style= {{marginLeft: '210px', width: '40px' }}>X</button>)}</h5>
                                        <h5 className= 'text'>Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                                        <h5 className= 'text'>sensación térmica: {(weather.main.feels_like- 273.15).toFixed(1)}ºC</h5>
                                        <h5 className= 'text'>Humedad: {weather.main.humidity}%</h5>
                                        <h5 className= 'text'>Velocidad del viento: {weather.wind.speed} m/s</h5>
                                    </div>
                                    <hr/>
                        
                                    <div >
                                        <div style= {{margin: '10px', display: 'flex', alignItems: 'center'}}>
                                        <div className="col">
                                            <p>{forecastDate3}h</p>
                                            <p className="description"><img src={iconUrl3} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>

                                        <div className="col">
                                            <p>{forecastDate6}h</p>
                                            <p className="description"><img src={iconUrl6} alt="icon"/>{forecast.list[2].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>

                                        <div className="col">
                                            <p>{forecastDate9}h</p>
                                            <p className="description"><img src={iconUrl9} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    ) : console.log("algo")
            }

        </div>
    )

}

