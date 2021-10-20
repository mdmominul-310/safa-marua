import React from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import UseService from '../../Hooks/UseServices/UseService';
import Price from './Price';

const Pricing = () => {
   const {services}=UseService();
    return (
        <Container className="my-5">
            <h2 className="text-primary text-center shadow mb-5 p-3">Pricing</h2>
            <CardGroup>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service=><Price key={service.key} service={service}></Price>)
                }
            </Row>
            </CardGroup>
        </Container>
    );
};

export default Pricing;