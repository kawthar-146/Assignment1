import React from 'react'
import ReactElasticCarousel from "react-elastic-carousel";
import Cards from './card';
import img1 from "../images/bags.png"
import img2 from "../images/bagd.png"
import img3 from "../images/man3.png"
import img4 from "../images/coats.png"
const data=[
{title:"Bags",img:img2},
{title:"Shoes",img:img3,des:"The collection of shoes for women features coveted styles such as Double G pumps and boots Horsebit loafers Princetown slippers sneakers and slides"},
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
               <Cards title={item.title} img={item.img} des={item.des}/>
        ))}
    </ReactElasticCarousel>
      
    </div>
  )
}

export default Carousel
