import React from 'react'
import { useState } from "react";
import "./Gallery.css"
import Gallerynav from '../components/Gallerynav';
const Gallery = () => {
    let imgList = [
      "https://i.imgur.com/AIDxI4U.jpeg",
      "https://i.imgur.com/AtMmeLq.jpeg",
      "https://i.imgur.com/nULlOiC.jpeg",
      "https://i.imgur.com/cqVe5Pr.jpeg",
      "https://i.imgur.com/IWBbJSA.jpeg",
      "https://i.imgur.com/co2oKAC.jpeg",
      "https://i.imgur.com/LIktOWJ.jpeg",
      "https://i.imgur.com/E1Q95Ly.jpeg",
      "https://i.imgur.com/yY9yeZV.jpeg",
      "https://i.imgur.com/j1W2vRe.jpeg",
      "",
      "",
      "",
    ];
  return (
    <>
    <Gallerynav/>
    <div >
      <h3 className='BlackFr'>REIS TOURNAMENT 2024</h3>
      {imgList.map((map) => {return (
        <img className='galleryimg' src ={map}/>
      )} )}
    </div>
    {/* <div >
      <h3 className='BlackFr'>REIS TOURNAMENT 2022</h3>
      {imgList.map((map) => {return (
        <img className='galleryimg' src ={map}/>
      )} )}
    </div>
    <div >
      <h3 className='BlackFr'>REIS TOURNAMENT 2023</h3>
      {imgList.map((map) => {return (
        <img className='galleryimg' src ={map}/>
      )} )}
    </div> */}

    </>
  )
}

export default Gallery