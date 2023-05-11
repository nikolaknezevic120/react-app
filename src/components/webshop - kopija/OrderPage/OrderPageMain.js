import React from 'react';
import { Container } from 'react-bootstrap';
import OrderPage from '../orderPage';

export default function OrderPageMain() {

    const lang = localStorage.getItem('lang');
    if (lang === 'hr') {
        return (
            <Container fluid>
                <h1>Naslov</h1>
                <OrderPage />
            </Container>
        )
    } else {
        return (
            <Container fluid>
                <h1>Title</h1>
                <OrderPage />
            </Container>
        )
    }
}
