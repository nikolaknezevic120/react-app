import React from 'react';
import { useState } from 'react';
import image1 from '../../images/images/amfora.png';

export default function Wppost4() {
  const [openShort, setOpenShort] =useState(false);

  return (
    <div>
        <h1>
          <a href='https://gerilla-test.site/anforanovo/' target="_blank" rel="noopener noreferrer">
            Amfora Murter
          </a>
        </h1>
        
        <a href="https://gerilla-test.site/anforanovo/" target="_blank" rel="noreferrer"> <img className='img-fluid shadow-4' id="wp-image"
        src={image1} alt="First slide" fluid/></a>

        <button id='openBtn' onClick={() => setOpenShort(!openShort)}><h3 id='h3-wp'>Što sam radio</h3></button>

        {openShort && <div class="text">
          <p>
          Na ovvom projektu sam radio većinu stvari, osim filtera za pretragu (njega sam samo uređivao u css-u po naputcima). Budući 
          da je ovo testni projekt slike su dosta loše i nije posvećena prevelika pozornost tekstu (što i gdje piše nego je bitno 
          bilo samo da piše) nego sam više gledao da elementi budu vizualno ok, da galerije funkcioniraju dobro… Stvar koju bi ja 
          promijenio je ta da slike na naslovnoj na kojima piše najam, smještaj i izleti imaju poveznice i na klik da vode na 
          stranice gdje za izlete, najam i smještaj.
          </p>
        </div>}
    </div>
  )
}
