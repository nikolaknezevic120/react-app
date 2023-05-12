import React from 'react';

import '../style/webShop/orderPage/orderPage.css';

const order = JSON.parse(localStorage.getItem("items"));


export default function checkCart() {

    return (
        <div className='orderMap'>
            {order.map(items => (
                <li key={Math.floor(Math.random() * (10000 - 1 + 1)) + 1}>
                    {items}
                </li>
            ))}
        </div>
    )
}
