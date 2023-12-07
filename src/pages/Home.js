import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhoIs from '../components/WhoIs';

const Home = () => {
  return (
    <div className='page-box'>
      <Header />
      <Navigation />
      <WhoIs />
      <Footer />
    </div>
  );
};

export default Home;