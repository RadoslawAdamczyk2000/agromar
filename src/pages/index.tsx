import Layout from '../schemas/Layout';
import React from 'react';
import Navigation from '../components/cells/Layout/Navigation';
const HomePage = () => {
  return(
    <Layout>
      <Navigation/>
      <header>
        <div>
          <h1>
            Agromar
          </h1>
          <h2>
            Warzywa obrane
          </h2>
        </div>
      </header>
    </Layout>
  )
}

export default HomePage;