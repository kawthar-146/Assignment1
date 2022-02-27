import React from 'react';
import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import Dropdown from 'react-bootstrap/Dropdown';
import { FiChevronDown} from "react-icons/fi";
import "./dropdown1.css";

function Dropdown1({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false)
    const options = ['React', 'vue', 'Amgular']
    return (
        
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>Choose One
            <FiChevronDown className="down"/>
            {/* <span className="fas fa-caret-down"></span> */}
            </div>
            {isActive && (
            <div className="dropdown-content">
            {options.map(option=>(
                <div 
                onClick={(e) => {
                    setSelected (option);
                    setIsActive (false);
                }}
               className="dropdown-item">
                    {option}
                </div>
            ))}
          
            </div>
            )}
        </div>
    );
}

export default Dropdown1
