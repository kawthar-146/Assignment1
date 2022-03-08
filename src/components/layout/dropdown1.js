import React from "react";
import { useState } from "react";
import {
  Dropdown,
  InputGroup,
  Form
  } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';
// import Dropdown from 'react-bootstrap/Dropdown';
import { FiChevronDown } from "react-icons/fi";
import "../dropdown1.css";

function Dropdown1() {
  // const [isActive, setIsActive] = useState(false)
  // const options = ['React', 'vue', 'Amgular']
  return (
      <>
    <Dropdown >
    <div className="btn1">
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        BRAND
      </Dropdown.Toggle>
    </div>
      <Dropdown.Menu>
      
       {['Louis', 'Gucci', 'Burberry','Fendi','Furenti','Wink wink'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
           <Form.Check
              type="checkbox"
              id={`default-${type}`}
              label={`${type}`}
            />

             </div>
            ))}
  
        {/* <Dropdown.Item href="#/action-1">
        <InputGroup.Checkbox aria-label="Checkbox button for following text input" />
        Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
    </>
    // <div className="dropdown">
    //     <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>Choose One
    //     <FiChevronDown className="down"/>
    //     {/* <span className="fas fa-caret-down"></span> */}
    //     </div>
    //     {isActive && (
    //     <div className="dropdown-content">
    //     {options.map(option=>(
    //         <div
    //         onClick={(e) => {
    //             setSelected (option);
    //             setIsActive (false);
    //         }}
    //        className="dropdown-item">
    //             {option}
    //         </div>
    //     ))}

    //     </div>
    //     )}
    // </div>
  );
}

export default Dropdown1;
