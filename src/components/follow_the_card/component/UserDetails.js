import React from 'react'
import { useState } from 'react';

export default function UserDetails() {

    const [User, setUser] = useState([{
        name: '1234 1234 5678', phone: '02/24', pin: '5445', cvv: '554', cardName: 'My first card',
        ownerName: 'Nikola', ownerSecondName: 'Knezevic', avaliable: '6542'
    }]);
  
}

