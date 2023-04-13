import React from 'react';
import cro from '../components/images/images/cro.jpg';
import eng from '../components/images/images/eng.jpg'

import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import profileImage from './images/profile-image/profile-image.png';
import './style/header/header.css';

function change(option){
    localStorage.setItem('lang', option.target.value);
    window.location.reload();
}

const defaultLang = localStorage.getItem('lang') || 'hr';

export default function header() {

    if (defaultLang === 'hr'){
        return (

            <Navbar collapseOnSelect expand="lg" id='header'>
                <Container>
      
                <Navbar.Brand id='navBar-profile-image'>
                      <img src={profileImage} alt=""
                          className="d-inline-block align-top"
                      />
                </Navbar.Brand>
      
                    <Navbar.Brand>Portfolio Nikola</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
      
                        <Nav className="me-auto">
                            <Nav.Link href="./#/index">Početna</Nav.Link>
                            <Nav.Link href="./#/about">O meni</Nav.Link>
                            <NavDropdown title="Projekti" id="collasible-nav-dropdown" >
                                <NavDropdown.Item href="./#/infinite_slider">Infinite slider</NavDropdown.Item>
                                <NavDropdown.Item href="./#/login">Follow the card</NavDropdown.Item>
                            {/*   <NavDropdown.Item href="./#/word-press">WordPress</NavDropdown.Item> */}
                            <NavDropdown.Item href ="./#/memory">Memory</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='https://github.com/nikolaknezevic120?tab=repositories' target="_blank" rel="noopener noreferrer">
                                  Ostali radovi</NavDropdown.Item>
                                <NavDropdown.Item href='./#/word-press' target="_blank" rel="noopener noreferrer">
                                  WordPress</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="./#/download-and-contact">Kontakt</Nav.Link>
                        </Nav>

                        <Button id='translateBtn' onClick={change} value={"en"}>
                            <img id='translateImage' src={eng} />
                            Translate to english
                        </Button>

                    </Navbar.Collapse>
      
                </Container>
      
            </Navbar>
      
          )
    } else {
        return (

            <Navbar collapseOnSelect expand="lg" id='header'>
                <Container>
      
                <Navbar.Brand id='navBar-profile-image'>
                      <img src={profileImage} alt=""
                          className="d-inline-block align-top"
                      />
                </Navbar.Brand>
      
                    <Navbar.Brand>Portfolio Nikola</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
      
                        <Nav className="me-auto">
                            <Nav.Link href="./#/index">Home</Nav.Link>
                            <Nav.Link href="./#/about">About Me</Nav.Link>
                            <NavDropdown title="Projects" id="collasible-nav-dropdown" >
                                <NavDropdown.Item href="./#/infinite_slider">Infinite slider</NavDropdown.Item>
                                <NavDropdown.Item href="./#/login">Follow the card</NavDropdown.Item>
                            {/*     <NavDropdown.Item href="./#/word-press">WordPress</NavDropdown.Item> */}
                            <NavDropdown.Item href ="./#/memory">Memory</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item href='https://github.com/nikolaknezevic120?tab=repositories' target="_blank" rel="noopener noreferrer">
                                  Other</NavDropdown.Item>
                                <NavDropdown.Item href='./#/word-press' target="_blank" rel="noopener noreferrer">
                                  WordPress</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="./#/download-and-contact">Contact</Nav.Link>
                        </Nav>

                        <Button id='translateBtn' onClick={change} value={"hr"}>
                            <img id='translateImage' src={cro} />
                            Prevedi na hrvatski
                        </Button>
                    </Navbar.Collapse>

                </Container>
      
            </Navbar>
      
          )
    }

}
