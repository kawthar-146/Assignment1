import React from 'react'
import ReactElasticCarousel from "react-elastic-carousel";
import Card2 from './card2';
import img1 from "../images/man1.png";
import img2 from "../images/man2.png";
import img3 from "../images/man3.png";
import img4 from "../images/man4.png";


const data=[
{title:"Bags",des:"descreption",price:"3.85",rating:"5.0",img:img1},
{title:"Shoes",des:"descreption",price:"4.85",rating:"4.3",img:img2},
{title:"Shirts",des:"descreption",price:"3.6",rating:"3.0",img:img3},
{title:"coats",des:"descreption",price:"5.5",rating:"4.0",img:img4}]
function Carousel2() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];
  return (
    <div className="cars2">
    <ReactElasticCarousel className="elas" breakPoints={breakPoints} itemsToShow={4}>
        {data.map(item=>(
               <Card2 title={item.title} des={item.des} img={item.img} price={item.price} rating={item.rating}/>
        ))}
    </ReactElasticCarousel>
      
    </div>
  )
}

export default Carousel2
