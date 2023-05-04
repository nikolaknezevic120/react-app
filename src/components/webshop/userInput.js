import React from 'react';
import { Button } from 'react-bootstrap';

export default function userInput() {
    if (localStorage.getItem('lang') === 'hr') {
        return (
            <div className='userInput'>
                <p>Unesite svoje podatke</p>
                <input type={'text'} placeholder={'Ime i prezime'} />
                <input type={'text'} placeholder={'Adresa'} />
                <input type={'text'} placeholder={'mail'} />
                <input type={'text'} placeholder={'kontakt'} />
            </div>
        )
    } else {
        return (
            <div className='userInput'>
                <p>Enter your details</p>
                <input type={'text'} placeholder={'Name'} />
                <input type={'text'} placeholder={'Adress'} />
                <input type={'text'} placeholder={'mail'} />
                <input type={'text'} placeholder={'Phone'} />
            </div>
        )
    }
}
