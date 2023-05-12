import React, { useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import UserInput from './userInput';
import ModalOrder from './modal';
import PayMethod from './payMethod';
import ConfirmOrder from './confirmOrder';
import CheckCart from './checkCart';
import NextPage from './OrderPage/nextPage';

export default function OrderPage() {

    const [loadedPage, setLoadedPage] = useState(true);
    const [chooseMethod, setChooseMethod] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [nextPage, setNextPage] = useState(false);

    const continueOrder = () => {
        if (localStorage.getItem('name') == '' || localStorage.getItem('adress') == ''
            || localStorage.getItem('mail') == '' || localStorage.getItem('phone') == '') {
            alert('Nisu uneseni svi podaci! \n\n not all data has been entered');
        } else {
            setChooseMethod(true);
        }
    }

    const finishOrder = () => {
        if (localStorage.getItem('selectedPayMethod') == '') {
            alert('Nije odabrana metoda plaćanja \n\n No payment method was selected');
        } else {
            setShowModal(true);
            setLoadedPage(false);
            setChooseMethod(false);
        }
    }

    const overOrder = () => {
        setAnimation(true);
        setShowModal(false);
        setTimeout(() => {
            setAnimation(false);
            setNextPage(true);
        }, 3000);
    }

    if (localStorage.getItem('lang') === 'hr') {
        return (
            <Container fluid>
                <Row>
                    {loadedPage ? <Col xl={4} xs={12}>
                        <CheckCart />
                    </Col>
                        : null}
                    {loadedPage ? <Col xl={4} xs={12}>
                        <UserInput />
                        <Button id='confOderPageBtn' onClick={continueOrder}>Nastavi</Button>
                    </Col>
                        : null}
                    {chooseMethod ? <Col xl={4} xs={12}>
                        <PayMethod />
                        <Button id='confPayBtn' onClick={finishOrder}>Završi</Button>
                    </Col>
                        : null}
                </Row>
                {showModal ? <ModalOrder /> : null}
                {showModal ? <Button variant="primary" id='confirmOrderButton' onClick={overOrder}>Potvrdi</Button> : null}
                {animation ? <ConfirmOrder /> : null}
                {nextPage ? <NextPage /> : null}
            </Container>
        )
    } else {
        return (
            <Container fluid>
                <Row>
                    {loadedPage ? <Col xl={4} xs={12}>
                        <CheckCart />
                    </Col>
                        : null}
                    {loadedPage ? <Col xl={4} xs={12}>
                        <UserInput />
                        <Button id='confOderPageBtn' onClick={continueOrder}>Continue</Button>
                    </Col> : null}
                    {chooseMethod ? <Col xl={4} xs={12}>
                        <PayMethod />
                        <Button id='confPayBtn' onClick={finishOrder}>Finish</Button>
                    </Col>
                        : null}
                </Row>
                {showModal ? <ModalOrder /> : null}
                {showModal ? <Button variant="primary" id='confirmOrderButton' onClick={overOrder}>Confirm order</Button> : null}
                {animation ? <ConfirmOrder /> : null}
                {nextPage ? <NextPage /> : null}
            </Container>
        )
    }
}
