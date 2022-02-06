import Layout from '../schemas/Layout';
import React from 'react';
import Navigation from '../components/cells/Layout/Navigation';
import Hero from '../components/bacterias/HomePage/Hero/Hero';
import About from '../components/bacterias/HomePage/About/About';
import Cards from '../components/cells/HomePage/Offer/Cards';
import Contact from '../components/cells/HomePage/Contact/Contact';
import Onions from '../components/cells/HomePage/Onions/Onions';
import Seo from '../components/atoms/Layout/Seo';
import { graphql, useStaticQuery } from 'gatsby';
const DeutchPage = () => {
  const {allDatoCmsPagede} = useStaticQuery(graphql`
  {
    allDatoCmsPagede(filter: {id: {eq: "DatoCmsPagede-104825909-de"}}) {
      edges {
        node {
          seode {
            title
            description
          }
          title
          subtitle
        }
      }
    }
  }
`)
const seoItem = allDatoCmsPagede.edges[0].node.seode;
const anotherItem = allDatoCmsPagede.edges[0].node;
  return(
    <Layout>
      <Seo
        language='de'
        metaTitle={seoItem.title}
        metaDescription={seoItem.description}
      />
      <Navigation/>
      <Hero
        title={anotherItem.title}
        subtitle={anotherItem.subtitle}
      />
      <About/>
      <Onions/>
      <Cards/>
      <Contact/>
    </Layout>
  )
}

export default DeutchPage;