import React from 'react'
import { Button } from 'react-bootstrap';

export default function counter({ cntPlus, cntMinus, cnt }) {
  return (
        <div>
            <Button id='ctnBtn' onClick={cntMinus}>-</Button>
            <Button id='ctnResBtn'> {cnt} </Button>
            <Button id='ctnBtn' onClick={cntPlus}>+</Button>
        </div>
    );
}
