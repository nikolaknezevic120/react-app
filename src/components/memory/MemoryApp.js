import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../components/style/memory/memoryPage.css';

import sliderImage1 from '../images/infinite-slider-images/slider-images/slider-image-1.png';
import sliderImage2 from '../images/infinite-slider-images/slider-images/slider-image-2.png';
import sliderImage3 from '../images/infinite-slider-images/slider-images/slider-image-3.png';
import sliderImage4 from '../images/Smash-resized/slimg8.jpg';
import sliderImage5 from '../images/infinite-slider-images/slider-images/slider-image-5.png';
import sliderImage6 from '../images/Smash-resized/slimg10.jpg';
import sliderImage7 from '../images/Smash-resized/slimg9.jpg';
import sliderImage8 from '../images/Smash-resized/slimg1.jpg';
import sliderImage9 from '../images/infinite-slider-images/slider-images/slider-image-9.png';

const initImages= [ 
  { img: sliderImage1, id: 1, test: 'test1'},
  { img: sliderImage1, id: 9, test: 'test1'},
  { img: sliderImage2, id: 2, test: 'test2'},
  { img: sliderImage2, id: 10, test: 'test2'},
  { img: sliderImage3, id: 3, test: 'test3'},
  { img: sliderImage3, id: 11, test: 'test3'},
  { img: sliderImage4, id: 4, test: 'test4'},
  { img: sliderImage4, id: 12, test: 'test4'},
  { img: sliderImage5, id: 5, test: 'test5'},
  { img: sliderImage5, id: 13, test: 'test5'},
  { img: sliderImage6, id: 6, test: 'test6'},
  { img: sliderImage6, id: 14, test: 'test6'},
  { img: sliderImage7, id: 7, test: 'test7'},
  { img: sliderImage7, id: 15, test: 'test7'},
  { img: sliderImage8, id: 8, test: 'test8'},
  { img: sliderImage8, id: 16, test: 'test8'},
]

const images = [...initImages.sort(() => Math.random() - 0.5)];

