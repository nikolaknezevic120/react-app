import React from 'react';
import { Container } from 'react-bootstrap';
import About from './about-me-page-components/about';
import Carousel from './about-me-page-components/carousel';
import './style/about-me/main-about.css';

export default function about_me() {

    const defaultLang = localStorage.getItem('lang') || 'hr';
    
    if (defaultLang === 'hr'){
        return (
            <Container fluid>
                <div className='main-about'>
                    <About />
                    <h3>// Galerija fotografija</h3>
                    <Carousel />
                </div>
            </Container>
        )
    }else{
        return (
            <Container fluid>
                <div className='main-about'>
                    <About />
                    <h3>// Photo gallery</h3>
                    <Carousel />
                </div>
            </Container>
        )
    }

  
}
