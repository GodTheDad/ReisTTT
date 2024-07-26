import React from 'react'
import {Link} from "react-router-dom"
import "./NewNave.css"
const NewNav= () => {
  return (
    <div className='hero'>
        <nav>
          <div className='logodiv'>
            <img src='https://i.imgur.com/4uIp4nA.png' className="logoimg"/>
            <h2 className = "logo"><span>Reis</span>TableTennis</h2>
          </div>
            <ul>
            <a href='#about'><li>Home</li></a>
            <a href='#about'><li>About</li></a>
            <a href='gallery'><li>Albums</li></a>
            <a href='#about'><li>Contact Us</li></a>
            <a href='#footer'><li>Socials</li></a>
            </ul>
            <Link to = {`/signup`}><button className="navbutton"type="button">Sign Up</button></Link>
        </nav>
    </div>
  )
}

export default NewNav