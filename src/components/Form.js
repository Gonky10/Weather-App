import React, {useState} from "react";
import {Link } from 'react-router-dom'


function Form({newLocation}) {
    const [city, setCity] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        newLocation(city)
        if (city==="" || !city) return
    }
    return(
      <div>
        <nav className="navbar navbar-expand-lg" style={{width: 1300, marginLeft: 30, marginTop: 15}}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <div style= {{marginLeft: 160, width: 180,}}>
          <li className="nav-item">
           <Link to='/'> <a className="textInbar">Home</a></Link>
          <a className="textInbar" style= {{marginLeft: 50,}} >Code</a>
          </li>
        </div>
      </ul>
      <Link to='/home'>
        <div className="titleContainer" >
          <a style= {{color: 'rgb(155, 152, 152)', fontSize: 32}}>Weather in time</a>
        </div>
      </Link>
      <form className="d-flex" role="search" onSubmit= {onSubmit}>
        <input className="form-control me-2" style= {{color: 'rgb(155, 152, 152)', fontWeight: 1000, fontSize: 18}} onChange= {(e) => setCity(e.target.value)} type="search" placeholder="City..." aria-label="Search"/>
        <button className="btn btn-outline-success" style= {{color: 'rgb(155, 152, 152)', borderColor: 'rgb(155, 152, 152)' }} type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
    )
}

export default Form;

