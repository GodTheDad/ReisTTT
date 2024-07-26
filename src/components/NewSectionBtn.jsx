import React from "react";
import "./Newsection.css"
import "./NewSectionBtn.css"
import {Link} from "react-router-dom"
const NewsectionBtn = ({colour, title, desc}) => {
  return (
    <section className={`Mainsection ${colour}`}id="about" >
      <div className="mainsectionbody">
        <div className="first row">
            <h1>{title}</h1>
        
            <h3>
                {desc}
            </h3>
            <div className="buttondiv"><Link to = {`/gallery/#nav`}><button className="buttoncenter"> Veiw Gallery </button></Link></div>
        </div>
      </div>
    </section>
  );
};

export default NewsectionBtn;
