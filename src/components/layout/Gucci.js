import React from "react";
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { section } from "react-bootstrap";
import icon3 from "../../images/icon3.png"
import "../Gucci.css";
function Gucci() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
            <div className="gucci">
              <h2>GUCCI</h2>
              <p>
                Gucci is an Italian luxury fashion house based in Florence,
                Italy.<br/><span>Its product lines include handbags, ready-to-wear,
                footwear, and accessories, makeup, fragrances, and home decoration.</span><br/>
                 Gucci was founded in 1921 by Guccio Gucci in Florence, Tuscany.
              </p>
              </div>
              </div>
              
              <div className="col-md-12 text-center row">
              <div className="show">
                <div className="text1">SHOW ALL <img src={icon3}/></div>
                    
              </div>
            
             </div>
             
              {/* <div className="underline max-auto"></div> */}
            </div>
            <div className="line"></div>
          </div>
        
      </section>
    </>
  );
}

export default Gucci;
