import React from 'react'
import './ImageCarousel.css'
import { useState } from "react";
let x = 0;
const ImageCarousel = () => {
    const [image, setImage] = useState("");
    let imgList = ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mondial_Ping_-_Men%27s_Singles_-_Round_4_-_Kenta_Matsudaira-Vladimir_Samsonov_-_57.jpg/1200px-Mondial_Ping_-_Men%27s_Singles_-_Round_4_-_Kenta_Matsudaira-Vladimir_Samsonov_-_57.jpg","https://miro.medium.com/v2/resize:fit:5000/1*9JdIsCt4tZKgVz7QTTRftw.jpeg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWv6De2xhNPP8tQughEAR1wZlKcViz0H2y6Q&s"]
    // let  image = imgList[0];


    let imgfrwd = ()=>{
        // image = imgList[x];
        setImage(imgList[x])
        x += 1;
      if (x > 2){
        x = 0;
      }
    }
    let imgbck = ()=>{
        // image = imgList[x];
        setImage(imgList[x])
        x -= 1;
      if (x < 0){
        x = 2;
      }
    }
    
  return (
   <div className='slideshowcontainer'>
        {<img  className = "slideshowimg "src={image}/>}
        {/* {console.log(image)} */}
        {console.log("Next" + x + image)}

        {/*  next and previous buttons */}

        {/* <h1 className='button'>TEXT</h1> */}
        {/* <a className='button prev' onClick={imgfrwd}><button>CHEEZE</button></a>
        <a className='button next'onClick={imgbck}><button>CHEEZE</button></a> */}
        <div className='button buttondesign'onClick={imgbck}><p>prev</p> </div>
        <div className='buttonnext buttondesign'onClick={imgfrwd}><p>Next</p> </div>
   </div>
  )
}

export default ImageCarousel