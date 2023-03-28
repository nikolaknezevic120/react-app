import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import './cardStyle/card.css';

export function CardDetailEn(props) {
    const [show, setShow]=useState(false)
    const [showPin, setShowPin]=useState(true)

    return < div className="card" >
        <div className="card-body">
            <h5 className="card-title">{props.cardName}</h5>
            {
                show?<p className="card-text">IBAN: {props.iban}</p>:
                <p>IBAN: **** **** **** {props.iban[15]}{props.iban[16]}{props.iban[17]}{props.iban[18]}</p>
            }
            <p className="card-text">Owner name: {props.ownerName}</p>
            <p className="card-text">Owner surname: {props.ownerSecondName}</p>
            <p className="card-text">Validate: {props.validate[0]}{props.validate[1]}/{props.validate[2]}{props.validate[3]}</p>
            {
                show?<p className="card-text">Avaliable: {props.avaliable} HRK</p>:null
            }
            {     
                show?<div className="card-text">
                {'   '}
                {
                    showPin?
                    <p className="card-text">PIN: ****
                    {'   '}<Button onClick={() => setShowPin(!showPin)} id='btn-prim-log-card' size="sm">Show</Button></p>:
                    <p className="card-text">PIN: {props.pin}
                    {'   '}<Button onClick={() => setShowPin(!showPin)} id='btn-prim-log-card' size="sm">Hide pin</Button></p>    
                }</div>:null
            }       
            {    
                show?<p className="card-text">CVV: {props.cvv}</p>:null
            }
            <button onClick={() => setShow(!show)} id='btn-prim-log-card' className="btn btn-secondary" >Show more/less</button>{'  '} <br /><br />
            <button onClick={() => props.updateCard(props.id)} id='btn-prim-log-card' className="btn btn-warning" >Edit data</button>{'  '} <br /><br />
            <button onClick={() => props.deleteCard(props.id)} id='btn-prim-log-card' className="btn btn-danger" >Delete</button>
        </div>
    </div>
}