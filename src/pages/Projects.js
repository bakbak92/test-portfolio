import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxProject from '../components/BoxProject';

const Projects = () => {
  return (
    <div className='page-box'>
      <Header />
      <Navigation />
      <BoxProject />
      <Footer />
    </div>
  );
};

export default Projects;