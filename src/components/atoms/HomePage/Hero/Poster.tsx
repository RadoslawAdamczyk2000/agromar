import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
const Poster = () => {
    const {allImageSharp} = useStaticQuery(graphql`
    {
        allImageSharp(filter: {id: {eq: "5df6ddf6-2cfd-56e1-8c3d-88ae146a318c"}}) {
            edges {
            node {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG, formats: JPG)
            }
            }
        }
    }
  `)
  const image = getImage(allImageSharp.edges[0].node.gatsbyImageData);
    return(
        <div>
            <GatsbyImage image={image} alt='Hero Image Agromar'/>
            {/* <StaticImage 
                src='../../../../assets/potatos-pixabay-01.jpg' 
                placeholder='tracedSVG'
                layout='fullWidth'
                alt=''
            /> */}
        </div>
    )
}
export default Poster;

