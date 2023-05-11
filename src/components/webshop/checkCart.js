import React from 'react';

import '../style/webShop/orderPage/orderPage.css';

const order = JSON.parse(localStorage.getItem("items"));


export default function checkCart() {

    return (
        <div className='orderMap'>
            {order.map(items => (
                <li>
                    {items}
                </li>
            ))}
        </div>
    )
}
