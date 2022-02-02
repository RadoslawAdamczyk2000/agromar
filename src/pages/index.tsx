import Layout from '../schemas/Layout';
import React from 'react';
import Navigation from '../components/cells/Layout/Navigation';
import Hero from '../components/bacterias/HomePage/Hero/Hero';
const HomePage = () => {
  return(
    <Layout>
      <Navigation/>
      <Hero/>
    </Layout>
  )
}

export default HomePage;