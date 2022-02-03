import Layout from '../schemas/Layout';
import React from 'react';
import Navigation from '../components/cells/Layout/Navigation';
import Hero from '../components/bacterias/HomePage/Hero/Hero';
import About from '../components/bacterias/HomePage/About/About';
import Cards from '../components/cells/HomePage/Offer/Cards';
import Contact from '../components/cells/HomePage/Contact/Contact';
const HomePage = () => {
  return(
    <Layout>
      <Navigation/>
      <Hero/>
      <About/>
      <Cards/>
      <Contact/>
    </Layout>
  )
}

export default HomePage;