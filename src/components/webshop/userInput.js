import React from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';

import '../style/webShop/userInput/userInput.css';

export default function UserInput() {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [adress, setAdress] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    localStorage.setItem('name', name);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('adress', adress);
    localStorage.setItem('mail', mail);
    localStorage.setItem('phone', phone);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleChange1 = (e) => {
        setLastName(e.target.value);
    };

    const handleChange2 = (e) => {
        setAdress(e.target.value);
    };

    const handleChange3 = (e) => {
        setMail(e.target.value);
    };

    const handleChange4 = (e) => {
        setPhone(e.target.value);
    };

    if (localStorage.getItem('lang') === 'hr') {
        return (
            <div className='userInput'>
                <p>Unesite svoje podatke</p>
                <Row>
                <input type={'text'} onChange={handleChange} id={'name'} placeholder={'Ime'} />
                <input type={'text'} onChange={handleChange1} id={'lastName'} placeholder={'Prezime'} />
                </Row>
                <input type={'text'} onChange={handleChange2} id={adress} placeholder={'Adresa'} />
                <input type={'text'} onChange={handleChange3} id={mail} placeholder={'e-mail'} />
                <Row>
                <PhoneInput placeholder="Kontakt" value={phone} onChange={setPhone} id={'phoneInput'}/>
                </Row>
            </div>
        )
    } else {
        return (
            <div className='userInput'>
                <p>Enter your details</p>
                <Row>
                <input type={'text'} onChange={handleChange} id={'name'} placeholder={'First name'} />
                <input type={'text'} onChange={handleChange1} id={'lastName'} placeholder={'Last name'} />
                </Row>
                <input type={'text'} onChange={handleChange2} id={adress} placeholder={'Adresss'} />
                <input type={'text'} onChange={handleChange3} id={mail} placeholder={'e-mail'} />
                <Row>
                <PhoneInput placeholder="Enter phone number" value={phone} onChange={setPhone} id={'phoneInput'}/>
                </Row>
            </div>
        )
    }
}
