import React from 'react';
import { Container } from 'react-bootstrap';
import OrderPage from '../orderPage';

import '../../style/webShop/orderPage/orderPage.css';

export default function OrderPageMain() {

    const lang = localStorage.getItem('lang');

    if (lang === 'hr') {
        return (
            <Container fluid>
                <h1>Košarica</h1>
                <OrderPage />
            </Container>
        )
    } else {
        return (
            <Container fluid>
                <h1>Cart</h1>
                <OrderPage />
            </Container>
        )
    }
}
