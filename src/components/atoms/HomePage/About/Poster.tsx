import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import PosterWrapper from './styles/PosterWrapper';
const Poster = ({poster}) => {
    const image = getImage(poster);
    return(
        <PosterWrapper>
            {
                image &&
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
            }
        </PosterWrapper>
    )
}
export default Poster;