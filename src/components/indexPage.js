import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import profileImage from './images/profile-image/profile-image.png';
import './style/index-page/index-page.css';

export default function IndexPage() {
  
  const [textOpen, setTextOpen] = useState(false);
  const defaultLang = localStorage.getItem('lang');
  
  if (defaultLang === 'hr'){
  return (
    
    <Container fluid>
      <div className='index-body'>
        <div className='index-elements'>
          <h1 id='welcome'> Dobro došli </h1>
            <Row>
              <Col lg={8} sm={12}>
                <h3 id='hello'>
                  Ja sam Nikola, ovu aplikaciju sam napravio kako bih Vam prezentirao sebe i svoj rad.
                </h3>
          
                <p id='describe-main'>
                  // U ovoj aplikaciji se nalaze moje tri aplikacije koje sam izradio.
                </p>
            
                <p id='describe-main-mob'>
                  // U ovoj aplikaciji se nalaze moje tri aplikacije koje sam izradio.
                </p>
              </Col>

              <Col lg={4} sm={12} id='profile-image-col'>
                <img id='index-profile-img' src={profileImage} alt=""/>
              </Col>
            </Row>            

            <div className='describe-about' >

              <h3>O zadatcima</h3>

              <div className='aboutTasksRow'>
                <Row id='aboutTasksRow'>
                  <Col lg={4} sm={12}>
                    <div className='aboutTasks'>
                      <b>Follow the card</b> je zamišljena aplikacija u koju korisnik može unositi svoje bankovne kartice.<br />
                        Budući da nisam radio backend, podatci o korisniku se spremaju u local storage, koji se klikom na button 
                        odjavi se, čisti i tako se gube uneseni podatci kao i sve promjene izvršene u listi sa karticama.
                        <a href='#/login' id='link'> Pogledajte aplikaciju.</a>
                    </div>
                  </Col>

                  <Col lg={4} sm={12}>
                    <div className='aboutTasks'>
                      <b>Infinite slider</b> U ovom zadatku se nalaze dva reda fotografija različitih širina, te se klikom na strelicu 
                        oba dva reda pomiču lijevo ili desno za širinu posljednje slike u redu. 
                        <a href='#/infinite_slider' id='link'> Pogledajte aplikaciju.</a>
                    </div>
                  </Col>

                  <Col lg={4} sm={12}>
                    <div className='aboutTasks'>
                      <b>Memory</b> aplikacija je zadnja aplikacija koju sam napravio. U izradi sam koristio react hook useState koji prati stanja otvorenih karata i
                        pogođenih parova. Aplikacija također broji ukupan broj pokušaja i izračunava postotak pogodaka.
                        <a href='#/memory' id='link'> Pogledajte aplikaciju.</a>
                    </div>
                  </Col>

                  <Col lg={12} sm={12}>
                    <div className='aboutTasks' id='aboutTasks-last'>
                      <b>Ostalo </b>Na mom github profilu se nalaze jos dva projekta koje sam radio na fakultetu za kolegije osnove objektnog 
                        programiranja i osnove web programiranja. <a href='https://github.com/nikolaknezevic120?tab=repositories' id='link' target="_blank" rel="noopener noreferrer">
                        Pogledajte ih</a>.<br />                     </div>
                  </Col>
                </Row>
              </div>

            </div>

            <p id='describe-bottom-about'>// Ako želite saznati tko sam, čime se bavim, gdje i kako sam odrastao... kliknite 
            <a href='#/about' id='link'> o meni</a>.</p>

            <p id='describe-bottom-about-mob'>// Ako želite saznati tko sam, čime se bavim, gdje i kako sam odrastao... kliknite 
            <a href='#/about' id='link'> o meni</a>.</p>
        </div>
      </div>
    </Container>
  )} else {
    return(
      <Container fluid>
      <div className='index-body'>
        <div className='index-elements'>
          <h1 id='welcome'> Welcome </h1>
            <Row>
              <Col lg={8} sm={12}>
                <h3 id='hello'>
                  I'm Nikola, I made this application to present myself and my work to you.
                </h3>
          
                <p id='describe-main'>
                  // This app contains my three apps that I've built.
                </p>
            
                <p id='describe-main-mob'>
                  // This app contains my three apps that I've built.
                </p>
              </Col>

              <Col lg={4} sm={12} id='profile-image-col'>
                <img id='index-profile-img' src={profileImage} alt=""/>
              </Col>
            </Row>            

            <div className='describe-about' >

              <h3>About tasks</h3>

              <div className='aboutTasksRow'>
                <Row id='aboutTasksRow'>
                  <Col lg={4} sm={12}>
                    <div className='aboutTasks'>
                      <b>Follow the card</b> is an imaginary application in which the user can enter his bank cards. Since I didn't work with the 
                        backend, user data is saved in local storage, which is logged out by clicking the button, cleared, and thus the entered data and 
                        all changes made in the list of cards are lost. 
                        <a href='#/login' id='link'> See the application.</a>
                    </div>
                  </Col>

                  <Col lg={4} sm={12}>
                    <div className='aboutTasks'>
                      <b>Infinite slider</b> in this task, there are two rows of photos of different widths, and by clicking on the arrow, both rows are 
                        moved to the left or right by the width of the last picture in the row.
                        <a href='#/infinite_slider' id='link'> See the application.</a>

                    </div>
                  </Col>

                  <Col lg={4} sm={12}>
                    <div className='aboutTasks'>
                      <b>Memory</b> app is the last app i made. In the creation I used the react hook useState which monitors the states of open and 
                        affected couples. The application also counts the total number of attempts and calculates the percentage of hits.  
                        <a href='#/memory' id='link'> See the application.</a>		
                    </div>
                  </Col>

                  <Col lg={12} sm={12}>
                    <div className='aboutTasks' id='aboutTasks-last'>
                      <b>Other projects </b>On my github profile, there are two more projects that I worked on at the university for the courses Basics 
                        of Object Programming and Basics of Web Programming. You can 
                        <a href='https://github.com/nikolaknezevic120?tab=repositories' id='link' target="_blank" rel="noopener noreferrer"> check them.</a>.<br />
                    </div>
                  </Col>
                </Row>
              </div>

            </div>

            <p id='describe-bottom-about'>// If you want to find out who I am, what I do, where and how I grew up... click 
            <a href='#/about' id='link'> about me</a>.</p>

            <p id='describe-bottom-about-mob'>// If you want to find out who I am, what I do, where and how I grew up... click 
            <a href='#/about' id='link'> about me</a>.</p>
        </div>
      </div>
    </Container>
    )
  }
}