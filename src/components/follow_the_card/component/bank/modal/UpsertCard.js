import { Modal } from "react-bootstrap";
import { useState } from "react";
import '../cardStyle/set-card.css';

export function UpsertCard(props) {
    const normalizeCardNumber = (value) => {
        return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
      }

    const [card, setCard] = useState({
        cardName: props.selectedCard?.cardName || 'card name - not set',
        ownerName: props.selectedCard?.ownerName || 'owner name - not set',
        ownerSecondName: props.selectedCard?.ownerSecondName ||'owner second name - not set',
        avaliable: props.selectedCard?.avaliable || 'avaliable - not set',
        iban: props.selectedCard?.iban ||'iban - not set',
        validate: props.selectedCard?.validate || 'validate - not set (format mmyy)',
        pin: Math.floor(Math.random(1000) * 9999),
        cvv: props.selectedCard?.cvv || 'cvv - not set' 
    });

    const defaultLang = localStorage.getItem('lang') || 'hr';
    
    if (defaultLang === 'hr'){
        return <Modal className={'p-5'} show={props.show} onHide={props.handleCancel}>
            <Modal.Header id="modal-header" closeButton>
                <Modal.Title>Uredi/dodaj karticu</Modal.Title>
            </Modal.Header>
            <Modal.Body id="modal-body">

                <p>-------------------------------------</p>
                <p id="card-sttings">Naziv kartice</p>
                <input type={'text'} value={card.cardName} onChange={(val) => setCard({...card, cardName: val.target.value})}/>

                <p>-------------------------------------</p>
                <p>Ime vlasnika</p>
                <input type={'text'} value={card.ownerName} onChange={(val) => setCard({...card, ownerName: val.target.value})}/>
                
                <p>-------------------------------------</p>
                <p>Prezime vlasnika</p>
                <input type={'text'} value={card.ownerSecondName} onChange={(val) => setCard({...card, ownerSecondName: val.target.value})}/>

                <p>-------------------------------------</p>
                <p>Raspolozivo</p>
                <input type={'text'} value={card.avaliable} onChange={(val) => setCard({...card, avaliable: val.target.value})}/>
                
                <p>-------------------------------------</p>
                <p>IBAN</p>
                <input type={'text'} value={card.iban} onChange={(val) => 
                {
                    const {value} = val.target
                    val.target.value = normalizeCardNumber(value)
                    setCard({...card, iban: val.target.value})
                    }}/>
                            
                <p>-------------------------------------</p>
                <p>Vrijedi do</p>
                <input type={'text'} value={card.validate} onChange={(val) => setCard({...card, validate: val.target.value})}/>
                
                <p>-------------------------------------</p>
                <p>CVV</p>
                <input type={'text'} value={card.cvv} onChange={(val) => setCard({...card, cvv: val.target.value})}/>
            </Modal.Body>
            <Modal.Footer id="modal-footer">
                <button className="btn btn-primary" onClick={() => props.handleSubmit(card)}>Spremi promjene</button>
            </Modal.Footer>
        </Modal>
    } else {
        return <Modal className={'p-5'} show={props.show} onHide={props.handleCancel}>
            <Modal.Header id="modal-header" closeButton>
                <Modal.Title>Edit/add new card</Modal.Title>
            </Modal.Header>
            <Modal.Body id="modal-body">

                <p>-------------------------------------</p>
                <p id="card-sttings">Card name</p>
                <input type={'text'} value={card.cardName} onChange={(val) => setCard({...card, cardName: val.target.value})}/>

                <p>-------------------------------------</p>
                <p>Owner name</p>
                <input type={'text'} value={card.ownerName} onChange={(val) => setCard({...card, ownerName: val.target.value})}/>
                
                <p>-------------------------------------</p>
                <p>Owner surname</p>
                <input type={'text'} value={card.ownerSecondName} onChange={(val) => setCard({...card, ownerSecondName: val.target.value})}/>

                <p>-------------------------------------</p>
                <p>Avvliable</p>
                <input type={'text'} value={card.avaliable} onChange={(val) => setCard({...card, avaliable: val.target.value})}/>
                
                <p>-------------------------------------</p>
                <p>IBAN</p>
                <input type={'text'} value={card.iban} onChange={(val) => 
                {
                    const {value} = val.target
                    val.target.value = normalizeCardNumber(value)
                    setCard({...card, iban: val.target.value})
                    }}/>
                            
                <p>-------------------------------------</p>
                <p>Validate</p>
                <input type={'text'} value={card.validate} onChange={(val) => setCard({...card, validate: val.target.value})}/>
                
                <p>-------------------------------------</p>
                <p>CVV</p>
                <input type={'text'} value={card.cvv} onChange={(val) => setCard({...card, cvv: val.target.value})}/>
            </Modal.Body>
            <Modal.Footer id="modal-footer">
                <button className="btn btn-primary" onClick={() => props.handleSubmit(card)}>Save changes</button>
            </Modal.Footer>
        </Modal>
    }
}