import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark">
            <Container>
                <Row className="p-5">
                    <Col className="p-5">
                        <p className="text-light">
                            Welcome to Safa Marua Genarel Hospital . Safa Mafrua Hospital is the best hospital in gazipur Zilla
                        </p>
                    </Col>
                    <Col className="p-5">
                        <p className="text-light">  contact us for your health support</p>
                        <p className="text-light">+8801704003819,Email:mdmominulislam310@gmail.com</p>
                        <p className="text-light">Address: Nearby Kapasia upzila, Kapasia, Gazipur</p>
                    </Col>
                    <Col className="p-5"> 
                    <iframe title="this is location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.6044421167326!2d90.56490031543069!3d24.11540218441076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755d50bc66ffe65%3A0x2352039f7bc95f45!2sKapasia%20Bazar%20-%20Targaon%20Nouka%20Rte!5e0!3m2!1sen!2sbd!4v1634646464485!5m2!1sen!2sbd" ></iframe>
                    </Col>
                </Row>
            </Container>
            <div className="p-2  shadow-lg d-flex justify-content-center align-items-center footer-bg">
                <p className="text-light"> All righ reserved &copy; Safa Marua Hospital  Developed by <a href="facebook.com/mdmominulislam310">Md Mominul Islam!</a></p>
            </div>
        </div>
    );
};

export default Footer;