import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './WeOffer.css'
import doctor from '../../../images/doctor.png'


const WeOffer = () => {
    return (
        <div className="we-offer-bg" >
        <div className="trans-bg">
           <Row className="pb-5">
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="d-flex justify-content-between p-5">
                    <h2 className="text-light">We Offer you</h2>
                    <NavLink to="/contactus" className="btn btn-success"> Contact us </NavLink>
                    </div>
                </Col>   
                <Col lg={12} md={12} sm={12} xs={12}  >
                    <Container className="w-75">  
                <Row xs={1} md={2} className="g-4">
                        <Col>
                        <Card className="d-flex justify-content-center align-items-center hover-regular">
                            <Card.Img variant="top" src={doctor} className="w-25" />
                            <Card.Body>
                            <Card.Title className="text-center text-primary">Best Doctor</Card.Title>
                            <Card.Text>
                                Safa Marua Hospital have best doctor for satisfied for our every single patient
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card className="d-flex justify-content-center align-items-center hover-regular">
                            <Card.Img variant="top" src={doctor} className="w-25" />
                            <Card.Body>
                            <Card.Title className="text-center text-primary">Best Doctor</Card.Title>
                            <Card.Text>
                                Safa Marua Hospital have best doctor for satisfied for our every single patient
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card className="d-flex justify-content-center align-items-center hover-regular">
                            <Card.Img variant="top" src={doctor} className="w-25" />
                            <Card.Body>
                            <Card.Title className="text-center text-primary">Best Doctor</Card.Title>
                            <Card.Text>
                                Safa Marua Hospital have best doctor for satisfied for our every single patient
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card className="d-flex justify-content-center align-items-center hover-regular">
                            <Card.Img variant="top" src={doctor} className="w-25" />
                            <Card.Body>
                            <Card.Title className="text-center text-primary">Best Doctor</Card.Title>
                            <Card.Text>
                                Safa Marua Hospital have best doctor for satisfied for our every single patient
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                </Row>
                </Container>  
                </Col>
               
            </Row> 
        </div>
        </div>
    );
};

export default WeOffer;