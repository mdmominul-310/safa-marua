import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Best-doctor.css'

const BestDoctor = () => {
    return (
        <div className="best-doctor-bg my-5">
            <div className="trans-bg">
                <h2 className="text-primary text-center pt-5">Best Doctor</h2>
            <Row xs={1} md={2} lg={3} className="g-4 p-5">
  
    <Col>
      <Card className="d-flex justfy-content-center align-items-center p-3 hover-regular">
        <Card.Img variant="top" className="w-50 rounded border border-2 shadow-sm" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" />
        <Card.Body>
          <Card.Title className="textg-primary text-center">Dr. Chandra </Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="d-flex justfy-content-center align-items-center p-3 hover-regular">
        <Card.Img variant="top" className="w-50 rounded border shadow-sm" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" />
        <Card.Body>
          <Card.Title className="textg-primary text-center">Dr. Chandra </Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="d-flex justfy-content-center align-items-center p-3 hover-regular">
        <Card.Img variant="top" className="w-50 rounded border shadow-sm" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" />
        <Card.Body>
          <Card.Title className="textg-primary text-center">Dr. Chandra </Card.Title>
        </Card.Body>
      </Card>
    </Col>
 
</Row>
            </div>
        </div>
    );
};

export default BestDoctor;