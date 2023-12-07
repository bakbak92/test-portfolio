import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Error404 = () => {
  return (
    <div className='page-box'>
      <Header />
      <h1>!!! AOUCH !!!</h1>
      <p>What you mean, yes, no, maybe, i don't know, can you repeat the question ?</p>
      <Navigation />
      <Footer />
    </div>
  );
};

export default Error404;