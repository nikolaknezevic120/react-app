import React from 'react';

import '../style/webShop/orderPage/orderPage.css';

const order = JSON.parse(localStorage.getItem("items"));
const sum = localStorage.getItem("sum");

export default function checkCart() {

    return (
        <div className='orderMap'>
            {order.map(items => (
                <li key={Math.floor(Math.random() * (10000 - 1 + 1)) + 1}>
                    {items}
                </li>
            ))}

            <p>Iznos za plaćanje: {sum} €</p>
        </div>
    )
}
