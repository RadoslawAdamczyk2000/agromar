import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import CardImageWrapper from './styles/CardImageWrapper';
const CardImage = ({imagePath,title}:{imagePath:any,title:string}) => {
    const image = getImage(imagePath);
    return(
        <CardImageWrapper>
            <GatsbyImage image={image} alt={`${title} poster`}/>
        </CardImageWrapper>
    )
}
export default CardImage;