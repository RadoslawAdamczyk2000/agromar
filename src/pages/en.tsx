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
const CzechPage = () => {
  const {allDatoCmsPageen} = useStaticQuery(graphql`
    {
      allDatoCmsPageen(filter: {id: {eq: "DatoCmsPageen-108688745-en"}}) {
        edges {
          node {
            id
            seopl {
              title
              description
            }
            title
            subtitle
            titleAboutPl
            contentAboutPl
            extraContentAboutPl
            posterAboutPl {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  const seoItem = allDatoCmsPageen.edges[0].node.seopl;
  const anotherItem = allDatoCmsPageen.edges[0].node;
  return(
    <Layout>
      <Seo
        language='en'
        metaTitle={seoItem.title}
        metaDescription={seoItem.description}
      />
      <Navigation/>
      <Hero
        title={anotherItem.title}
        subtitle={anotherItem.subtitle}
      />
      <About
          buttonValue='See more'
          content={anotherItem.contentAboutPl}
          extraContent={anotherItem.extraContentAboutPl}
          poster={anotherItem.posterAboutPl.gatsbyImageData}
          title={anotherItem.titleAboutPl}
      />
      <Onions
        cz={false} 
        en={true}
        pl={false}
        de={false}
      />
      <Cards 
        cz={false} 
        en={true}
        pl={false}
        de={false}
      />
      <Contact
        cz={false} 
        en={true}
        pl={false}
        de={false}
      />
    </Layout>
  )
}

export default CzechPage;