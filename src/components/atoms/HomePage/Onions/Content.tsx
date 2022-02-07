import ContentWrapper from './styles/ContentWrapper';
import React from 'react';
const Content = ({content}:{content:string}) => {
    return(
        <ContentWrapper>
            <p dangerouslySetInnerHTML={{__html:content}}/>
        </ContentWrapper>
    )
}
export default Content;