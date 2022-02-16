import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Box from '../../../bacterias/HomePage/Onions/Box';
import Card from '../../../bacterias/HomePage/Onions/Card';
import OnionsWrapper from './styles/OnionsWrapper';
const Onions = ({cz,de,en,pl}:{cz:any,de:any,en:any,pl:any}) => {
  const {allDatoCmsPageCz,allDatoCmsPagede,allDatoCmsPageen,allDatoCmsPagepl} = useStaticQuery(graphql`
  {
    allDatoCmsPagepl(filter: {id: {eq: "DatoCmsPagepl-104808178-pl"}}) {
      edges {
        node {
          titleOnionsPl
          contentOnionsPl
          onioncard {
            title
            posterCard {
              gatsbyImageData
            }
          }
        }
      }
    }
    allDatoCmsPagede(filter: {id: {eq: "DatoCmsPagede-104825909-de"}}) {
      edges {
        node {
          titleOnionsDe
          contentOnionsDe
          onioncard {
            title
            posterCard {
              gatsbyImageData
            }
          }
        }
      }
    }
    allDatoCmsPageCz(filter: {id: {eq: "DatoCmsPageCz-104825997-cs"}}) {
      edges {
        node {
          titleOnionsCz
          contentOnionsCz
          onioncard {
            title
            posterCard {
              gatsbyImageData
            }
          }
        }
      }
    }
    allDatoCmsPageen(filter: {id: {eq: "DatoCmsPageen-108688745-en"}}) {
    edges {
      node {
        titleOnionsPl
        contentOnionsPl
        onioncard {
          title
          posterCard {
            gatsbyImageData
          }
        }
      }
    }
  }
  }
`)
  const czQuery = allDatoCmsPageCz.edges[0].node;
  const deQuery = allDatoCmsPagede.edges[0].node;
  const plQuery =  allDatoCmsPagepl.edges[0].node;
  const enQuery = allDatoCmsPageen.edges[0].node;
    return(
        <OnionsWrapper>
            {
              pl &&
              <Box
                title={plQuery.titleOnionsPl}
                content={plQuery.contentOnionsPl}
              />
            }
            {
              en &&
              <Box
                title={enQuery.titleOnionsPl}
                content={enQuery.contentOnionsPl}
              />
            }
            {
              de &&
              <Box
                title={deQuery.titleOnionsDe}
                content={deQuery.contentOnionsDe}
              />
            }
            {
              cz &&
              <Box
                title={czQuery.titleOnionsCz}
                content={czQuery.contentOnionsCz}
              />
            }
            <div className='cards'>
                {
                  pl &&
                  plQuery.onioncard.map( i => 
                    <Card 
                      title={i.title}
                      imagePath={i.posterCard.gatsbyImageData}
                    />
                  )
                }
                {
                  en &&
                  enQuery.onioncard.map( i => 
                    <Card 
                      title={i.title}
                      imagePath={i.posterCard.gatsbyImageData}
                    />
                  )
                }
                {
                  de &&
                  deQuery.onioncard.map( i => 
                    <Card 
                      title={i.title}
                      imagePath={i.posterCard.gatsbyImageData}
                    />
                  )
                }
                {
                  cz &&
                  czQuery.onioncard.map( i => 
                    <Card 
                      title={i.title}
                      imagePath={i.posterCard.gatsbyImageData}
                    />
                  )
                }
            </div>
        </OnionsWrapper>
    )
}
export default Onions;