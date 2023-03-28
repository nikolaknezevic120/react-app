import React from 'react';
import { Container } from 'react-bootstrap';
import About from './about-me-page-components/about';
import Carousel from './about-me-page-components/carousel';
import './style/about-me/main-about.css';

export default function about_me() {
  return (
    <Container fluid>
        <div className='main-about'>
            <About />
            <Carousel />
        </div>
    </Container>
    )
}
