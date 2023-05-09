import React from 'react';
import '../style/webShop/animation/animation.css';

export default function ConfirmOrder() {

    const language = localStorage.getItem('lang');

    if (language === 'hr') {

        return (
            <div className="ring">Obrada
                <span id='animationSpan'></span>
            </div>
        )
    } else {
        return (
            <div className="ring">Loading
                <span id='animationSpan'></span>
            </div>
        )
    }
}
