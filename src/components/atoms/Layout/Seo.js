import React from 'react';
import Helmet from 'react-helmet';
const Seo = ({language,metaDescription,metaTitle}) => {
    return(
        <Helmet lang={language}>
            <meta name='description' content={metaDescription}/>
            <title>{metaTitle}</title>
        </Helmet>
    )
}
export default Seo;