import React from 'react';
import { Button } from 'react-bootstrap';

export default function payMethod() {
  if (localStorage.getItem('lang') === 'hr'){
  return (
    <div className='payMethodDiv'>
      <p>Odaberite način plaćanja</p>
      <div className='choosePayMethod'>
        <input type="radio" value="Pouzece" id="payMeth" />
        <label htmlFor="regular">Pouzećem</label>
        <input type="radio" value="Kartica" id="payMeth" />
        <label htmlFor="regular">Kartica</label>
        <input type="radio" value="PayPal" id="payMeth" />
        <label htmlFor="regular">PayPal</label>
      </div>
      <div className='payMethodBtn>'>
        <Button id='finishOrder'>Zavrsi</Button>
      </div>
    </div>
  )
  } else {
    return (
      <div className='payMethodDiv'>
        <p>Choose a payment method</p>
        <div className='choosePayMethod'>
          <input type="radio" value="Pouzece" id="payMeth" />
          <label htmlFor="regular">Cash on delivery</label>
          <input type="radio" value="Kartica" id="payMeth" />
          <label htmlFor="regular">Card</label>
          <input type="radio" value="PayPal" id="payMeth" />
          <label htmlFor="regular">PayPal</label>
        </div>
        <div className='payMethodBtn>'>
          <Button id='finishOrder'>Finish order</Button>
        </div>
      </div>
    )
  }
}
