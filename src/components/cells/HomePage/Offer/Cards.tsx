import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import TitleSection from '../../../atoms/HomePage/Offer/TitleSection';
import Card from '../../../bacterias/HomePage/Offer/Card';
import CardsWrapper from './styles/CardsWrapper';
const Cards = ({cz,de,pl}:{cz:any,de:any,pl:any}) => {
  const {allDatoCmsPageCz,allDatoCmsPagede,allDatoCmsPagepl,file} = useStaticQuery(graphql`
  {
    allDatoCmsPageCz(filter: {id: {eq: "DatoCmsPageCz-104825997-cs"}}) {
      edges {
        node {
          titleOfferCz
          offerCardCz {
            title
            poster {
              gatsbyImageData
            }
            content
          }
        }
      }
    }
    allDatoCmsPagede(filter: {id: {eq: "DatoCmsPagede-104825909-de"}}) {
      edges {
        node {
          titleOfferDe
          offerCardDe {
            title
            poster {
              gatsbyImageData
            }
            content
          }
        }
      }
    }
    allDatoCmsPagepl(filter: {id: {eq: "DatoCmsPagepl-104808178-pl"}}) {
      edges {
        node {
          titleOfferPl
          offerCardPl {
            title
            poster {
              gatsbyImageData
            }
            content
          }
        }
      }
    }
    file(name: {eq: "vegetable-outlines-4898185-removebg-preview"}) {
      publicURL
    } 
  }
`)
    return(
        <>
            {
              cz &&
              <TitleSection title={allDatoCmsPageCz.edges[0].node.titleOfferCz}/>
            }
            {
              de &&
              <TitleSection title={allDatoCmsPagede.edges[0].node.titleOfferDe}/>
            }
            {
              pl &&
              <TitleSection title={allDatoCmsPagepl.edges[0].node.titleOfferPl}/>
            }
            <CardsWrapper image={file.publicURL}>
                <div className='cards'>
                  {
                    pl &&
                    allDatoCmsPagepl.edges[0].node.offerCardPl.map( i =>
                      <Card 
                        content={i.content}
                        title={i.title}
                        poster={i.poster.gatsbyImageData}
                      />
                    )
                  }
                  {
                    cz &&
                    allDatoCmsPageCz.edges[0].node.offerCardCz.map( j =>
                      <Card 
                        content={j.content}
                        title={j.title}
                        poster={j.poster.gatsbyImageData}
                      />
                    )
                  }
                  {
                    de &&
                    allDatoCmsPagede.edges[0].node.offerCardDe.map( k =>
                      <Card 
                        content={k.content}
                        title={k.title}
                        poster={k.poster.gatsbyImageData}
                      />
                    )
                  }
                </div>
            </CardsWrapper>
        </>
    )
}
export default Cards;