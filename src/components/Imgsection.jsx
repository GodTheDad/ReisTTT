import React from 'react'
import "./Imgsection.css"
const Imgsection = ({ title, desc,img}) => {
  return (
    <section className='imgsec'>
        
        <img className= "bigimage"src={img}/>
        <div className='textfr'>
            <h1>{title}</h1>
            <h3>{desc}</h3>
            
        </div>
    </section>
  )
}

export default Imgsection

