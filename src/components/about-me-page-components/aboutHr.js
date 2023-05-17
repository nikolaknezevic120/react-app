import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../images/images/image1.jpg';
import image5 from '../images/images/image5.jpg';
import image7 from '../images/images/image7.jpg';
import '../style/about-me/about_me.css';

export default function AboutHr() {

  return (
    <Container fluid>
        <div id='first-page-body'>

            <div id="about-me-title">
                <h3>O meni</h3> 
            </div>
              
            <Row>
                <Col sm={12} md={6} xl={6}>
                    <h3 id='openBtn'>// Ukratko</h3>
                    
                    <div class="text">
                        <h4>Tko je Nikola?</h4>
                        
                        <p>
                            Ukratko, mlada sam osoba koja se zainteresirala u frontend development nakon prvog kontakta 
                            sa frontendom. Za sebe smatram kako posjedujem potencijal i volju za napredak.
                        </p>

                        <h4>Dosadašnja iskustva</h4>
                        <p>
                            Do nedavno sam radio isključivo obaveze i zadatke koje sam morao raditi na fakultetu, 
                            te kad sam dobio više slobodnog vremena počeo sam više istraživati i posvećivati se 
                            isključivo frontendu.
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
                    <h3 id='openBtn'>// Školovanje</h3>

                    <div class="text">

                        <h4>Osnovna škola</h4>
                        <p>
                            Osnovnu školu završio sam u rodnom Zadru sa odličnim uspijehom, najviše 
                            interesa pokazujući za prirodoslovne predmete.
                        </p>

                        <h4>Srednja škola</h4>
                            <p>
                                Nakon odličnog uspijeha u osnovnoj školi, upisujem gimnaziju Franje Petrića u Zadru, 
                                prirodoslovno-matematički smjer (MIOC).
                            </p>
      
                        <h4>Fakultet</h4>
                            <p>
                                Nakon dobrog uspijeha u srednjoj školi, odlučujem pod svaku cijenu ostati u Zadru i upisujem 
                                Menadžment na odjelu za ekonomiju (Sveučiliste u Zadru), ali tu se ne pronalazim nikako i 
                                odustajem. U pauzi od studiranja, saznajem da se otvorio stručni studij informacijskih 
                                tehnologija u Zadru, koji upisujem i tu dolazim u  prvi ozbiljniji doticaj sa frontendom.
                            </p>
                    </div>
                </Col>
                
{/* mobile version  */}

                <Col sm={12} md={6} xl={6} id='mobile'>
                    <h3 id='openBtn'>// Školovanje</h3>

                    <div class="text">

                        <h4>Osnovna škola</h4>
                        <p>
                            Osnovnu školu završio sam u rodnom Zadru sa odličnim uspijehom, najviše 
                            interesa pokazujući za prirodoslovne predmete.
                        </p>

                        <h4>Srednja škola</h4>
                            <p>
                                Nakon odličnog uspijeha u osnovnoj školi, upisujem gimnaziju Franje Petrića u Zadru, 
                                prirodoslovno-matematički smjer (MIOC).
                            </p>
      
                        <h4>Fakultet</h4>
                            <p>
                                Nakon dobrog uspijeha u srednjoj školi, odlučujem pod svaku cijenu ostati u Zadru i upisujem 
                                Menadžment na odjelu za ekonomiju (Sveučiliste u Zadru), ali tu se ne pronalazim nikako i 
                                odustajem. U pauzi od studiranja, saznajem da se otvorio stručni studij informacijskih 
                                tehnologija u Zadru, koji upisujem i tu dolazim u  prvi ozbiljniji doticaj sa frontendom.
                            </p>
                    </div>
                </Col>

                <Col sm={12} md={6} xl={6} id='mobile'>
                    <img id='text-img' src={image7}/>
                </Col>

                <Col sm={12} md={6} xl={6}>
                    <h3 id='openBtn'>// Ostalo</h3>

                    <div class="text">
                        <h4>Radi li Nikola jos nešto, ima li hobije?</h4>
                            <p>
                                Naravno, zaljubljenik sam u glazbu i sport. Trenirao sam dugo veslanje i sviram harmoniku. 
                                Volim pošlusati sve glazbene žanrove i pogledati svaki sport od veslanja i skijanja do rukometa 
                                i nogometa. Trenutno sviram harmoniku, idem u teretanu i vozim bicikl.
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