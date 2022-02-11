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
          titleAboutDe
          contentAboutDe
          extraContentAboutDe
          posterAboutDe {
            url
            gatsbyImageData
            path
          }
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
      <Navigation 
        de={true}
        pl={false}
        cz={false}
      />
      <Hero
        title={anotherItem.title}
        subtitle={anotherItem.subtitle}
      />
      <About
        buttonValue='Mehr sehen'
        content={anotherItem.contentAboutDe}
        extraContent={anotherItem.extraContentAboutDe}
        poster={anotherItem.posterAboutDe.gatsbyImageData}
        title={anotherItem.titleAboutDe}
      />
      <Onions
        de={true}
        pl={false}
        cz={false}
      />
      <Cards 
        de={true}
        pl={false}
        cz={false}
      />
      <Contact
        de={true}
        pl={false}
        cz={false}
      />
    </Layout>
  )
}

export default DeutchPage;