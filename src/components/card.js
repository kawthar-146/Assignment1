import React from 'react'
import { BsFillArrowUpRightCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs";
import "./card.css"
import {Card } from "react-bootstrap";
function Cards({title,img,des}) {
    return (
        <>
     
       <Card >
       <div className="img3">
    <Card.Img variant="top"  src={img} /></div>
    <Card.ImgOverlay>
    <Card.Body>
      <Card.Text>
       <p className="p1">{title}</p>
       <BsFillArrowUpRightCircleFill className="icon2"/>
       {/* <div className="content">
           <h2>{title}</h2>
           <p>{des}</p>
           <p>View All</p>
           <BsFillArrowRightCircleFill/>

       </div> */}
      </Card.Text>
    </Card.Body>
    </Card.ImgOverlay>
  </Card>

        {/* <div className="card">
        <img src={img} />
            <p>{title}</p>
           <FiArrowUpCircle className="icon2"/>
        </div> */}
        </>
    )
}

export default Cards
