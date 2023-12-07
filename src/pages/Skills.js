import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxSkills from '../components/BoxSkills';

const Skill = () => {
  return (
    <div className='page-box'>
      <Header />
      <Navigation />
      <BoxSkills />
      <Footer />
    </div>
  );
};

export default Skill;