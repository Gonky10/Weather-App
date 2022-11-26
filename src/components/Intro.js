import React, {useState} from 'react'
import Form from './Form'
import Card from "./Card";
import Cards from "./Cards";
import {Route, Link} from 'react-router-dom'
import '../assets/css/Intro.css'
import { BsCloudCheckFill } from "react-icons/bs";

function Intro() {
   console.log("HOLAAAAAAAAAAA")
    return(
      <div className= 'introContainer'>
        <div class="toast"role="alert" aria-live="assertive" aria-atomic="true" style= {{backgroundColor: '#271f1f'}}>
  <div class="toast-header" >
    <BsCloudCheckFill id= 'icon'/>
    <strong class="me-auto" style= {{fontFamily: 'Agency FB', fontSize: '22px'}}>Weather in time</strong>
    <small class="text-muted">Now</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body" style= {{color: 'white', fontFamily: 'Agency FB', fontSize: '18px'}}>
    Hello, explorer! Do you want to know about the weather of your city?.
    <hr/>
    <Link to='/home'> <span class="btn btn-secondary" style= {{border: '2px solid grey', padding: '3px', marginLeft: '120px', borderRadius: '10px'}}>Start App</span></Link>
  </div>
</div>
      </div>
    )
}


export default Intro;