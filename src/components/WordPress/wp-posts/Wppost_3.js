import React from 'react';
import { useState } from 'react';
import image1 from '../../images/images/aquarius.png';

export default function Wppost3() {
  const [openShort, setOpenShort] =useState(false);

  return (
    <div>
        <h1>
          <a href='https://gerilla-test.site/aquariusnovo/' target="_blank" rel="noopener noreferrer">
            Aquarius Agencija- Zadar
          </a>
        </h1>
        
        <a href="https://gerilla-test.site/aquariusnovo/" target="_blank" rel="noreferrer"> <img className='img-fluid shadow-4' id="wp-image" 
        src={image1} alt="First slide" fluid/></a>

        <button id='openBtn' onClick={() => setOpenShort(!openShort)}><h3 id='h3-wp'>Što sam radio</h3></button>

        {openShort && <div class="text">
          <p>
            Na ovom projektu dodavao sam samo izlete i detalje o njima.
            Uređivao sam i dodavao elemente na početnoj stranici i Contact Us.
          </p>
        </div>}
    </div>
  )
}
