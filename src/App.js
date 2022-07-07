import React from 'react';
import Navbar from './navbar';
import Header from './Header';
import CustomerReview from './CustomerReview';
import AboutUs from './AboutUs';
import Locations from './Locations';
import Contact from './Contact';
import Footer from './Footer';
import products from './data';
import Paths from './Paths';

const App = () => {
  return (
    <>
      <Paths />
      <Navbar />
      <Header />
      <CustomerReview />
      <AboutUs />
      <Locations />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
