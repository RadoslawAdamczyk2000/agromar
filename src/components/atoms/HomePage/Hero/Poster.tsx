import { graphql, useStaticQuery } from 'gatsby';
import {StaticImage } from 'gatsby-plugin-image';
import React from 'react';
const Poster = () => {
    return(
        <StaticImage 
            src='../../../../assets/potatos-pixabay-01.jpg'
            alt='Hero Image Agromar'
            style={{
                height:'100%',
                objectFit:'cover',
                objectPosition:'center',
                position:'relative',
                maxWidth:'100vw',
                width:'100%',
                zIndex:-1
            }}
        />
    )
}
export default Poster;

