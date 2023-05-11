import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import UserInput from './userInput';
import ModalOrder from './modal';
import PayMethod from './payMethod';

export default function OrderPage() {
    
    return (
        <Container fluid>
            <Row>
            <Col xl={4} xs={12}>
                <UserInput />
            </Col>
            <Col xl={4} xs={12}>
                <PayMethod />
            </Col>
            <Col xl={4} xs={12}>
                <ModalOrder />
            </Col>
            </Row>
        </Container>
    )
}
