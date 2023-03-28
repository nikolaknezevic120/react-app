import React from 'react'; 
import { Button, Row, Container, Col, Form } from 'react-bootstrap';
import { BankWrapper } from './bank/BankWrapper';
import '../../style/follow-the-card/body/body.css';

const UserDetails = {
    name: 'Nikola',
    lastName: 'Knežević',
    birth: '05.10.1996.',
    mail: 'nikola120k@gmail.com',
    phone: '095 840 91 08'
}

export default function Body() {

  return (

    <Container fluid>
        <div className='body'>
            <Row>
                <Col lg={6} sm={12}>
                    <h1>Podatci o korisniku</h1>

                    <div className='profile-image'>
                    </div>

                    <>
                        <Form.Group className="mb-3">
                            <Form.Label id='detail-fix-label'>Korisničko ime</Form.Label>
                            <Form.Control id='detail-label' value={localStorage.getItem('userName') } disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label id='detail-fix-label'>Ime</Form.Label>
                            <Form.Control id='detail-label' value={localStorage.getItem('guestName') || UserDetails.name} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label id='detail-fix-label'>Prezime</Form.Label>
                            <Form.Control id='detail-label' value={localStorage.getItem('guestLastName') || UserDetails.lastName} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label id='detail-fix-label'>Datum rodenja</Form.Label>
                            <Form.Control id='detail-label' value={localStorage.getItem('guestDateOfBirth') || UserDetails.birth} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label id='detail-fix-label'>e-mail</Form.Label>
                            <Form.Control id='detail-label' value={localStorage.getItem('guestMail') || UserDetails.mail} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label id='detail-fix-label'>Mobitel</Form.Label>
                            <Form.Control id='detail-label' value={localStorage.getItem('guestPhone') || UserDetails.phone} disabled />
                        </Form.Group>

                        <Button onClick={() => { 
                            localStorage.clear(); 
                            window.location.href="#/login";
                            }}
                            className="btn btn-danger" id='btn-prim-log-card'>Odjavi se
                        </Button>
                        
                    </>

                </Col>
                
                <Col lg={6} sm={12}>
                    <h3>Lista kartica</h3>
                    <BankWrapper />
                </Col>
            </Row>            
        </div>
    </Container>
  )
}
