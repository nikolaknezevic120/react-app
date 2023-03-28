import React from 'react';
import '../style/WordPress/wordpress.css';
import { Container, Row, Col } from 'react-bootstrap';
import WordPressTitle from './WordPress_title';
import Wppost1 from './wp-posts/Wppost_1';
import Wppost2 from './wp-posts/Wppost_2';
import Wppost3 from './wp-posts/Wppost_3';
import Wppost4 from './wp-posts/Wppost_4';

export default function WordPress_Page() {
  return(
    <Container>
      <WordPressTitle />

      <div className='wp-body'>
        <Row>
          <Col sm={6}>
            <Wppost1 />
          </Col>

          <Col sm={6}>
            <Wppost2 />
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Wppost3 />
          </Col>

          <Col sm={6}>
            <Wppost4 />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

