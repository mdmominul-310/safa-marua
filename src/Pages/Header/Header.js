import React from 'react';
import { Container, Nav, Navbar,Button, Row, Col } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/safa.png';
import phone from '../../images/phone-call.png';
import location from '../../images/place.png';
import time from '../../images/clock.png';
import facebook from '../../images/facebook (1).png';
import twitter from '../../images/twitter.png';
import linkden from '../../images/linkedin.png'
import usericon from '../../images/user.png'
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth/UseAuth';


const Header = () => {
    const{user,signout}=UseAuth();
    return (
// top header 
        <div className="bg-success shadow-sm"> 
        <Container>
            <Row >
                <Col lg={10} md={2} sm={12} className="animate__animated animate__slideInRight">
                    <Row lg={"auto"} sm={1} xs={1}>
                    <Col className="call d-flex align-items-center">
                            <img src={phone} alt="" />
                            <p className="mt-3 text-white">+8801704003819</p>
                    </Col>
                    <Col  className="d-flex align-items-center">
                        <img src={location} alt="" />
                        <p className="mt-3 text-white">Kapasia-upzila,Kapasia,Gazipur</p>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <img src={time} alt="" />
                        <p className="mt-3 text-white">24 Hours</p>
                    </Col>
                    </Row>
                </Col>
                <Col lg={2} sm={12} md={2} className="animate__animated animate__slideInLeft">
                    <Button variant="success"><img src={facebook} alt="" /></Button>
                    <Button variant="success"><img src={twitter} alt="" /></Button>
                    <Button variant="success"><img src={linkden} alt="" /></Button>
                </Col>
            </Row>
            </Container>
         {/* navigation bar start */}
            <div className="shadow-sm mb-2 rounded">   
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="animate__animated animate__slideInRight">
                    <Container>
                        <Navbar.Brand href="/home"> <img src={logo} className="logo-safa"alt="" /> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                                <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
                                <NavLink to="/contactus" className="nav-link">Contact Us</NavLink>
                                <NavLink to="aboutus" className="nav-link">About Us</NavLink>
                            </Nav>
                            <Nav>
                                {user.email?<NavLink to="/home" className="btn btn-success" onClick={signout}>Logout</NavLink>:<NavLink to="/login" className="btn btn-success">Login</NavLink>}
                               
                                {user.email && <div className="d-flex mx-3"> <img src={usericon} alt="" /> <h3 className="text-success">{user.displayName}</h3></div>}
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
            </div>
</div>
    );
};

export default Header;