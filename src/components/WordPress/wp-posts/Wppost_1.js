import React from 'react';
import { useState } from 'react';
import image1 from '../../images/images/ivandic.png';

export default function Wppost1() {

  const [openShort, setOpenShort] =useState(false);

  return (
    <div>
        <h1>
          <a href='https://instalacije-ivandic.hr/' target="_blank" rel="noopener noreferrer">
            Instalacije Ivandić
          </a>
        </h1>

        <a href="https://instalacije-ivandic.hr/" target="_blank" rel="noreferrer"> <img className='img-fluid shadow-4' id="wp-image" 
        src={image1} alt="First slide" fluid/></a>

        <button id='openBtn' onClick={() => setOpenShort(!openShort)}><h3 id='h3-wp'>Što sam radio</h3></button>

        {openShort && <div class="text">
          <p>
          Na ovom projektu sam dodavao i uređivao elemente po naputku dizajnera, 
          dodavao slike, tekstove i ikone, uređivao stil buttona. Na mobilnoj verziji sam uređivao menu.
          </p>
        </div>}
    </div>
  )
}
