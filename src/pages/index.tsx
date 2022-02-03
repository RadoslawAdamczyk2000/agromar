import Layout from '../schemas/Layout';
import React from 'react';
import Navigation from '../components/cells/Layout/Navigation';
import Hero from '../components/bacterias/HomePage/Hero/Hero';
import About from '../components/bacterias/HomePage/About/About';
const HomePage = () => {
  return(
    <Layout>
      <Navigation/>
      <Hero/>
      <About/>
    </Layout>
  )
}

export default HomePage;