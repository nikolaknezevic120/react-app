import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/contact-and-download/body/body.css';
import ContactHr from './ContactHr';
import ContactEn from './ContactEn';
import ContactForm from './Contact-form';

export default function ContactPage() {
  const defaultLang = localStorage.getItem('lang') || 'hr';

  if (defaultLang === 'hr'){
    return (
      <Container fluid>
        <div className='contact-download-body'>
          <h3>Opcije za kontakt</h3>
          <Row>
            <Col lg={6} sm={12}>
              <ContactHr />
            </Col>
            
            <Col lg={6} sm={12}>
              <ContactForm />
            </Col>

          </Row>
        </div>
      </Container>
    )
  } else {
    return (
      <Container fluid>
        <div className='contact-download-body'>
          <h3>Contact options</h3>
          <Row>
            <Col lg={6} sm={12}>
              <ContactEn />
            </Col>
            
            <Col lg={6} sm={12}>
              <ContactForm />
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}
