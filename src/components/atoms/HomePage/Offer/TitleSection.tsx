import React from 'react';
import { title } from '../../../../types/types';
import TitleSectionWrapper from './styles/TitleSectionWrapper';
const TitleSection = ({title}:{title:title}) => {
    return(
        <TitleSectionWrapper>
            <h3>
                {title}
            </h3>
        </TitleSectionWrapper>
    )
}
export default TitleSection;