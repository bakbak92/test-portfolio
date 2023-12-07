import React from 'react';
import linkedin from './../assets/image/in_linked_linkedin_media_social_icon_124259.png';
import mail from './../assets/image/socialemailcircularbutton_80177.png';
import tel from './../assets/image/tel.png';

const BoxContact = () => {
  return (
    <main className='main-contact'>
      <div className="title-page-contact">
        <h1 className="title-contact">Contact</h1>
        <q className="citation">Aucunes limites, si ce n'est celle de l'imagination</q>
      </div>
      <div className="box-contact">
        <div className="contact-box">
          <a href="https://www.linkedin.com/in/jerome-arbod/" target="_blank" rel="noopener noreferrer"   className='link-contact'>
            <img src={linkedin} alt="logo linkedin" className='logo-contact'/>
            <p className="text-contact">LinkedIn</p>
          </a>
        </div>
        <div className="contact-box">
          <img src={mail} alt="logo linkedin" className='logo-contact'/>
          <p className="text-contact">E-mail : ajii........8@gmail.com</p>
        </div>
        <div className="contact-box">
          <img src={tel} alt="logo linkedin" className='logo-contact'/>
          <p className="text-contact">Tel : 06 3x xx xx x5</p>
        </div>
      </div>
    </main>
  );
};

export default BoxContact;