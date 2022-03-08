import React from "react";
import {
  BsHeart,
  BsBag,
  BsPerson,
} from "react-icons/bs";
import logo from "../../images/logo.png";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "../header.css";
const Header = () => {
  return (
    <>
      <header className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-4 col-lg-3">
                  <div className="logo">
                    <img src={logo} />
                  </div>
                </div>
                <div className="col-4 col-lg-6">
                  <Navbar>
                    <Container>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                          <Nav.Link href="#home">Women</Nav.Link>
                          <Nav.Link href="#link">Men</Nav.Link>
                          <Nav.Link href="#link">Children</Nav.Link>
                          <Nav.Link href="#link">Gift Registries</Nav.Link>
                        </Nav>
                        
                        <div className="col-2 col-lg-2">
                          <Form className="d-flex">
                            <FormControl
                              type="search"
                              placeholder=""
                              className="me-2"
                              aria-label="Search"
                            />
                          </Form>
                        </div>
                        <div className="col-2 col-lg-3 row">
                         <div className="icon">
                          <BsHeart />
                          <BsPerson />
                          <BsBag />
                          </div>
                        </div>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
