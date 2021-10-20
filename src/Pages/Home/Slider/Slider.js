import React from 'react';
import { Carousel } from 'react-bootstrap';
import doctor1 from '../../../images/doc1.jpg'
import doctor2 from '../../../images/doc2.jpg'
import doctor3 from '../../../images/doc3.jpg'

const Slider = () => {
    return (
        <div className="success animate__animated animate__slideInUp position-relative">   
        <Carousel>
  <Carousel.Item interval={1000}>
    <div className="trans-bg">
    <img
      className="d-block w-100 opacity-50"
      src={doctor1}
      alt="First slide"
    />
    </div>
    <Carousel.Caption>
      <h3>Dr.Nusrat</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <div className="trans-bg">
    <img
      className="d-block w-100 opacity-50"
      src={doctor2}
      alt="First slide"
    />
    </div>
    <Carousel.Caption>
      <h3>Dr. Mojammel</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item><Carousel.Item interval={1000}>
    <div className="trans-bg">
    <img
      className="d-block w-100 opacity-50"
      src={doctor3}
      alt="First slide"
    />
    </div>
    <Carousel.Caption>
      <h3>Dr. Faria</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
};

export default Slider;