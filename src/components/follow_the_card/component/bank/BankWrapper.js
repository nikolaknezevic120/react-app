import { useState } from "react"
import { CardList } from "./CardList";
import { UpsertCard } from "./modal/UpsertCard";
import './cardStyle/card.css';

export function BankWrapper() {
    const [showAddCard, setShowAddCard] = useState(false);
    const [cards, setCards] = useState([{
        iban: '1234 5678 9123 4567', validate: '0224', pin: '5445', cvv: '554', cardName: 'My first card',
        ownerName: localStorage.getItem('guestName') || 'Nikola',
        ownerSecondName: localStorage.getItem('guestLastName') || 'Knežević', avaliable: '6542'
    }]);
    const [selectedCard, setSelectedCard] = useState(null);

    return <div className="container">
        <div>
            <CardList updateCard={(index) => {
                setSelectedCard(cards[index]);
                setShowAddCard(true);

            }} deleteCard={(index) => {
                setCards(cards.filter((card, cIndex) => index !== cIndex));
            }} cards={cards} />
        </div>
        <div className="row">
            <div className="col-3 mt-2">
                <button className="btn btn-primary" id="add-new" onClick={() => {
                    setSelectedCard(null);
                    setShowAddCard(true);
                }}
                >Dodaj novu karticu</button>
            </div>
        </div>

        {showAddCard && <UpsertCard
            show={showAddCard}
            handleCancel={() => setShowAddCard(false)}
            handleSubmit={(value) => {
                if (selectedCard === null) {
                    let newValue = cards;
                    newValue.push(value);
                    setCards(newValue);
                    setShowAddCard(false);
                } else {
                    let indexToUpdate = cards.findIndex((card) => card.iban === selectedCard.iban);
                    cards[indexToUpdate] = value;
                    console.log(cards);
                    console.log(value);
                    setCards(cards);
                    setShowAddCard(false);
                }

            }}
            selectedCard={selectedCard}
        />}
    </div>
}