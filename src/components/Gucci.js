import React from 'react'
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FiArrowRight} from "react-icons/fi";
import "./Gucci.css"
function Gucci() {
    return (
        <div className="gucci">
            <h2>
                GUCCI
            </h2>
            <p>
            Gucci is an Italian luxury fashion house based in Florence, Italy.
Its product lines include handbags, ready-to-wear, footwear, and accessories, makeup, fragrances, and home decoration.
Gucci was founded in 1921 by Guccio Gucci in Florence, Tuscany.
            </p>
            <div className="show">
               <div className="text1">
                   SHOW ALL
               </div>

               <FiArrowRight />
            </div>
            <div className="line">
                
            </div>
        </div>

    )
}

export default Gucci
