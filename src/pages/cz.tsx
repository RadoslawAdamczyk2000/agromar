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
  const {allDatoCmsPageCz} = useStaticQuery(graphql`
  {
    allDatoCmsPageCz(filter: {id: {eq: "DatoCmsPageCz-104825997-cs"}}) {
      edges {
        node {
          seocz {
            title
            description
          }
          title
          subtitle
          titleAboutCz
          contentAboutCz
          extraContentAboutCz
          posterAboutCz {
            path
            gatsbyImageData
            url
          }
        }
      }
    }
  }
`)
  const seoItem = allDatoCmsPageCz.edges[0].node.seocz;
  const anotherItem = allDatoCmsPageCz.edges[0].node;
  return(
    <Layout>
      <Seo
        language='cs'
        metaTitle={seoItem.title}
        metaDescription={seoItem.description}
      />
      <Navigation 
        cz={true} 
        pl={false}
        de={false}
      />
      <Hero
        title={anotherItem.title}
        subtitle={anotherItem.subtitle}
      />
      <About
          title={anotherItem.titleAboutCz}
          content={anotherItem.contentAboutCz}
          extraContent={anotherItem.extraContentAboutCz}
          poster={anotherItem.posterAboutCz.gatsbyImageData}
      />
      <Onions
        cz={true}
        pl={false}
        de={false}
      />
      <Cards 
        cz={true}
        pl={false}
        de={false}
      />
      <Contact
        cz={true}
        pl={false}
        de={false}
      />
    </Layout>
  )
}

export default CzechPage;