import React from 'react';
import { Button } from 'react-bootstrap';
import '../../style/webShop/nextPage/nextPage.css';

export default function nextPage() {
    if (localStorage.getItem('lang') === 'hr') {
        return (
            <div className='nextPageDiv'>
                <h1>Hvala na kupnji!</h1>
                <h3>
                    Narudžba je zaprimljena, u najkraćem roku biti će posalan na Vašu adresu!
                </h3>
                <div className='buttons'>
                    <Button id='btnOne' role='nextPageBtn' href='./#/index'>Početna</Button>
                    <Button id='btnTwo' role='nextPageBtn' href='./#/webShop'>WebShop</Button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='nextPageDiv'>
                <h1>Thank you for your purchase!</h1>
                <h3>
                    The order has been received, it will be sent to your address as soon as possible!
                </h3>
                <div className='buttons'>
                    <Button id='btnOne' role='nextPageBtn' href='./#/index'>Home</Button>
                    <Button id='btnTwo' role='nextPageBtn' href='./#/webShop'>WebShop</Button>
                </div>
            </div>
        )
    }
}
