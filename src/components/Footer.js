import React from 'react';
import html from "./../assets/image/html_original_wordmark_logo_icon_146478.png";
import css from "./../assets/image/css_original_wordmark_logo_icon_146576.png";
import js from "./../assets/image/javascript_icon_130900.png";
import react from "./../assets/image/react_original_wordmark_logo_icon_146375.png";

const Footer = () => {
  return (
    <footer className='footer-box'>
      <p className="tech-build-site">Langage utilisé pour ce portfolio :</p>
      <div className='logo-box'>
        <img src={html} alt="Logo html" className='logo'/>
        <img src={css} alt="Logo css" className='logo'/>
        <img src={js} alt="Logo JavaScript" className='logo'/>
        <img src={react} alt="Logo react" className='logo'/>
      </div>
      <p className='product'>Arbod Jerome alias AJIssaProduction©</p>
      <p className='product'>Tous droits reservés.</p>
    </footer>
  );
};

export default Footer;