import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/about-me/about_me.css';

export default function AboutHr() {

    const [openShort, setOpenShort] =useState(false);
    const [openSchool, setOpenSchool] = useState(false);
    const [openOther, setOpenOther] = useState(false);

  return (
    <Container fluid>
        <div id='first-page-body'>

            <div id="about-me-title">
                <h3>O meni</h3> 
            </div>
              
              <Row>
                      <Col sm={12} md={6} xl={4}>

                          <button id='openBtn' onClick={() => setOpenShort(!openShort)}><h3>Ukratko</h3></button>

                          {openShort && <div class="text">
                              <h4>Tko je Nikola?</h4>

                              <p>
                                  Ukratko, ja sam mlada osoba koja se zainteresirala u frontend development nakon prvog kontakta 
                                  sa frontendom. Za sebe smatram kako posjedujem potencijal i volju za napredak.
                              </p>

                              <h4>Koja su moja iskustva do sada</h4>
                              <p>
                                  Do nedavno sam radio isključivo obaveze i zadatke koje sam morao raditi na fakultetu, 
                                  te kad sam dobio više slobodnog vremena počeo sam više istraživati i posvećivati se 
                                  isključivo frontendu.
                              </p>
                          </div>}

                          {openShort && <button id='openBtn' onClick={() => setOpenShort(!openShort)}><h4>Zatvori</h4></button>}
                      </Col>

                      <Col sm={12} md={6} xl={4}>

                          <button id='openBtn' onClick={() => setOpenSchool(!openSchool)}><h3>Školovanje</h3></button>

                          {openSchool && <div class="text">
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
                          </div>}

                          {openSchool && <button id='openBtn' onClick={() => setOpenSchool(!openSchool)}><h4>Zatvori</h4></button>}

                      </Col>

                      <Col sm={12} md={6} xl={4}>

                          <button id='openBtn' onClick={() => setOpenOther(!openOther)}><h3>Ostalo</h3></button>

                          {openOther && <div class="text">
                              <h4>Radi li Nikola jos nešto, ima li hobije?</h4>

                              <p>
                                  Naravno, ja sam zaljubeljenik u glazbu i sport. Trenirao sam dugo veslanje i sviram harmoniku. 
                                  Volim pošlusati sve glazbene žanrove i pogledati svaki sport od veslanja i skijanja do rukometa 
                                  i nogometa. Trenutno sviram harmoniku, idem u teretanu i vozim bicikl.
                              </p>
                          </div>}

                          {openOther && <button id='openBtn' onClick={() => setOpenOther(!openOther)}><h4>Zatvori</h4></button>}
                          
                      </Col>
                  </Row>
    </div>
    </Container>
  )
}