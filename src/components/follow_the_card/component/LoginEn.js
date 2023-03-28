import React from 'react';
import { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap'; 
import '../../style/follow-the-card/login/login.css';
import checkGuestInput from './CheckGuestInput';
import checkLogIn from './CheckLogIn';

export default function LoginEn(){

    const[userName, setUserName] = useState('');
    const[guestName, setGuestName] = useState('');
    const[guestLastName, setGuestLastName] = useState('');
    const[guestDateOfBirth, setGuestDateOfBirth] = useState('');
    const[guestMail, setGuestMail] = useState('');
    const[guestPhone, setGuestPhone] = useState('');
    const[guestPassword, setGuestPassword] = useState('');
    const[guestRePassword, setGuestRePassword] = useState('');

    return(
        
        <Container fluid>
            <div className='body'>
                <Row>
                    <Col lg={12} sm={12}>
                        <h2>Welcome to web page Follow the Card.</h2>
                        <h2>Check and edit your card information with us at any time!</h2>
                    </Col>
                </Row>

                <div className='log-in-sign-up'>
                    <Row>
                        <Col lg={6} sm={12}>
                            <div className='sign-in-account'>

                                <h3 id='log-sign-in'>Log in</h3>
                                <input type={'text'} placeholder={'User Name'} onChange={(event) => {
                                    setUserName(event.target.value)
                                }}/> <br /> <br />
                                <input type={'password'} placeholder={'Password'} /> <br /> <br />
                                <button id='btn-prim-log' className="btn btn-primary" onClick={() => {
                                    localStorage.clear();
                                    localStorage.setItem('userName', userName ); 
                                    checkLogIn();
                                }}
                                >Log in</button>

                                
                            </div>
                        </Col>

                        <Col lg={6} sm={12}>
                            <div className='new-account'>
                                    <h3 id='log-sign-in'>Create new account</h3>
                                <div className='new-acc-input'>
                                    <input type={'text'} id={'guestUserNameId'} placeholder={'User Name'} onChange={(event) => {
                                        setUserName(event.target.value)
                                    }}/> <br /> <br />
                                    <input type={'password'} placeholder={'Password'} onChange={(event) => {
                                        setGuestPassword(event.target.value)
                                    }} /> <br /> <br />
                                    <input type={'password'} placeholder={'Retype password'} onChange={(event) => {
                                        setGuestRePassword(event.target.value)
                                    }} /> <br /> <br />
                                    <input type={'text'} placeholder={'Your Name'} onChange={(event) => {
                                        setGuestName(event.target.value)
                                    }}/> <br /> <br />
                                    <input type={'text'} placeholder={'Your Last Name'} onChange={(event) => {
                                        setGuestLastName(event.target.value)
                                    }}/> <br /> <br />
                                    <input type={'text'} placeholder={'Your date of birth'} onChange={(event) => {
                                        setGuestDateOfBirth(event.target.value)
                                    }}/> <br /> <br />
                                    <input type={'text'} placeholder={'Your mail'} onChange={(event) => {
                                        setGuestMail(event.target.value)
                                    }}/> <br /> <br /><input type={'text'} placeholder={'Your phone'} onChange={(event) => {
                                        setGuestPhone(event.target.value)
                                    }}/> <br /> <br />
                                    <button id='btn-prim-log' className="btn btn-primary" onClick={() => {
                                        localStorage.setItem('userName', userName ); 
                                        localStorage.setItem('guestName', guestName );
                                        localStorage.setItem('guestLastName', guestLastName);
                                        localStorage.setItem('guestDateOfBirth', guestDateOfBirth ); 
                                        localStorage.setItem('guestMail', guestMail );
                                        localStorage.setItem('guestPhone', guestPhone);
                                        localStorage.setItem('guestPassword', guestPassword);
                                        localStorage.setItem('guestRePassword', guestRePassword)
                                        checkGuestInput();
                                        }}
                                    >Create and log in</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}