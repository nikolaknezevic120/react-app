import React from 'react';
import { useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import RadioGroupFunc from './radioGroup';
import Counter from './counter';
import CheckCart from './checkCart';

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
  const [showCart, setShowCart] = useState(false);
  const [enableContinue, setEnableContinue] = useState(true);

  const itemOrder = ' domaći dres\nveličina: ';
  const item1order = ' gostujući dres\nveličina: ';
  const item2order = ' treći dres\nveličina: ';
  const item3order = ' jastuk\n';
  const item4order = ' šalica\n';
  const item5order = ' upaljač\n';

  const price = 50.00.toFixed(2);
  const price1 = 45.68.toFixed(2);
  const price2 = 42.75.toFixed(2);
  const price3 = 14.55.toFixed(2);
  const price4 = 13.65.toFixed(2);
  const price5 = 28.85.toFixed(2);
  const convertValute = 7.53450;
  const priceHr = price * convertValute.toFixed(2);
  const priceHr1 = price1 * convertValute.toFixed(2);
  const priceHr2 = price2 * convertValute.toFixed(2);
  const priceHr3 = price3 * convertValute.toFixed(2);
  const priceHr4 = price4 * convertValute.toFixed(2);
  const priceHr5 = price5 * convertValute.toFixed(2);
  const [sum, setSum] = useState(0);
  const [orderedNum, setOrderedNum] = useState(0);

  function handleTextAreaChange(event) {
    setText(event.target.value);
  }

  const [names, setNames] = useState([]);
  localStorage.setItem("items", JSON.stringify(names));

  const [selectedOption, setSelectedOption] = useState('XS');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = ['XS', 'S', 'M', 'L', 'XL'];

  const stringSum = "ukupna cijena: " + sum.toFixed(2) + '€.';
  const lenghtString = stringSum.length;

  const viewCart = (event) => {
    setShowCart(!showCart);
    if (showCart === false) {
      setText(text + stringSum);
    } else {
      setText(text.slice(0, -lenghtString));
    }
  }

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
      const newText = num + itemOrder + selectedOption + '\n' + 'cijena: ' + price * num + '€.' + '\n\n';
      setOrderedNum(orderedNum => orderedNum + num);
      setText(text + newText);
      setNum(0);
      setNames(current => [...current, newText]);
      setSum(sum + num * price);
      setEnableContinue(false);
    }
  };
  const handleButtonClick1 = () => {
    if (num1 != 0) {
      const newText = num1 + item1order + selectedOption + '\n' + 'cijena: ' + price1 * num1 + '€.' + '\n\n';
      setOrderedNum(orderedNum => orderedNum + num1);
      setText(text + newText);
      setNum1(0);
      setNames(current => [...current, newText]);
      setSum(sum + num1 * price1);
      setEnableContinue(false);
    }
  };
  const handleButtonClick2 = () => {
    if (num2 != 0) {
      const newText = num2 + item2order + selectedOption + '\n' + 'cijena: ' + price2 * num2 + '€.' + '\n\n';
      setOrderedNum(orderedNum => orderedNum + num2);
      setText(text + newText);
      setNames(current => [...current, newText]);
      setNum2(0);
      setSum(sum + num2 * price2);
      setEnableContinue(false);
    }
  };
  const handleButtonClick3 = () => {
    if (num3 != 0) {
      const newText = num3 + item3order + '\n' + 'cijena: ' + price3 * num3 + '€.' + '\n\n';
      setText(text + newText);
      setOrderedNum(orderedNum => orderedNum + num3);
      setNames(current => [...current, newText]);
      setNum3(0);
      setSum(sum + num3 * price3);
      setEnableContinue(false);
    }
  };
  const handleButtonClick4 = () => {
    if (num4 != 0) {
      const newText = num4 + item4order + '\n' + 'cijena: ' + price4 * num4 + '€.' + '\n\n';
      setText(text + newText);
      setOrderedNum(orderedNum => orderedNum + num4);
      setNames(current => [...current, newText]);
      setNum4(0);
      setSum(sum + num4 * price4);
      setEnableContinue(false);
    }
  };
  const handleButtonClick5 = () => {
    if (num5 != 0) {
      const newText = num5 + item5order + '\n' + 'cijena: ' + price5 * num5 + '€.' + '\n\n';
      setText(text + newText);
      setOrderedNum(orderedNum => orderedNum + num5);
      setNames(current => [...current, newText]);
      setNum5(0);
      setSum(sum + num5 * price5);
      setEnableContinue(false);
    }
  };

  const clearCart = (event) => {
    setText('');
    setOrderedNum(0);
    document.location.reload();
  }

  const continueOrder = (event) => {
    if (text != 'Vasa kosarica\n') {
      setText(text + 'ukupan iznos: ' + sum.toFixed(2) + '€.');
      localStorage.setItem('sum', sum.toFixed(2));
      setTimeout(() => {
        document.location.reload();
      }, 0.1);
    }
  }

  const finishOrderOnClick = () => {
    setOrderId(orderId => orderId + 1);
    setFinishedOrder(text);

    setTimeout(() => {
      window.location.reload();
    }, 3000);
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

          <Col xs={12} md={3} >
            <figure className='shopCartCnt'>
              <img id='shoppingCartImg' src={cartImg} />
              <figcaption className='figure-caption text-center'>{orderedNum}</figcaption>
            </figure>
            <div className='cart'>
              <div className='cartOptions'>
                <Row>
                  {enableContinue ? null :
                    <Button id='cartBtn' onClick={clearCart}>Isprazni</Button>
                  }
                  {enableContinue ? null :
                    <Button id='cartBtn' onClick={viewCart}>Pregledaj</Button>
                  }
                </Row>
                <Row>
                  <div className='xcxcx'>
                    {showCart ? <textarea value={text} disabled={true} /> : null}
                  </div>
                </Row>
                <Row>
                  {enableContinue ? null :
                    <Button id='cartBtn' role='cartBtn' href='./#/webShop/orderpage' onClick={continueOrder}>Nastavi</Button>
                  }
                </Row>
              </div>
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
            <div className='cart'>
              <div className='cartOptions'>
                <Row>
                  {enableContinue ? null :
                    <Button id='cartBtn' onClick={clearCart}>Empty</Button>
                  }
                  {enableContinue ? null :
                    <Button id='cartBtn' onClick={viewCart}>View cart</Button>
                  }
                </Row>
                <Row>
                  <div className='xcxcx'>
                    {showCart ? <textarea value={text} disabled={true} /> : null}
                  </div>
                </Row>
                <Row>
                  {enableContinue ? null :
                    <Button id='cartBtn' role='cartBtn' href='./#/webShop/orderpage' onClick={continueOrder}>Continue</Button>
                  }
                </Row>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    )
  }
}

