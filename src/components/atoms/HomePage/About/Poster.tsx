import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { path } from '../../../../types/types';
import PosterWrapper from './styles/PosterWrapper';
const Poster = ({poster}:{poster:path}) => {
    const {allImageSharp} = useStaticQuery(graphql`
    {
      allImageSharp(filter: {id: {eq: "d3486549-24dc-5fb7-98fe-6f4640b6d830"}}) {
        edges {
          node {
            id
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              formats: JPG
            )
          }
        }
      }
    }
  `)
  const imagePath = allImageSharp.edges[0].node.gatsbyImageData;
  console.log(imagePath);
  const image = getImage(imagePath);
    return(
        <PosterWrapper>
            <GatsbyImage 
                alt='Agromar about image'
                image={image} 
                style={{
                    height:'100%',
                    objectFit:'cover',
                    objectPosition:'center',
                    width:'100%'
                }}
            />
        </PosterWrapper>
    )
}
export default Poster;
// d3486549-24dc-5fb7-98fe-6f4640b6d830
// query MyQuery {
//     allSitePlugin {
//       edges {
//         node {
//           id
//         }
//       }
//     }
//   }
  