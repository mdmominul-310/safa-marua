import React from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import UseService from '../../Hooks/UseServices/UseService';
import Service from './Service/Service';

const Services = () => {
   const {services}=UseService();
 

    return (
        
        <Container className="my-5">
            <h2 className="text-primary text-center my-3">Services</h2>
            <CardGroup>
            <Row xs={1} md={2} lg={3} className="g-4">
                {services.map(service=><Service key={service.key} service={service}></Service> )}
                
            </Row>
            </CardGroup>
        </Container>
    );
};

export default Services;