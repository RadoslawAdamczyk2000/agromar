import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Box from '../../../bacterias/HomePage/Onions/Box';
import Card from '../../../bacterias/HomePage/Onions/Card';
import OnionsWrapper from './styles/OnionsWrapper';
const Onions = () => {
    const {allImageSharp} = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            gatsbyImageData
          }
        }
      }
    }
  `)
    return(
        <OnionsWrapper>
            <Box/>
            <div className='cards'>
                <Card 
                    title='Gastronomia i przemysł' 
                    imagePath={allImageSharp.edges[13].node.gatsbyImageData}
                />
                <Card 
                    title='Typ marketowy' 
                    imagePath={allImageSharp.edges[12].node.gatsbyImageData}
                />
            </div>
        </OnionsWrapper>
    )
}
export default Onions;