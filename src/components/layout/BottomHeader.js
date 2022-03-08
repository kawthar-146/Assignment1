import React from "react";
import {
  BsGlobe,
  BsCurrencyDollar } from "react-icons/bs";
  import {
    Navbar,
    Container,
    Nav,
  } from "react-bootstrap";
  import "../header.css";

const BottomHeader = () => {
    return (
      <>
        <section className="container-fluid">
          <div className="row">
            <div className="col-16">
              <div className="container">
                <div className="row">
                 
                 
                    <Navbar>
                      <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <div className="col-14 col-lg-12">
                          <Nav className="me-auto1">
                            <Nav.Link href="#home"> New In</Nav.Link>
                            <Nav.Link href="#link">Shop By</Nav.Link>
                            <Nav.Link href="#link">Designers</Nav.Link>
                            <Nav.Link href="#link">Clothing</Nav.Link>
                            <Nav.Link href="#link">Shoes</Nav.Link>
                            <Nav.Link href="#link">Bags</Nav.Link>
                            <Nav.Link href="#link">Accessories</Nav.Link>
                            <Nav.Link href="#link">Sale</Nav.Link>
                          </Nav>
                    </div>
                          
                          <div className="col-2 col-lg-2 row">
                           <div className="icon1">
                               <BsGlobe />
                              <BsCurrencyDollar/>
                            </div>
                          </div>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>
                  </div>
                
                </div>
              </div>
          </div>
        </section>
      </>
    );
  };
  
  export default BottomHeader;
  