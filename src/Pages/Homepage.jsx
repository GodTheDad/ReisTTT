import React from 'react'

import ImageCarousel from '../components/ImageCarousel'
import CardList from '../components/CardList'
import NewNav from '../components/NewNav'
import Newsection from '../components/Newsection'
import Leftsection from '../components/LeftSection'
import Rightsection from '../components/RightSection'
import Footer from '../components/Footer'
import Timer from '../components/Timer'
import Imgsection from '../components/Imgsection'
import Trianglediv from '../components/Trianglediv'
import NewsectionBtn from '../components/NewSectionBtn'
import VideoComp from '../components/VideoComp'
const Homepage = () => {
  return (
    <>
        <NewNav/>
        {/* <Navigation/>
        <ImageCarousel/> */}
        <Newsection title = "What is the Reis Table Tennis Tournament?" desc = "The Reis Table Tennis Tournament is an initiative conceived to use the sport of table tennis as a rallying point for social engagement and youth development. It is a platform for young people to showcase their skills, develop their potential, and promote values that chisel out individuals that can be further nurtured into assets to the table tennis sports development at the grassroots level and ultimately the nation Nigeria." colour="darkblue"/>
        
        <Imgsection title="Our Mission" desc="To develop and promote the sport of table tennis, foster youth development, and promote healthy competition among young individuals while instilling positive values that will shape their future and make them assets to the development of the sport at the grassroots level." img="https://i.imgur.com/XarU4gz.jpeg"/>
        <Newsection title = "Our Vision" desc = "To create a platform where young individuals can use table tennis as a tool for social engagement, personal development, and skills acquisition. We believe that through this initiative, we can help to reduce social vices and secure the future of less privileged children in Nigeria." colour="regular"/>
        <Leftsection imgsrc="https://i.imgur.com/GT3Md5a.jpeg" title = "Our Driving Force" desc = "Our foundation is driven by the belief that sports can be a force for positive change in our society and that young people have the potential to be powerful agents of change. We are committed to creating a supportive and inclusive environment that encourages young players to develop their skills, build their confidence, and become leaders in their communities" colour="VeryDark"/>
        <Rightsection imgsrc="https://i.imgur.com/0vBcY0j.jpeg "title = "Our Impact" desc = "To develop and promote the sport of table tennis, foster youth development, and promote healthy competition among young individuals while instilling positive values that will shape their future and make them assets to the development of the sport at the grassroots level."colour="VeryDark"/>
        <Imgsection title="Our Mission" desc="Our foundation is driven by the belief that sports can be a force for positive change in our society, and that young people have the potential to be powerful agents of change. We are committed to creating a supportive and inclusive environment that encourages young players to develop their skills, build their confidence, and become leaders in their communities." img="https://i.imgur.com/nnS9AFz.png"/>
        <NewsectionBtn title = "Lorem ipsum dolor sit amet." desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi quo consectetur libero, eligendi molestias in voluptatibus impedit! Nesciunt voluptatem dolorum perspiciatis minus id, voluptate, iure optio quibusdam, porro nam eaque harum cupiditate laboriosam quod. Saepe iste alias beatae voluptatibus!" colour="regular" />
        <Newsection title = "Lorem ipsum dolor sit amet." desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi quo consectetur libero, eligendi molestias in voluptatibus impedit! Nesciunt voluptatem dolorum perspiciatis minus id, voluptate, iure optio quibusdam, porro nam eaque harum cupiditate laboriosam quod. Saepe iste alias beatae voluptatibus!" colour="regular"/>

       
        <Trianglediv/>
        {/* <VideoComp/> */}
        <Timer/>
        
        <Footer/>
    </>
  )
}

export default Homepage