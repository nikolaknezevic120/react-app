import React from 'react'; 
import { Button, Row, Container, Col, Form } from 'react-bootstrap';
import { BankWrapperEn } from './bank/BankWrapperEn';
import '../../style/follow-the-card/body/body.css';

const UserDetails = {
    name: 'Nikola',
    lastName: 'Knežević',
    birth: '05.10.1996.',
    mail: 'nikola120k@gmail.com',
    phone: '095 840 91 08'
}

export default function BodyEn() {
  return (
    <Container fluid>
        <div className='body'>
            <Row>
                <Col lg={6} sm={12}>
                    <h1>User details</h1>

                    <div className='profile-image'>
                    </div>

                    <>
                        <Form.Group className="mb-3">
                            <Form.Label id='detail-fix-label'>Username</Form.Label>
                            <Form.Control id='detail-label' value={localStorage.getItem('userName') } disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label id='detail-fix-label'>Name</Form.Label>
                            <Form.Control id='detail-label' value={localStorage.getItem('guestName') || UserDetails.name} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label id='detail-fix-label'>Surname</Form.Label>
                            <Form.Control id='detail-label' value={localStorage.getItem('guestLastName') || UserDetails.lastName} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label id='detail-fix-label'>Date of birth</Form.Label>
                            <Form.Control id='detail-label' value={localStorage.getItem('guestDateOfBirth') || UserDetails.birth} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label id='detail-fix-label'>e-mail</Form.Label>
                            <Form.Control id='detail-label' value={localStorage.getItem('guestMail') || UserDetails.mail} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label id='detail-fix-label'>Phone number</Form.Label>
                            <Form.Control id='detail-label' value={localStorage.getItem('guestPhone') || UserDetails.phone} disabled />
                        </Form.Group>

                        <Button onClick={() => { 
                            localStorage.clear(); 
                            window.location.href="#/login";
                            }}
                            className="btn btn-danger" id='btn-prim-log-card'>Log out
                        </Button>
                        
                    </>

                </Col>
                
                <Col lg={6} sm={12}>
                    <h3>Card list</h3>
                    <BankWrapperEn />
                </Col>
            </Row>            
        </div>
    </Container>
  )
}