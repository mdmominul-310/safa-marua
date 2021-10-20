import React from 'react';
import { Container } from 'react-bootstrap';
import BestDoctor from '../BestDoctor/BestDoctor';
import Apointment from './Apointment/Apointment';
import Slider from './Slider/Slider';
import WeOffer from './WeOffer/WeOffer';

const Home = () => {
    return (
        <div className="bg-light">
          <Container>
            <Slider></Slider>
            <Apointment></Apointment>
            <WeOffer></WeOffer>
            <BestDoctor></BestDoctor>
        </Container>
        </div>
    );
};

export default Home;