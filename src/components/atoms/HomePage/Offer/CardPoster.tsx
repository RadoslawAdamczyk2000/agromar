import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { title } from '../../../../types/types';
import CardPosterWrapper from './styles/CardPosterWrapper';
const CardPoster = ({poster,title}:{poster:any,title:title}) => {
    const image = getImage(poster)
    return(
        <CardPosterWrapper>
            <GatsbyImage 
                image={image} 
                alt={`${title} poster`}
                style={{
                    height:'100%',
                    objectFit:'cover',
                    objectPosition:'center',
                    transition:'.2s linear transform',
                    width:'100%'
                }}
            />
        </CardPosterWrapper>
    )
}
export default CardPoster;