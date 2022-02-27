import React from 'react'
import ReactElasticCarousel from "react-elastic-carousel";
import Card from './card';
import img1 from "../images/bags.png"
import img2 from "../images/bagd.png"
import img3 from "../images/shoes.png"
import img4 from "../images/coats.png"
const data=[
{title:"Bags",img:img2},
{title:"Shoes",img:img3},
{title:"Shirts",img:img1},
{title:"coats",img:img4}]
function Carousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];
  return (
    <div>
    <ReactElasticCarousel breakPoints={breakPoints} itemsToShow={4}>
        {data.map(item=>(
               <Card title={item.title} img={item.img}/>
        ))}
    </ReactElasticCarousel>
      
    </div>
  )
}

export default Carousel
