import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/about-me/about_me.css';

export default function AboutEn() {

    const [openShort, setOpenShort] =useState(false);
    const [openSchool, setOpenSchool] = useState(false);
    const [openOther, setOpenOther] = useState(false);

  return (
    <Container fluid>
        <div id='first-page-body'>

            <div id="about-me-title">
                <h3>About me</h3> 
            </div>
              
              <Row>
                      <Col sm={12} md={6} xl={4}>

                          <button id='openBtn' onClick={() => setOpenShort(!openShort)}><h3>Long story short</h3></button>

                          {openShort && <div class="text">
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
                          </div>}

                          {openShort && <button id='openBtn' onClick={() => setOpenShort(!openShort)}><h4>Close</h4></button>}
                      </Col>

                      <Col sm={12} md={6} xl={4}>

                          <button id='openBtn' onClick={() => setOpenSchool(!openSchool)}><h3>Schooling</h3></button>

                          {openSchool && <div class="text">
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
                          </div>}

                          {openSchool && <button id='openBtn' onClick={() => setOpenSchool(!openSchool)}><h4>Close</h4></button>}

                      </Col>

                      <Col sm={12} md={6} xl={4}>

                          <button id='openBtn' onClick={() => setOpenOther(!openOther)}><h3>Other</h3></button>

                          {openOther && <div class="text">
                              <h4> Does Nikola do anything else, does he have any hobbies?</h4>

                              <p>
                                Of course, I am a music and sports lover. I trained rowing for a couple of years and I play the accordion. I 
                                like to listen to all genres of music and watch every sport from rowing and skiing to handball and football. 
                                I currently play the accordion, go to the gym and ride a bike.
                              </p>
                          </div>}

                          {openOther && <button id='openBtn' onClick={() => setOpenOther(!openOther)}><h4>Close</h4></button>}
                          
                      </Col>
                  </Row>
    </div>
    </Container>
  )
}