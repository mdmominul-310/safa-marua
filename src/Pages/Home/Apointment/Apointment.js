import React from 'react';
import { Col, Form, FormControl, InputGroup, Row,Button } from 'react-bootstrap';

const Apointment = () => {
    return (
        



    
       
    <Row className="my-5 animate__animated animate__slideInDown">
          <Col lg={8} md={8} sm={12} className="hover-regular ">
            <div className="shadow p-5">  
            <h1>Welcome To <span className="text-primary text-center">Safa Marua Hospital</span></h1>
            <Row className="mt-5" >
                <Col className="shadow p-3" sm={12}>
                <p>Safa marua hospital is the best hospital in Gazipur Zilla. Safamarua hospital have 24 hours support for patient. Our all the patient are satisfied for our tretment and consultant.</p>
                </Col>
                <Col className="p-2 shadow" sm={12}>
                <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1228&q=80"  className="img-fluid" alt="" />
                </Col>
            </Row>
            </div>
        </Col>
        <Col lg={4} md={4} sm={12} className="hover-regular pos-style">
            <div className="shadow p-5 bg-light">
                <h2 className="text-center my-5">Consultation</h2>
            <Form>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Name   :</InputGroup.Text>
                <FormControl
                placeholder="Your Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
                </InputGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Service:</InputGroup.Text>
                
                <Form.Select >
                     <option>None</option>
                    <option>Pathology</option>
                    <option>Niorology</option>
                    <option>Cardiology</option>
                    <option>Surgery</option>
                    <option>Dental</option>
                    <option>Cosmetics</option>
                </Form.Select>
                
                </InputGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Number:</InputGroup.Text>
                <FormControl
                placeholder="Your Mobile Number"
                aria-label="mobile-number"
                aria-describedby="basic-addon1"
                />
                </InputGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Date    :</InputGroup.Text>
                <FormControl
                placeholder="Date"
                aria-label="date"
                aria-describedby="basic-addon1"
                type="date"
                />
                </InputGroup>

                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Time    :</InputGroup.Text>
                <FormControl
                placeholder="Time"
                aria-label="Time"
                aria-describedby="basic-addon1"
                type="Time"
                />
                </InputGroup>
                <InputGroup className="mb-3">
                        <Button variant="success">Book Apointment</Button>
                </InputGroup>

            </Form>
            </div>
        </Col>
    </Row>
  
    );
};

export default Apointment;