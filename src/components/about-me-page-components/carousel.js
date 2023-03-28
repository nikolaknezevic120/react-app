import React from 'react';
import '../style/about-me/carousel/carousel.css';
import { Carousel, Container } from 'react-bootstrap';
import image1 from '../images/images/image1.jpg';
import image2 from '../images/images/image2.jpg';
import image3 from '../images/images/image3.jpg';
import image4 from '../images/images/image4.jpg';
import image5 from '../images/images/image5.jpg';


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
                <img className='img-fluid shadow-4' id="carousel-image" src={image4} alt="Third slide"/>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img className='img-fluid shadow-4' id="carousel-image" src={image5} alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
        </div>
    </Container>
  )
}
