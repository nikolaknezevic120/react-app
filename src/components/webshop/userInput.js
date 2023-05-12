import React from 'react';
import { useState } from 'react';

export default function UserInput() {

    const [name, setName] = useState("");
    const [adress, setAdress] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    localStorage.setItem('name', name);
    localStorage.setItem('adress', adress);
    localStorage.setItem('mail', mail);
    localStorage.setItem('phone', phone);

    const handleChange1 = (e) => {
        setName(e.target.value);
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
