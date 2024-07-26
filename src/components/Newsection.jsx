import React from "react";
import "./Newsection.css"


const Newsection = ({colour, title, desc}) => {
  return (
    <section className={`Mainsection ${colour}`}id="about" >
      <div className="mainsectionbody">
        <div className="first row">
            <h1>{title}</h1>
        
            <h3>
                {desc}
            </h3>
        </div>
      </div>
    </section>
  );
};

export default Newsection;
