import React from 'react';
import '../../style/follow-the-card/login/login.css';
import LoginHr from './LoginHr';
import LoginEn from './LoginEn';

export default function LogIn() {

    const defaultLang = localStorage.getItem('lang') || 'hr';

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
