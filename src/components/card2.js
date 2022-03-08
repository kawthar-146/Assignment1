import React from 'react'

import { AiFillHeart,AiTwotonePlusCircle,AiTwotoneLock,AiTwotoneStar } from "react-icons/ai";
import {Card } from "react-bootstrap";
import "./card2.css"
function Card2({title,des,img,price,rating}) {
    return (
        <>
     
        <Card >
        <div className="img4">
     <Card.Img variant="top"  src={img} /></div>
     
     <Card.Body>
       <Card.Text>
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
           </Card.Text>
    </Card.Body>
    
  </Card>
        </>
    )
}

export default Card2
