import React from 'react';
import Helmet from 'react-helmet';
const Seo = ({language,metaDescription,metaTitle}) => {
    return(
        <Helmet lang={language}>
            <meta name='description' content={metaDescription}/>
            <title>{metaTitle}</title>
            <meta name="google-site-verification" content="zdMANyh-GmkUUmsGKRr65pKjvd5uYVnCG0rjkiRfjh8" />
        </Helmet>
    )
}
export default Seo;