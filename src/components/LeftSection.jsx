import React from "react";
import "./LeftSection.css"


const Leftsection = ({colour, title, desc,imgsrc}) => {
  return (
    <section className={`Mainsection ${colour}`}id="about" >
      <div className="mainsectionbody">
        <img className= "sectionimg"src={imgsrc}/>
        <div className="firstrow">
            <h1 class="righttext">{title}</h1>
        
            <h3 className="righttext">
                {desc}
            </h3>
        </div>
      </div>
    </section>
  );
};

export default Leftsection;
