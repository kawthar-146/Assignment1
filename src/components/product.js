import React from 'react'
import { useState } from "react";
import "./product.css"
import Dropdown1 from '../components/layout/dropdown1'
import Carousel from './carousel';
import Carousel2 from './carousel2';
import imgG from "../images/visual1.png";
function Product() {
    const [selected, setSelected] = useState("");
    return (
        <div className="main-container">
            <div className="left"> 
              <h2>600+ Pieces</h2>
              <Dropdown1 selected={selected} setSelected={setSelected}/>
              <Dropdown1 selected={selected} setSelected={setSelected}/>
              <Dropdown1 selected={selected} setSelected={setSelected}/>
              <Dropdown1 selected={selected} setSelected={setSelected}/>
              <Dropdown1 selected={selected} setSelected={setSelected}/>
              <Dropdown1 selected={selected} setSelected={setSelected}/>
              <Dropdown1 selected={selected} setSelected={setSelected}/>
              <Dropdown1 selected={selected} setSelected={setSelected}/>
               <Dropdown1 selected={selected} setSelected={setSelected}/>
            </div>
            <div className="right">
                <div className="shop">
                 <h2>Shop Women</h2>
                 
                  <Carousel/>
                 </div>
                 <div className="shop">
                 <h2>Shop MEN</h2>
                 <Carousel/>
                 </div>
                 <div className="bagimg">
                  <img src={imgG}/>

                 </div>
                 <div className="sell">
                 <h3>Top Selling</h3>
                 <Carousel2/>
                 </div>
                 <div className="new">
                 <h3>New IN</h3>
                 <Carousel2/> 
                  </div>
            </div>
        </div>
    )
}

export default Product
