import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../style/webShop/modal/modal.css';
import WebShopMain from './webShopMain';

export default function ModalOrder() {

  const date = new Date();
  const id = localStorage.getItem('orderId');
  const timezone = date.getFullYear() + '' + (date.getMonth() + 1) + '' + date.getDate() + '-' + date.getHours() + ''+ date.getMinutes() + '-'+ date.getUTCSeconds() + ''+ date.getMilliseconds() +'/'+ id;

  const order = localStorage.getItem('finishedOrder');

  if (localStorage.getItem('lang') === 'hr') {
    return (
      <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Detalji narudžbe</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
          <p>Id: {timezone}</p>
            <p>Ime: {localStorage.getItem('name')}</p>
            <p>Adresa: {localStorage.getItem('adress')}</p>
            <p>Kontakt: {localStorage.getItem('phone')}</p>
            <p>Način plaćanja: {localStorage.getItem('selectedPayMethod')}</p>
          </Modal.Body>
        </Modal.Dialog>
    )
  } else {
    return (
      <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Order details</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
          <p>Id: {timezone}</p>
            <p>Name: {localStorage.getItem('name')}</p>
            <p>Adress: {localStorage.getItem('adress')}</p>
            <p>Phone: {localStorage.getItem('phone')}</p>
            <p>Payment: {localStorage.getItem('selectedPayMethod')}</p>
          </Modal.Body>
        </Modal.Dialog>
    )
  }
}
