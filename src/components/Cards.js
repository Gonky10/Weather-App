import React, {useState} from "react";
import Card from './Card'
import Spinner2 from "./spinner2.js";
import Spinner from "./Spinner.js";



function Cards({showCard, loadingCard, weather, forecast, cities, onClose}) {
  console.log("ciudades que llegan al cards: ",cities)
  return (
    <div className= 'AllContainer'>
      {cities.length>0 ? loadingCard ? <Spinner/> : (cities.map(c => <Card
          showCard= {c.showCard}
          weather= {c.weather}
          forecast= {c.forecast}
          onClose= {() => onClose(c.id)}
        /> )) : loadingCard ? <Spinner/> : (<div className= 'sinCities'>
        <h1 style= {{margin: '16px', color: 'rgb(155, 152, 152)'}}>Enter any citie.. {(<Spinner2/>)}</h1>
        </div>)}
    </div>
  )
}

export default Cards;