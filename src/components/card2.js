import React from 'react'

import { AiFillHeart,AiTwotonePlusCircle,AiTwotoneLock,AiTwotoneStar } from "react-icons/ai";

import "./card.css"
function Card2({title,des,img,price,rating}) {
    return (
        <div className="card2">
        <img src={img} />
            <p className="tit">{title}</p>
            <p>{des}</p>
            <div className="price">
                {price}
               <div className="icon3">
                   <AiTwotoneLock/>
                   <AiFillHeart/>
                   
               </div>
            </div>
            <div className="rating">
            <div className="stars">
            <AiTwotoneStar className="col4"/>
            <AiTwotoneStar className="col4"/>
            </div>
                {rating}
            </div>
           <div className="circ">
            <AiTwotonePlusCircle className="col1"/>
            <AiTwotonePlusCircle className="col2"/>
            <AiTwotonePlusCircle className="col3"/>
           </div>
        </div>
    )
}

export default Card2
