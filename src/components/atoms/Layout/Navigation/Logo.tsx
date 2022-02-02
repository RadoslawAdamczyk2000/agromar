import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import LogoWrapper from './styles/LogoWrapper';
const Logo = () => {
    const {file} = useStaticQuery(
        graphql`
            {
                file(name: {eq: "potato"}) {
                    name
                    publicURL
                }
            }
        `
    )
    return(
        <LogoWrapper>
            <div>
                <img src={file.publicURL} alt='Agromar Logo'/>
            </div>
            <figcaption>
                Agromar
            </figcaption>
        </LogoWrapper>
    )
}
export default Logo;