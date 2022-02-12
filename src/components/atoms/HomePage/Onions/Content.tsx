import ContentWrapper from './styles/ContentWrapper';
import React from 'react';
const Content = ({content}:{content:string}) => {
    return(
        <ContentWrapper>
            <div dangerouslySetInnerHTML={{__html:content}}/>
        </ContentWrapper>
    )
}
export default Content;