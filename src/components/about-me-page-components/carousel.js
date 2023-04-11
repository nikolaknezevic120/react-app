import React from 'react';
import '../style/about-me/carousel/carousel.css';
import { Carousel, Container } from 'react-bootstrap';
import image1 from '../images/Smash/slimg1.jpg';
import image2 from '../images/Smash/slimg2.jpg';
import image3 from '../images/Smash/slimg3.jpg';
import image6 from '../images/Smash/slimg6.jpg';
import image7 from '../images/Smash/slimg7.jpg';
import image8 from '../images/Smash/slimg8.jpg';
import image9 from '../images/Smash/slimg9.jpg';
import image10 from '../images/Smash/slimg10.jpg';
import image11 from '../images/Smash/slimg11.jpg';

import image12 from '../images/images/image2.jpg';
import image13 from '../images/images/image4.jpg';
import image14 from '../images/images/image6.jpg';

export default function carousel() {
  return (
    <Container fluid>
        <div className='first-page-body'>
        <Carousel id='carousel' pause={'false'}>
            <Carousel.Item interval={2000} >
                <img className='img-fluid shadow-4' id="carousel-image" src={image1} alt="First slide" fluid/>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img className='img-fluid shadow-4' id="carousel-image" src={image2} alt="Third slide"/>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img className='img-fluid shadow-4' id="carousel-image" src={image3} alt="First slide" fluid/>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img className='img-fluid shadow-4' id="carousel-image" src={image6} alt="Third slide"/>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img className='img-fluid shadow-4' id="carousel-image" src={image7} alt="Third slide"/>
            </Carousel.Item>

            <Carousel.Item interval={2000} >
                <img className='img-fluid shadow-4' id="carousel-image" src={image8} alt="First slide" fluid/>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img className='img-fluid shadow-4' id="carousel-image" src={image9} alt="Third slide"/>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img className='img-fluid shadow-4' id="carousel-image" src={image10} alt="First slide" fluid/>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img className='img-fluid shadow-4' id="carousel-image" src={image11} alt="Third slide"/>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img className='img-fluid shadow-4' id="carousel-image" src={image12} alt="Third slide"/>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img className='img-fluid shadow-4' id="carousel-image" src={image13} alt="Third slide"/>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img className='img-fluid shadow-4' id="carousel-image" src={image14} alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
        </div>
    </Container>
  )
}
