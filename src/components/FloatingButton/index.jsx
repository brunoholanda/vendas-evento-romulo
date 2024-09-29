import React from 'react';
import wp from '../../assets/icons/wp-page.webp'
import './FloatingButton.css';

const FloatingWhatsAppButton = () => {
  return (
    <div className="floating-button">
      <a href="https://api.whatsapp.com/send?phone=5583999839882" target="_blank" rel="noreferrer">
        <img src={wp} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
