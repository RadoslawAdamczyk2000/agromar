import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import TitleSection from '../../../atoms/HomePage/Offer/TitleSection';
import Card from '../../../bacterias/HomePage/Offer/Card';
import CardsWrapper from './styles/CardsWrapper';
const Cards = () => {

      const {allDatoCmsPageCz,allDatoCmsPagede,allDatoCmsPagepl,file} = useStaticQuery(graphql`
         allDatoCmsPageCz(filter: {id: {eq: "DatoCmsPageCz-104825997-cs"}}) {
            edges {
              node {
                titleOfferCz
                offerCardCz {
                  title
                  content
                  poster {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        #   allDatoCmsPagede(filter: {id: {eq: "DatoCmsPagede-104825909-de"}}) {
        #     edges {
        #       node {
        #         titleOfferDe
        #         offerCardDe {
        #           title
        #           content
        #           poster {
        #             gatsbyImageData
        #           }
        #         }
        #       }
        #     }
        #   }
          allDatoCmsPagepl(filter: {id: {eq: "DatoCmsPagepl-104808178-pl"}}) {
            edges {
              node {
                titleOfferPl
                offerCardPl {
                  content
                  title
                  poster {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          file(name: {eq: "vegetable-outlines-4898185-removebg-preview"}) {
            publicURL
            name
          } 
      `)
    return(
        <>
            <TitleSection title={allDatoCmsPagepl.edges[0].node.titleOfferPl}/>
            <CardsWrapper image={file.publicURL}>
                {/* <div>
                  {
                    allDatoCmsPagepl.edges.map(({node}) =>
                      <Card 
                        content={node.offerCardPl.content}
                        title={node.offerCardPl.title}
                        poster={node.offerCardPl.poster.gatsbyImageData}
                      />
                    )
                  }
                </div> */}
            </CardsWrapper>
        </>
    )
}
export default Cards;