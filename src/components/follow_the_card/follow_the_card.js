import React from 'react';
import Body from './component/Body';
import BodyEn from './component/BodyEn';

export default function follow_the_card() {

  const defaultLang = localStorage.getItem('lang') || 'hr';

  if (defaultLang === 'hr'){
    return(
      <Body />
    )
  } else {
    return (
      <BodyEn />
    )
  }
}