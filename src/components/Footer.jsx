import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <section id='footer'>
    <div className='Black Footer'>
      {/* <img className='logoimg'/> */}
      <img src="https://i.imgur.com/5HT0Uho.png" alt="Reislogo" />
      <div className='holderdiv'>
      <h2 className='footerlogo'> <span>Reis</span>TableTennis </h2>
      <div className= " listdiv">
        <h3 className='title white'>Contact</h3>
        <ul className='footerlist white'>
          <li>+234-805-930-5555</li>
          <li>info@reistabletennis.com</li>
          <li>259 Borno way Ebute Metta Yaba, Lagos. </li>
        </ul>
      
      </div>
      
      <div className='icondiv'>
      < a href = "https://x.com/TableReis" className = " icon"><i class="fa-brands fa-twitter fa-2xl" style={{color: "#ffffff",}} ></i></a>
      <a href = "https://x.com/TableReis" className = " icon" ><i class="fa-brands fa-instagram fa-2xl" style={{color: "#ffffff",}}></i></a>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Footer