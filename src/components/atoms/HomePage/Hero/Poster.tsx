import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
const Poster = () => {
    const {allImageSharp} = useStaticQuery(graphql`
    {
        allImageSharp(filter: {id: {eq: "5df6ddf6-2cfd-56e1-8c3d-88ae146a318c"}}) {
            edges {
            node {
                gatsbyImageData(placeholder: TRACED_SVG, formats: JPG)
            }
            }
        }
    }
  `)
  const image = getImage(allImageSharp.edges[0].node.gatsbyImageData);
    return(
        <GatsbyImage 
            image={image} 
            alt='Hero Image Agromar'
            style={{
                height:'100%',
                objectFit:'cover',
                objectPosition:'center',
                position:'relative',
                width:'100%',
                zIndex:-1
            }}
        />
    )
}
export default Poster;

