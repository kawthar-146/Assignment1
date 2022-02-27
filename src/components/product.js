import React from 'react'
import { useState } from "react";
import "./product.css"
import Dropdown1 from './dropdown1'
import Carousel from './carousel';
import Carousel2 from './carousel2';
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

                 </div>
                 <div className="sell">
                 <h2>Top Selling</h2>
                 <Carousel2/>
                 </div>
                 <div className="new">
                 <h2>New IN</h2>
                 <Carousel2/> 
                  </div>
            </div>
        </div>
    )
}

export default Product
