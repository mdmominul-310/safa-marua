import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container>
            <h2 className="my-5 text-primary text-center">About Us</h2>
            <Row lg={2} className="shadow-lg p-5">
                <Col>
                    <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" className="img-fluid" alt="" />
                </Col>
                <Col className="p-5">
                    <h2> Chairman (Safa Marua Hospital)</h2>
                    <p>Md Mohfizol haque chairman Safa Marua Hospital . Safa Marua Hospital inatall from since 1992. </p>
                    
                </Col>
            </Row>
            <Row lg={2} className="shadow-lg p-5n my-5">
                <Col>
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-fluid" alt="" />
                </Col>
                <Col className="p-5">
                    <h2> Manager (Safa Marua Hospital)</h2>
                    <p>Sabiha khatun  haque chairman Safa Marua Hospital . Safa Marua Hospital inatall from since 1992. </p>
                    
                </Col>
            </Row>
            <Row lg={2} className="shadow-lg p-5 mb-5">
                <Col>
                    <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-fluid" alt="" />
                </Col>
                <Col className="p-5">
                    <h2> Genaral Manager (Safa Marua Hospital)</h2>
                    <p>Md Rahmat haque chairman Safa Marua Hospital . Safa Marua Hospital inatall from since 1992. </p>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;