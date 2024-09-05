import React from 'react'
import './newscompo.css'
const Newscompo = (props) => {
  return (
    <div>
        <img src={props.newsimg}/>
        <a className='NewsLink' href={props.newslink}>
        <h1 className='NewsHead'> {props.newshead} </h1>
        <p className='NewsQuote'>{props.newsquote}</p>
        </a>
    </div>
  )
}

export default Newscompo