export default function MemoryApp() {

  const [selectedDiv, setSelectedDiv] = useState(null);
  const [selectedDiv1, setSelectedDiv1] = useState(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [states] = useState(Array(16).fill(false));
  const [fliped, setFliped] = useState([]);
  const [openImg, setOpenImg] = useState([]);
  const [pairs, setPairs] = useState(0);
  const [attempt, setAttempt] = useState(0);

  const res = pairs/attempt;
  const btnClick = (event) =>{
    window.location.reload(false);
    console.log("clicked");
  }

  const handleClick = (event) => {
    const clickedImageDiv = document.getElementById(event.target.id).parentNode;
    const clickedImageDivId = event.target.parentNode.id;

    const newFlipped = [...fliped, event.target.id];
    const newOpenImg = [...openImg, clickedImageDivId];

    setSelectedDiv(event.target.id);

    clickedImageDiv.classList.add('animate');

    setFliped(newFlipped);
    setOpenImg(newOpenImg);

    if(newFlipped.length < 2){
      setSelectedDiv1(event.target.id);

      setFliped(newFlipped, event.target.id);

      const indexInt = parseInt(newFlipped[0]);
      states[indexInt] = true;
    }
    else if (newFlipped.length === 2){
      setFliped(newFlipped, event.target.id);
      
      setIsEnabled(false);

      const indexInt = parseInt(newFlipped[1]);
      states[indexInt] = true;

      if(newOpenImg[0] === newOpenImg[1]){
        setPairs(pairs + 1);
        setAttempt(attempt + 1);

        clickedImageDiv.classList.remove('animate');
        setFliped([]);
        setOpenImg([]);
        
        setIsEnabled(true);
        if(pairs == 7){
          setGameOver(true);
        }
      } else {
        const indexInt1 = parseInt(newFlipped[0]);
        states[indexInt1] = false;
        const indexInt2 = parseInt(newFlipped[1]);
        states[indexInt2] = false;

        setAttempt(attempt + 1);

        setTimeout(() => {
          setFliped([]);
          clickedImageDiv.classList.remove('animate');
          setSelectedDiv(null);
          setSelectedDiv1(null);
          setOpenImg([]);
          setIsEnabled(true);
        }, 3500);
      }
    }
  }

  const defaultLang = localStorage.getItem('lang') || 'hr';
    
  if (defaultLang === 'hr'){
    return (
      <Container fluid>
        
        <div className='mainTitle'>
          <h1>Nikola Memory App</h1>
        </div>
    
        <Row>
          <Col xs={12} md={6}>
            <div className='playingField'>
              <div className={isEnabled ? "image-row" : "image-row-clicked"} >
                <div className={ states[0] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[0].test}><img id='0' src={states[0] === true || selectedDiv === "0" || selectedDiv1 === "0" ? initImages[0].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[1] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[1].test}><img id='1' src={states[1] === true || selectedDiv === "1" || selectedDiv1 === "1" ? initImages[1].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[2] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[2].test}><img id='2' src={states[2] === true || selectedDiv === "2" || selectedDiv1 === "2" ? initImages[2].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[3] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[3].test}><img id='3' src={states[3] === true || selectedDiv === "3" || selectedDiv1 === "3" ? initImages[3].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[4] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[4].test}><img id='4' src={states[4] === true || selectedDiv === "4" || selectedDiv1 === "4" ? initImages[4].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[5] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[5].test}><img id='5' src={states[5] === true || selectedDiv === "5" || selectedDiv1 === "5" ? initImages[5].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[6] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[6].test}><img id='6' src={states[6] === true || selectedDiv === "6" || selectedDiv1 === "6" ? initImages[6].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[7] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[7].test}><img id='7' src={states[7] === true || selectedDiv === "7" || selectedDiv1 === "7" ? initImages[7].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[8] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[8].test}><img id='8' src={states[8] === true || selectedDiv === "8" || selectedDiv1 === "8" ? initImages[8].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[9] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[9].test}><img id='9' src={states[9] === true || selectedDiv === "9" || selectedDiv1 === "9" ? initImages[9].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[10] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[10].test}><img id='10' src={states[10] === true || selectedDiv === "10" || selectedDiv1 === "10" ? initImages[10].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[11] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[11].test}><img id='11' src={states[11] === true || selectedDiv === "11" || selectedDiv1 === "11" ? initImages[11].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[12] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[12].test}><img id='12' src={states[12] === true || selectedDiv === "12" || selectedDiv1 === "12" ? initImages[12].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[13] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[13].test}><img id='13' src={states[13] === true || selectedDiv === "13" || selectedDiv1 === "13" ? initImages[13].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[14] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[14].test}><img id='14' src={states[14] === true || selectedDiv === "14" || selectedDiv1 === "14" ? initImages[14].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[15] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[15].test}><img id='15' src={states[15] === true || selectedDiv === "15" || selectedDiv1 === "15" ? initImages[15].img : sliderImage9} onClick={handleClick}/></div>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className='resultArea'>
              <div className='title'>
                <h3>REZULTAT</h3>
              </div>
              
              <div className='results'>
                <p>Broj pokusaja: {attempt}<br />Pogodjeni parovi: {pairs}/8<br />Postotak: {res.toFixed(2)}%</p>
              </div>
              
              <div className={gameOver ? 'hiddenDisplayAnimation' : 'displayAnimation'}>
                <section className="animation">
                  <div className="first"><div>Hvala Vam na igranju!!!</div></div>
                  <div className="second"><div>SRETNO</div></div>
                  <div className="third"><div>!!!</div></div>
                </section>
              </div>

              <div className={gameOver ? 'displayAnimation' : 'hiddenDisplayAnimation'}>
                <section className="animation">
                  <div className="first"><div>Pobjedili ste!!!</div></div>
                  <div className="second"><div>Cestitam</div></div>
                  <div className="third"><div>!!!</div></div>
                </section>`
              </div>
            </div>

            <Button className={gameOver ? 'ngbtn' : 'hiddenngbtn'}onClick={btnClick}>NOVA IGRA</Button>
          </Col>
        </Row>

      </Container>
    )
  } else {
    return (
      <Container fluid>
        
        <div className='mainTitle'>
          <h1>Nikola Memory App</h1>
        </div>
    
        <Row>
          <Col xs={12} md={6}>
            <div className='playingField'>
              <div className={isEnabled ? "image-row" : "image-row-clicked"} >
                <div className={ states[0] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[0].test}><img id='0' src={states[0] === true || selectedDiv === "0" || selectedDiv1 === "0" ? initImages[0].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[1] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[1].test}><img id='1' src={states[1] === true || selectedDiv === "1" || selectedDiv1 === "1" ? initImages[1].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[2] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[2].test}><img id='2' src={states[2] === true || selectedDiv === "2" || selectedDiv1 === "2" ? initImages[2].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[3] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[3].test}><img id='3' src={states[3] === true || selectedDiv === "3" || selectedDiv1 === "3" ? initImages[3].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[4] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[4].test}><img id='4' src={states[4] === true || selectedDiv === "4" || selectedDiv1 === "4" ? initImages[4].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[5] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[5].test}><img id='5' src={states[5] === true || selectedDiv === "5" || selectedDiv1 === "5" ? initImages[5].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[6] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[6].test}><img id='6' src={states[6] === true || selectedDiv === "6" || selectedDiv1 === "6" ? initImages[6].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[7] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[7].test}><img id='7' src={states[7] === true || selectedDiv === "7" || selectedDiv1 === "7" ? initImages[7].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[8] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[8].test}><img id='8' src={states[8] === true || selectedDiv === "8" || selectedDiv1 === "8" ? initImages[8].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[9] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[9].test}><img id='9' src={states[9] === true || selectedDiv === "9" || selectedDiv1 === "9" ? initImages[9].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[10] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[10].test}><img id='10' src={states[10] === true || selectedDiv === "10" || selectedDiv1 === "10" ? initImages[10].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[11] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[11].test}><img id='11' src={states[11] === true || selectedDiv === "11" || selectedDiv1 === "11" ? initImages[11].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[12] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[12].test}><img id='12' src={states[12] === true || selectedDiv === "12" || selectedDiv1 === "12" ? initImages[12].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[13] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[13].test}><img id='13' src={states[13] === true || selectedDiv === "13" || selectedDiv1 === "13" ? initImages[13].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[14] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[14].test}><img id='14' src={states[14] === true || selectedDiv === "14" || selectedDiv1 === "14" ? initImages[14].img : sliderImage9} onClick={handleClick}/></div>
                <div className={ states[15] === true ? 'imageDivClsDisabled' : 'imageDivCls'} id={initImages[15].test}><img id='15' src={states[15] === true || selectedDiv === "15" || selectedDiv1 === "15" ? initImages[15].img : sliderImage9} onClick={handleClick}/></div>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className='resultArea'>
              <div className='title'>
                <h3>RESULT</h3>
              </div>
              
              <div className='results'>
                <p>Attempts: {attempt}<br />Detected pairs: {pairs}/8<br />Success rate: {res.toFixed(2)}%</p>
              </div>
              
              <div className={gameOver ? 'hiddenDisplayAnimation' : 'displayAnimation'}>
                <section className="animation">
                  <div className="first"><div>Thank you for playing!!!</div></div>
                  <div className="second"><div>GOOD LUCK</div></div>
                  <div className="third"><div>!!!</div></div>
                </section>
              </div>

              <div className={gameOver ? 'displayAnimation' : 'hiddenDisplayAnimation'}>
                <section className="animation">
                  <div className="first"><div>You win!!!</div></div>
                  <div className="second"><div>Congratulations</div></div>
                  <div className="third"><div>!!!</div></div>
                </section>`
              </div>
            </div>

            <Button className={gameOver ? 'ngbtn' : 'hiddenngbtn'}onClick={btnClick}>NEW GAME</Button>
          </Col>
        </Row>

      </Container>
    )
  }
}