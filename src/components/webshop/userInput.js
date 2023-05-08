import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function UserInput() {

    const [name, setName] = useState("");
    const [adress, setAdress] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");

    const handleChange1 = (e) => {
        setName(e.target.value);
        localStorage.setItem('name', name);
    };

    const handleChange2 = (e) => {
        setAdress(e.target.value);
        localStorage.setItem('adress', adress);
    };

    const handleChange3 = (e) => {
        setMail(e.target.value);
        localStorage.setItem('mail', mail);
    };

    const handleChange4 = (e) => {
        setPhone(e.target.value);
        localStorage.setItem('phone', phone);
    };

    if (localStorage.getItem('lang') === 'hr') {
        return (
            <div className='userInput'>
                <p>Unesite svoje podatke</p>
                <input type={'text'} onChange={handleChange1} id={name} placeholder={'Ime i prezime'} />
                <input type={'text'} onChange={handleChange2} id={adress} placeholder={'Adresa'} />
                <input type={'text'} onChange={handleChange3} id={mail} placeholder={'mail'} />
                <input type={'text'} onChange={handleChange4} id={phone} placeholder={'kontakt'} />
            </div>
        )
    } else {
        return (
            <div className='userInput'>
                <p>Enter your details</p>
                <input type={'text'} onChange={handleChange1} id={name} placeholder={'Name'} />
                <input type={'text'} onChange={handleChange2} id={adress} placeholder={'Adress'} />
                <input type={'text'} onChange={handleChange3} id={mail} placeholder={'mail'} />
                <input type={'text'} onChange={handleChange4} id={phone} placeholder={'Phone'} />
            </div>
        )
    }
}
