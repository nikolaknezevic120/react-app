import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import RadioGroupFunc from './radioGroup';

export default function PayMethod() {

  const payOptions = ['Pouzeće', 'Kartica', 'PayPal'];
  const payOptionsEn = ['Cash on delivery', 'Card', 'PayPal'];
  const [selectedPayOption, setSelectedPayOption] = useState('');
  
  const handleOptionChange = (event) => {
    setSelectedPayOption(event.target.value);
    localStorage.setItem('payMethod', event.target.value);
  };

  if (localStorage.getItem('lang') === 'hr') {
    return (
      <div className='payMethodDiv'>
        <p>Odaberite način plaćanja</p>
        <div className='choosePayMethod'>
          <RadioGroupFunc
            options={payOptions}
            selectedOption={selectedPayOption}
            onChange={handleOptionChange}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className='payMethodDiv'>
        <p>Choose a payment method</p>
        <div className='choosePayMethod'>
          <RadioGroupFunc
            options={payOptionsEn}
            selectedOption={selectedPayOption}
            onChange={handleOptionChange}
          />
        </div>
      </div>
    )
  }
}
