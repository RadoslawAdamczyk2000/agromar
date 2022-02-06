import Poster from '../../../atoms/HomePage/Hero/Poster';
import React from 'react';
import Title from '../../../atoms/HomePage/Hero/Title';
import HeroWrapper from './styles/HeroWrapper';
const Hero = ({title,subtitle}) => {
    return(
        <HeroWrapper>
            <Poster/>
            <Title
                title={title}
                subtitle={subtitle}
            />
        </HeroWrapper>
    )
}
export default Hero;