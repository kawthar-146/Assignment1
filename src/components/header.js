import React from 'react'
import "./header.css";
import { AiFillHeart,AiOutlineUser,AiTwotoneLock } from "react-icons/ai";
import { BsGlobe,BsCurrencyDollar } from "react-icons/bs";
import { GiHamburgerMenu} from "react-icons/gi";
const header = () => {
    return (
        <>
            <nav className="main-nav">
              <div className="logo">
                  <h2>
                  <span>S</span>heyaaka
                  <span>شيا</span>كة

                  </h2>
              </div>
              <div className="menu-link">
                  <ul>
                      <li><a href="#">Women</a></li>
                      <li><a href="#">Men</a></li>
                      <li><a href="#">Children</a></li>
                      <li><a href="#">Gift Registries</a></li>

                  </ul>
              </div>
              <div className="icon">
              <ul className="icon-desktop">
                  <li>
                    <AiFillHeart className="coloricon"/>
                  </li>
                  <li>
                    <AiOutlineUser className="coloricon"/> 
                  </li>
                  <li>
                    <AiTwotoneLock className="coloricon"/>
                  </li>
              </ul>
                   {/* <div className="hamburger-menu">
                   <a href="#">
                   <GiHamburgerMenu/>
                     </a>
                   </div> */}

              </div>
            </nav>
            <section> 
            <div className="menu-links">
                  <ul>
                      <li><a href="#">New In</a></li>
                      <li><a href="#">Shop By</a></li>
                      <li><a href="#">Designers</a></li>
                      <li><a href="#">Clothing</a></li>
                      <li><a href="#">Shoes</a></li>
                      <li><a href="#">Bags</a></li>
                      <li><a href="#">Accessories</a></li>
                      <li><a href="#" className="Yellow">Sale</a></li>

                  </ul>
              </div>
              <div className="icon-sec">
              <ul className="icon-sec-desktop">
                  <li>
                    <BsGlobe />
                  </li>
                  <li>
                    <BsCurrencyDollar /> 
                  </li>
                 
              </ul>

              </div>
            </section>
        </>
    );
};

export default header
