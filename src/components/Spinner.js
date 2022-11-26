import React from 'react'
import '../assets/css/Spinner.css'
function Spinner() {
    return (
        <div className= 'lds-ripple'>
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner