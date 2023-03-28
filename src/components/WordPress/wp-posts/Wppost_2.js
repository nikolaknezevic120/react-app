import React from 'react';
import { useState } from 'react';
import image1 from '../../images/images/dolcevita.png';

export default function Wppost2() {
  const [openShort, setOpenShort] =useState(false);

  return (
    <div>
        <h1>
          <a href='https://gerilla-test.site/gerilla11/' target="_blank" rel="noopener noreferrer">
            Dolce Vita Apartments
          </a>
        </h1>
        
        <a href="https://gerilla-test.site/gerilla11/" target="_blank" rel="noreferrer"> <img className='img-fluid shadow-4' id="wp-image" 
        src={image1} alt="First slide" fluid/></a>

        <button id='openBtn' onClick={() => setOpenShort(!openShort)}><h3 id='h3-wp'>Što sam radio</h3></button>

        {openShort && <div class="text">
          <p>
          Na ovom projektu sam radio skoro sve, osim polja u kojem trenutno piše 'THE BEST ONLINE PRICES' tu bi trebao doći kalendar raspoloživosti kojeg bi trebala druga osoba napraviti i koji se trenutno čeka. 
          Na mobilnoj verziji sada vidim da je netko dirao hamburger menu jer je bio ljepše napravljen, slova su bila centrirana i veća.
          </p>
        </div>}
    </div>
  )
}
