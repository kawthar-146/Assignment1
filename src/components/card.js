import React from 'react'
import { FiArrowUpCircle} from "react-icons/fi";
import "./card.css"
function Card({title,img}) {
    return (
        <div className="card">
        <img src={img} />
            <p>{title}</p>
           <FiArrowUpCircle className="icon2"/>
        </div>
    )
}

export default Card
