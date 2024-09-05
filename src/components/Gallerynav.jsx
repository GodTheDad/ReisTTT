import React from 'react'
import {Link} from "react-router-dom"

import "./Gallerynav.css"
const Gallerynav = () => {
  return (
    <div id="nav"className='bigdiv'>
        <nav className='nav'> 
          
          <div className='logodiv'>
          
            <img src='https://i.imgur.com/4uIp4nA.png' className="logoimgfr"/>
            <h2 className = "logofr"><span>Reis</span>TableTennis</h2> 
           
          </div>
      
          
            
            <Link to = {`/`}><button className="navbuttonfr"type="button">Home</button></Link>
        </nav>
    </div>
  )
}

export default Gallerynav