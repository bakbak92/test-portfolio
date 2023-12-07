import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxContact from '../components/BoxContact';

const Contact = () => {
  return (
    <div className='page-box'>
      <Header />
      <Navigation />
      <BoxContact />
      <Footer />
    </div>
  );
};

export default Contact;