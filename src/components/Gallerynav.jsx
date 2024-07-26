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
            <ul>
            <Link to = {`/`}><a><li>Home</li></a></Link>
            <a href='#about'><li>About</li></a>
            <a href='gallery'><li>Albums</li></a>
            <a href='#about'><li>Contact Us</li></a>
            <a href='#about'><li>Socials</li></a>
            </ul>
            <Link to = {`/signup`}><button className="navbuttonfr"type="button">Sign Up</button></Link>
        </nav>
    </div>
  )
}

export default Gallerynav