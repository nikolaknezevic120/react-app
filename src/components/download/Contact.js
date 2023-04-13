import React from 'react';
import '../style/contact-and-download/download/download.css';
import { SocialIcon } from 'react-social-icons';

export default function Contact() {

  const defaultLang = localStorage.getItem('lang') || 'hr';

  if (defaultLang === 'hr'){
    return (
        <div className='download-links'>
          <h3>Društvene mreže</h3>
          <SocialIcon url="https://instagram.com/nidjoknezevic/" />
          <SocialIcon url="https://www.facebook.com/knezeic.nikola/" />
          <SocialIcon url="https://www.youtube.com/channel/UCwNLB4k6TXGGxpozjQTR9Vg" />
          <h3>Whatsapp</h3>     
          <SocialIcon url="https://api.whatsapp.com/send/?phone=385958409108&text&type=phone_number&app_absent=0" />
          
        </div>
      );
    } else {
      return (
        <div className='download-links'>
          <h3>Social media</h3>
          <SocialIcon url="https://instagram.com/nidjoknezevic/" />
          <SocialIcon url="https://www.facebook.com/knezeic.nikola/" />
          <SocialIcon url="https://www.youtube.com/channel/UCwNLB4k6TXGGxpozjQTR9Vg" />
          <h3>Whatsapp</h3>     
          <SocialIcon url="https://api.whatsapp.com/send/?phone=385958409108&text&type=phone_number&app_absent=0" />
          
        </div>
      );
    }
  }