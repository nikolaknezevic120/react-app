import React from 'react';
import '../style/about-me/about_me.css';
import AboutHr from './aboutHr';
import AboutEn from './aboutEn';

export default function About() {

    const defaultLang = localStorage.getItem('lang') || 'hr';
    
    if (defaultLang === 'hr'){
        return(
            <AboutHr />
        )
    } else {
        return(
            <AboutEn />
        )
    }
}