import React from 'react';
import { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap'; 
import '../../style/follow-the-card/login/login.css';
import LoginHr from './LoginHr';
import LoginEn from './LoginEn';

export default function LogIn() {

    const defaultLang = localStorage.getItem('lang') || 'hr';

    const[userName, setUserName] = useState('');
    const[guestName, setGuestName] = useState('');
    const[guestLastName, setGuestLastName] = useState('');
    const[guestDateOfBirth, setGuestDateOfBirth] = useState('');
    const[guestMail, setGuestMail] = useState('');
    const[guestPhone, setGuestPhone] = useState('');
    const[guestPassword, setGuestPassword] = useState('');
    const[guestRePassword, setGuestRePassword] = useState('');

    if (defaultLang === 'hr'){
        return (
            <LoginHr />
        )
    } else {
        return (
            <LoginEn />
        )
    }
}
