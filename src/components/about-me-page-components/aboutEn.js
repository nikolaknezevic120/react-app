import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../images/images/image1.jpg';
import image5 from '../images/images/image5.jpg';
import image7 from '../images/images/image7.jpg';
import '../style/about-me/about_me.css';

export default function AboutEn() {

    return (
      <Container fluid>
        <div id='first-page-body'>
  
          <div id="about-me-title">
            <h3>About me</h3> 
        
            </div>
                
            <Row>
              <Col sm={12} md={6} xl={6}>
                <h3 id='openBtn'>// Long story short</h3>
                      
                <div class="text">
                  <h4>Who is Nikola?</h4>
                  <p>
                    I am a young person who became interested in frontend development after my first contact with 
                    frontend. I consider myself to have the potential and desire to progress. 
                  </p>

                  <h4>What are my experiences so far?</h4>
                  <p>
                    Until recently, I only did the duties and tasks that I had to do at university. When I got more free time I 
                    started doing more research and dedicated myself exclusively to the frontend.
                  </p>
                </div>

              </Col>
  
              <Col sm={12} md={6} xl={6} >
                <img id='text-img' src={image1}/>
              </Col>
  
   {/* desktop version */}
  
              <Col sm={12} md={6} xl={6} id='desktop'>
                <img id='text-img' src={image7}/>
              </Col>
  
              <Col sm={12} md={6} xl={6} id='desktop'>
                <h3 id='openBtn'>// Schooling</h3>

                <div className='text'>
                  <h4>Primary school</h4>
                  <p>
                    I finished primary school in my native Zadar with excellent results, showing the most interest in science subjects. 
                  </p>

                  <h4>High school</h4>

                  <p>
                    After excellent results in elementary school, I enrolled in the Franjo Petrić high school in Zadar, majoring in science and mathematics (MIOC).
                  </p>
                              
                  <h4>University</h4>
                  
                  <p>
                    After doing well in high school, I decided to stay in Zadar at all costs and enrolled in Management at the 
                    Department of Economics (University of Zadar), but I couldn't find my way there and gave up. During a break 
                    from studying, I found out that a professional study of information technologies had opened in Zadar, which I
                    enrolled in and that's where I came into first serious contact with the frontend.
                  </p>
                </div>
              </Col>
                  
  {/* mobile version  */}
  
              <Col sm={12} md={6} xl={6} id='mobile'>
                <h3 id='openBtn'>// Schooling</h3>
  
                <div class="text">
  
                  <h4>Primary school</h4>
                  <p>
                    I finished primary school in my native Zadar with excellent results, showing the most interest in science subjects. 
                  </p>

                  <h4>High school</h4>
                  <p>
                    After excellent results in elementary school, I enrolled in the Franjo Petrić high school in Zadar, majoring in science and mathematics (MIOC).
                  </p>
                  
                  <h4>University</h4>
                  <p>
                    After doing well in high school, I decided to stay in Zadar at all costs and enrolled in Management at the 
                    Department of Economics (University of Zadar), but I couldn't find my way there and gave up. During a break 
                    from studying, I found out that a professional study of information technologies had opened in Zadar, which I
                    enrolled in and that's where I came into first serious contact with the frontend.
                  </p>
                </div>
              </Col>
  
              <Col sm={12} md={6} xl={6} id='mobile'>
                <img id='text-img' src={image7}/>
              </Col>
  
              <Col sm={12} md={6} xl={6}>
                <h3 id='openBtn'>// Other</h3>
  
                <div class="text">
                  <h4> Does Nikola do anything else, does he have any hobbies?</h4>

                  <p>
                    Of course, I am a music and sports lover. I trained rowing for a couple of years and I play the accordion. I 
                    like to listen to all genres of music and watch every sport from rowing and skiing to handball and football. 
                    I currently play the accordion, go to the gym and ride a bike.
                  </p>
                </div>                        
              </Col>
  
              <Col sm={12} md={6} xl={6}>
                <img id='text-img' src={image5}/>
              </Col>
            </Row>
        </div>
      </Container>
    )
}