import React from 'react';
import { Card, Col } from 'react-bootstrap';
import taka from '../../images/taka.png';
const Price = (props) => {
   const {service}=props;
 const uri=`/pricing/:${service.key}`
    return (
        <Col className="hover-regular shadow-lg">
      <Card>
        <Card.Img variant="top" src={service.imgUrl} className="card-img" />
        <Card.Body>
          <Card.Title>{service.serviceName}</Card.Title>
          <Card.Text>
            {service.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex">
            <img src={taka} alt="" />
            <h4>{service.price}</h4>
           
            
        </Card.Footer>
      </Card>
    </Col>
  

    );
};

export default Price;