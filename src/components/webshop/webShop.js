import React from 'react';
import { Container } from 'react-bootstrap';
import WebShopMain from './webShopMain';

import '../style/webShop/webShop.css';

export default function WebShop() {
  return (
    <Container fluid>
       <h1>Web Shop</h1>
       <WebShopMain />
     </Container> 
  )
}
