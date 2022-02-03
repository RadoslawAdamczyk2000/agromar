import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { title } from '../../../../types/types';
import TitleSectionWrapper from './styles/TitleSectionWrapper';
const TitleSection = ({title}:{title:title}) => {
    const {file} = useStaticQuery(graphql`
    {
      file(name: {eq: "vegetable-outlines-4898185-removebg-preview"}) {
        publicURL
        name
      }   
    }`
    )
    return(
        <TitleSectionWrapper image={file.publicURL}>
            <h3>
                {title}
            </h3>
        </TitleSectionWrapper>
    )
}
export default TitleSection;