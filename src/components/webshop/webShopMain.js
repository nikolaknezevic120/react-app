import React from 'react';
import { useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import RadioGroupFunc from './radioGroup';
import Counter from './counter';
import UserInput from './userInput';
import PayMethod from './payMethod';
import ModalOrder from './modal';

import img1 from '../images/webShopImg/hajduk1.jpg';
import img2 from '../images/webShopImg/hajduk2.png'
import img3 from '../images/webShopImg/hajduk3.jpeg';
import img4 from '../images/webShopImg/hajduk4.jpeg';
import img5 from '../images/webShopImg/hajduk5.jpeg';
import img6 from '../images/webShopImg/hajduk6.jpeg';
import cartImg from '../images/images/shopping-cart.png';

import '../style/webShop/webShop.css'

export default function WebShopMain() {

  const [text, setText] = useState('');
  const [orderId, setOrderId] = useState(1);
  const orderIdLocalStorage = localStorage.setItem('orderId', orderId);
  const [finishedOrder, setFinishedOrder] = useState('');
  const finishedOrderLocalStorafe = localStorage.setItem('finishedOrder', finishedOrder);

  const itemOrder = ' domaći dres\nveličina: ';
  const item1order = ' gostujući dres\nveličina: ';
  const item2order = ' treći dres\nveličina: ';
  const item3order = ' jastuk\n';
  const item4order = ' šalica\n';
  const item5order = ' upaljač\n';

  const [showContinueOrder, setShowContinueOrder] = useState(false);
  const [finishOrder, setFinishOrder] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const price = 50.00.toFixed(2);
  const price1 = 45.68
  const price2 = 42.75;
  const price3 = 14.55;
  const price4 = 13.65;
  const price5 = 28.85;
  const convertValute = 7.53450;
  const priceHr = price * convertValute;
  const priceHr1 = price1 * convertValute;
  const priceHr2 = price2 * convertValute;
  const priceHr3 = price3 * convertValute;
  const priceHr4 = price4 * convertValute;
  const priceHr5 = price5 * convertValute;
  const [sum, setSum] = useState(0);
  const [orderedNum, setOrderedNum] = useState(0);

  const [showOrder, setShowOrder] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  const [selectedOption, setSelectedOption] = useState('XS');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = ['XS', 'S', 'M', 'L', 'XL'];

  const [num, setNum] = useState(0);
  const plusNum = (event) => {
    setNum(num => num + 1);
  };
  const minusNum = (event) => {
    if (num == 0) {
      setNum(0)
    } else {
      setNum(num => num - 1);
    }
  };

  const [num1, setNum1] = useState(0);
  const plusNum1 = (event) => {
    setNum1(num1 => num1 + 1);
  };
  const minusNum1 = (event) => {
    if (num1 == 0) {
      setNum1(0)
    } else {
      setNum1(num1 => num1 - 1);
    }
  };

  const [num2, setNum2] = useState(0);
  const plusNum2 = (event) => {
    setNum2(num2 => num2 + 1);
  };
  const minusNum2 = (event) => {
    if (num2 == 0) {
      setNum(0)
    } else {
      setNum2(num2 => num2 - 1);
    }
  };

  const [num3, setNum3] = useState(0);
  const plusNum3 = (event) => {
    setNum3(num3 => num3 + 1);
  };
  const minusNum3 = (event) => {
    if (num3 == 0) {
      setNum3(0)
    } else {
      setNum3(num3 => num3 - 1);
    }
  };
  const [num4, setNum4] = useState(0);
  const plusNum4 = (event) => {
    setNum4(num4 => num4 + 1);
  };
  const minusNum4 = (event) => {
    if (num4 == 0) {
      setNum4(0)
    } else {
      setNum4(num4 => num4 - 1);
    }
  };
  const [num5, setNum5] = useState(0);
  const plusNum5 = (event) => {
    setNum5(num5 => num5 + 1);
  };
  const minusNum5 = (event) => {
    if (num5 == 0) {
      setNum5(0)
    } else {
      setNum5(num5 => num5 - 1);
    }
  };

  const handleButtonClick = () => {
    if (num != 0) {
      const newText = num + itemOrder + selectedOption + '\n';
      setOrderedNum(orderedNum => orderedNum + num);
      setText(text + newText);
      setNum(0);
      setShowCart(true);
      setSum(sum + num * price);
    }
  };
  const handleButtonClick1 = () => {
    if (num1 != 0) {
      const newText = num1 + item1order + selectedOption + '\n';
      setOrderedNum(orderedNum => orderedNum + num1);
      setText(text + newText);
      setNum1(0);
      setShowCart(true);
      setSum(sum + num1 * price1);
    }
  };
  const handleButtonClick2 = () => {
    if (num2 != 0) {
      const newText = num2 + item2order + selectedOption + '\n';
      setOrderedNum(orderedNum => orderedNum + num2);
      setText(text + newText);
      setNum2(0);
      setShowCart(true);
      setSum(sum + num2 * price2);
    }
  };
  const handleButtonClick3 = () => {
    if (num3 != 0) {
      const newText = num3 + item3order + '\n';
      setText(text + newText);
      setOrderedNum(orderedNum => orderedNum + num3);
      setNum3(0);
      setShowCart(true);
      setSum(sum + num3 * price3);
    }
  };
  const handleButtonClick4 = () => {
    if (num4 != 0) {
      const newText = num4 + item4order + '\n';
      setText(text + newText);
      setOrderedNum(orderedNum => orderedNum + num4);
      setNum4(0);
      setShowCart(true);
      setSum(sum + num4 * price4);
    }
  };
  const handleButtonClick5 = () => {
    if (num5 != 0) {
      const newText = num5 + item5order + '\n';
      setText(text + newText);
      setOrderedNum(orderedNum => orderedNum + num5);
      setNum5(0);
      setShowCart(true);
      setSum(sum + num5 * price5);
    }
  };

  const clearCart = (event) => {
    setText('');
    setShowContinueOrder(false);
    setFinishOrder(false);
    setShowCart(false);
    setOrderedNum(0);
  }

  const continueOrder = (event) => {
    if (text != 'Vasa kosarica\n') {
      setText(text + 'ukupan iznos: ' + sum.toFixed(2) + '€.');
      setShowContinueOrder(true);
    }
  }

  const finishOrderFunc = (event) => {
    setFinishOrder(true);
  }

  const finishOrderOnClick = () => {
    setShowCart(false);
    setShowOrder(true);
    setShowContinueOrder(false);
    setFinishOrder(false);
    setShowModal(true);
    setOrderId(orderId => orderId + 1);
    setFinishedOrder(text);
  }

  const backToOrder = () => {
    setShowCart(true);
    setShowOrder(true);
    setShowContinueOrder(true);
    setFinishOrder(true);
    setShowModal(false);
  }

  if (localStorage.getItem('lang') === 'hr') {
    return (
      <Container fluid>
        <Row>
          <Col xs={12} md={9}>
            <div className='shopElements'>
              <Col>
                <Row>
                  <Col md={4} xs={12}>
                    <img id='imgShop' src={img1} />
                    <h4>Cijena: {price} €/{priceHr.toFixed(2)} hrk</h4>
                    <h5>Veličina:</h5>
                    <RadioGroupFunc
                      options={options}
                      selectedOption={selectedOption}
                      onChange={handleOptionChange}
                    />
                    <h5>Broj komada:</h5>
                    <Counter
                      cntPlus={plusNum}
                      cntMinus={minusNum}
                      cnt={num}
                    />
                    <Button id='shopBtn' onClick={handleButtonClick}>Dodaj u košaricu</Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <img id='imgShop' src={img2} />
                    <h4>Cijena: {price1} €/{priceHr1.toFixed(2)} hrk</h4>
                    <h5>Veličina:</h5>
                    <RadioGroupFunc
                      options={options}
                      selectedOption={selectedOption}
                      onChange={handleOptionChange}
                    />
                    <h5>Broj komada:</h5>
                    <Counter
                      cntPlus={plusNum1}
                      cntMinus={minusNum1}
                      cnt={num1}
                    />
                    <Button id='shopBtn' onClick={handleButtonClick1}>Dodaj u košaricu</Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <img id='imgShop' src={img3} />
                    <h4>Cijena: {price2} €/{priceHr2.toFixed(2)} hrk</h4>
                    <h5>Veličina:</h5>
                    <RadioGroupFunc
                      options={options}
                      selectedOption={selectedOption}
                      onChange={handleOptionChange}
                    />
                    <h5>Broj komada:</h5>
                    <Counter
                      cntPlus={plusNum2}
                      cntMinus={minusNum2}
                      cnt={num2}
                    />
                    <Button id='shopBtn' onClick={handleButtonClick2}>Dodaj u košaricu</Button>
                  </Col>
                </Row>

                <Row>
                  <Col md={4} xs={12}>
                    <img id='imgShop' src={img4} />
                    <h4>Cijena: {price3} €/{priceHr3.toFixed(2)} hrk</h4>
                    <h5>Broj komada:</h5>
                    <Counter
                      cntPlus={plusNum3}
                      cntMinus={minusNum3}
                      cnt={num3}
                    />
                    <Button id='shopBtn' onClick={handleButtonClick3}>Dodaj u košaricu</Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <img id='imgShop' src={img5} />
                    <h4>Cijena: {price4} €/{priceHr4.toFixed(2)} hrk</h4>
                    <h5>Broj komada:</h5>
                    <Counter
                      cntPlus={plusNum4}
                      cntMinus={minusNum4}
                      cnt={num4}
                    />
                    <Button id='shopBtn' onClick={handleButtonClick4}>Dodaj u košaricu</Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <img id='imgShop' src={img6} />
                    <h4>Cijena: {price5} €/{priceHr5.toFixed(2)} hrk</h4>
                    <h5>Broj komada:</h5>
                    <Counter
                      cntPlus={plusNum5}
                      cntMinus={minusNum5}
                      cnt={num5}
                    />
                    <Button id='shopBtn' onClick={handleButtonClick5}>Dodaj u košaricu</Button>
                  </Col>
                </Row>
              </Col>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <figure className='shopCartCnt'>
              <img id='shoppingCartImg' src={cartImg} />
              <figcaption className='figure-caption text-center'>{orderedNum}</figcaption>
            </figure>
            {showCart ?
              <div className='cart'>
                <textarea value={text} onChange={handleTextAreaChange} disabled={true} />
                <div className='cartOptions'>
                  <Button id='cartBtn' onClick={clearCart}>Isprazni</Button>
                  <Button id='cartBtn' onClick={continueOrder}>Nastavi sa kupnjom</Button>
                </div>
              </div> : null
            }
            {showContinueOrder ? <UserInput /> : null}
            {showContinueOrder ? <Button id='finishOrder' onClick={finishOrderFunc}>Plaćanje</Button> : null}
            {finishOrder ? <PayMethod /> : null}
            {finishOrder ? <Button id='finishOrder' onClick={finishOrderOnClick}>Završi</Button> : null}
            {showModal ? <ModalOrder /> : null}
            {showModal ? <Button id='finishOrder' onClick={backToOrder}>Povratak</Button> : null}
            <div className='payMethodBtn>'>
            </div>
          </Col>
        </Row>

      </Container>
    )
  } else {
    return (
      <Container fluid>
        <Row>
          <Col xs={12} md={9}>
            <div className='shopElements'>
              <Col>
                <Row>
                  <Col md={4} xs={12}>
                    <img id='imgShop' src={img1} />
                    <h4>Price: {price} €/{priceHr.toFixed(2)} hrk</h4>
                    <h5>Size:</h5>
                    <RadioGroupFunc
                      options={options}
                      selectedOption={selectedOption}
                      onChange={handleOptionChange}
                    />
                    <h5>Number of items:</h5>
                    <Counter
                      cntPlus={plusNum}
                      cntMinus={minusNum}
                      cnt={num}
                    />
                    <Button id='shopBtn' onClick={handleButtonClick}>Add to cart</Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <img id='imgShop' src={img2} />
                    <h4>Price: {price1} €/{priceHr1.toFixed(2)} hrk</h4>
                    <h5>Size:</h5>
                    <RadioGroupFunc
                      options={options}
                      selectedOption={selectedOption}
                      onChange={handleOptionChange}
                    />
                    <h5>Number of items:</h5>
                    <Counter
                      cntPlus={plusNum1}
                      cntMinus={minusNum1}
                      cnt={num1}
                    />
                    <Button id='shopBtn' onClick={handleButtonClick1}>Add to cart</Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <img id='imgShop' src={img3} />
                    <h4>Price: {price2} €/{priceHr2.toFixed(2)} hrk</h4>
                    <h5>Size:</h5>
                    <RadioGroupFunc
                      options={options}
                      selectedOption={selectedOption}
                      onChange={handleOptionChange}
                    />
                    <h5>Number of items:</h5>
                    <Counter
                      cntPlus={plusNum2}
                      cntMinus={minusNum2}
                      cnt={num2}
                    />
                    <Button id='shopBtn' onClick={handleButtonClick2}>Add to cart</Button>
                  </Col>
                </Row>

                <Row>
                  <Col md={4} xs={12}>
                    <img id='imgShop' src={img4} />
                    <h4>Price: {price3} €/{priceHr3.toFixed(2)} hrk</h4>
                    <h5>Number of items:</h5>
                    <Counter
                      cntPlus={plusNum3}
                      cntMinus={minusNum3}
                      cnt={num3}
                    />
                    <Button id='shopBtn' onClick={handleButtonClick3}>Add to cart</Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <img id='imgShop' src={img5} />
                    <h4>Price: {price4} €/{priceHr4.toFixed(2)} hrk</h4>
                    <h5>Number of items:</h5>
                    <Counter
                      cntPlus={plusNum4}
                      cntMinus={minusNum4}
                      cnt={num4}
                    />
                    <Button id='shopBtn' onClick={handleButtonClick4}>Add to cart</Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <img id='imgShop' src={img6} />
                    <h4>Price: {price5} €/{priceHr5.toFixed(2)} hrk</h4>
                    <h5>Number of items:</h5>
                    <Counter
                      cntPlus={plusNum5}
                      cntMinus={minusNum5}
                      cnt={num5}
                    />
                    <Button id='shopBtn' onClick={handleButtonClick5}>Add to cart</Button>
                  </Col>
                </Row>
              </Col>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <figure className='shopCartCnt'>
              <img id='shoppingCartImg' src={cartImg} />
              <figcaption className='figure-caption text-center'>{orderedNum}</figcaption>
            </figure>
            {showCart ?
              <div className='cart'>
                <textarea value={text} onChange={handleTextAreaChange} disabled={true} />
                <div className='cartOptions'>
                  <Button id='cartBtn' onClick={clearCart}>Empty</Button>
                  <Button id='cartBtn' onClick={continueOrder}>Continue</Button>
                </div>
              </div> : null
            }
            {showContinueOrder ? <UserInput /> : null}
            {showContinueOrder ? <Button id='finishOrder' onClick={finishOrderFunc}>Payment</Button> : null}
            {finishOrder ? <PayMethod /> : null}
            {finishOrder ? <Button id='finishOrder' onClick={finishOrderOnClick}>Finish</Button> : null}
            {showModal ? <ModalOrder /> : null}
            {showModal ? <Button id='finishOrder' onClick={backToOrder}>Back</Button> : null}
            <div className='payMethodBtn>'>
            </div>
          </Col>
        </Row>

      </Container>
    )
  }
}
