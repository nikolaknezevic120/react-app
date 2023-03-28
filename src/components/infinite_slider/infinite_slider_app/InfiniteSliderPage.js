import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../style/infinite-slider/infinite.css';
import '../../style/infinite-slider/animation.css';
import animate_to_left from '../infinite_animations/animation_left';
import animate_to_right from '../infinite_animations/animation_right';
import sliderImage1 from '../../images/infinite-slider-images/slider-images/slider-image-1.png';
import sliderImage2 from '../../images/infinite-slider-images/slider-images/slider-image-2.png';
import sliderImage3 from '../../images/infinite-slider-images/slider-images/slider-image-3.png';
import sliderImage4 from '../../images/infinite-slider-images/slider-images/slider-image-4.png';
import sliderImage5 from '../../images/infinite-slider-images/slider-images/slider-image-5.png';
import sliderImage6 from '../../images/infinite-slider-images/slider-images/slider-image-6.png';
import sliderImage7 from '../../images/infinite-slider-images/slider-images/slider-image-7.png';
import sliderImage8 from '../../images/infinite-slider-images/slider-images/slider-image-8.png';
import sliderImage9 from '../../images/infinite-slider-images/slider-images/slider-image-9.png';
import sliderImage10 from '../../images/infinite-slider-images/slider-images/slider-image-10.png';
import sliderImage11 from '../../images/infinite-slider-images/slider-images/slider-image-11.png';

export default function InfiniteSliderPage() {

    return (
    <Container fluid>
        <div className='main-container'>
        <Row>
            <Col xl={8} sm={12}>
                <div className='slider-container'>
                    <div className='first-slider'>
                        <div className='first-slider-move' id='first-slider-move'>
                            <img src={sliderImage1} alt=''/>
                            <img src={sliderImage2} alt=''/>
                            <img src={sliderImage3} alt=''/>
                            <img src={sliderImage4} alt=''/>
                            <img src={sliderImage5} alt=''/>
                            <img src={sliderImage6} alt=''/>
                        </div>
                    </div>

                    <div className='second-slider'>
                    
                        <div className='second-slider-fixed'>
                            <div className='second-slider-move' id='second-slider-move'>
                                <img src={sliderImage7} alt=''/>
                                <img src={sliderImage8} alt=''/>
                                <img src={sliderImage9} alt=''/>
                                <img src={sliderImage10} alt=''/>
                                <img src={sliderImage11} alt=''/>   
                            </div>
                        </div>

                        <div className='buttons'>
                            <button id='btn_left' onClick={animate_to_left}></button>
                            <button id='btn_right' onClick={animate_to_right}></button>
                        </div>
                                              
                    </div>

                </div>
            </Col>

            <Col xl={4} sm={12}>
                <div className='text-container'>
                    <h3>Where does it come from?</h3>
                    <p id='text-p'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
                    literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
                    College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                    and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem 
                    Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and 
                    Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the 
                    Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 
                    1.10.32.
                    </p>
                </div>
            </Col>
        </Row>
        </div>
    </Container>
  )
}
