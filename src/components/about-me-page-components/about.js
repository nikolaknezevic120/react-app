import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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