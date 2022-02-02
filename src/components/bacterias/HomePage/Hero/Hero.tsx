import Poster from '../../../atoms/HomePage/Hero/Poster';
import React from 'react';
import Title from '../../../atoms/HomePage/Hero/Title';
import HeroWrapper from './styles/HeroWrapper';
const Hero = () => {
    return(
        <HeroWrapper>
            <Poster/>
            <Title/>
        </HeroWrapper>
    )
}
export default Hero;