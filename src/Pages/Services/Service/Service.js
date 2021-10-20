import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {service}=props;
    const more_uri=`/pricing/${service.key}`;
    console.log(props)
   
    return (
        <Col className="hover-regular shadow-lg p-2 rounded">
        <Card className="h-100  p-3">
            <Card.Img className="card-img" variant="top" src={service.imgUrl}/>
            <Card.Body>
            <Card.Title> {service.serviceName} </Card.Title>
            <Card.Text>
                {service.description}
            </Card.Text>
            </Card.Body>
            <Card.Footer> 
                
            <NavLink className="btn btn-success" to={more_uri}>More Details</NavLink>
            </Card.Footer>
        </Card>
        </Col>
    );
};

export default Service;