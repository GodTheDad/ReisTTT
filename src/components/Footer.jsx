import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <section id='footer'>
    <div className='Black Footer'>
      {/* <img className='logoimg'/> */}
      <img src="https://i.imgur.com/5HT0Uho.png" alt="Reislogo" />
      <h2 className='footerlogo'> <span>Reis</span>TableTennis </h2>
      <div className= " listdiv">
        <h3 className='title white'>Contact</h3>
        <ul className='footerlist white'>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      
      </div>
      <div className='listdiv'>
        <h3 className='title white'>Contact</h3>
        <ul className='footerlist white'>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>
      <div className='listdiv'>
        <h3 className='title white'>Contact</h3>
        <ul className='footerlist white'>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>
      <div className='listdiv'>
        <h3 className='title white'>Contact</h3>
        <ul className='footerlist white'>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>
      <i class="fa-brands fa-twitter fa-2xl" style={{color: "#ffffff",}} ></i>
      <i class="fa-brands fa-instagram fa-2xl" style={{color: "#ffffff",}}></i>
    </div>
    </section>
  )
}

export default Footer