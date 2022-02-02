import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
const Logo = () => {
    const data = useStaticQuery(
        graphql`
            {
                file(name: {eq: "logo"}) {
                    publicURL
                }
            }
        `
    )
    return(
        <figure>
            <img src={data.file.publicURL} alt='Agromar Logo'/>
        </figure>
    )
}
export default Logo;