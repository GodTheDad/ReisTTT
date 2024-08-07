import React from "react";
import "./RightSection.css"


const Rightsection = ({colour, title, desc,imgsrc}) => {
  return (
    <section className={`Mainsection ${colour}`}id="about" >
      <div className="mainsectionbody">
        
        <div className="newrow">
            <h1 class="Lefttext">{title}</h1>
        
            <h3 className="Lefttext">
                {desc}
            </h3>
        </div>
        <div className="imgdiv">
        <img className= "sectionimg"src={imgsrc}/>
        </div>
      </div>
    </section>
  );
};

export default Rightsection;