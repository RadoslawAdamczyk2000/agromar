import ContentWrapper from './styles/ContentWrapper';
import React from 'react';
const Content = ({content}:{content:string}) => {
    return(
        <ContentWrapper>
            <p>
                {content}
            </p>
        </ContentWrapper>
    )
}
export default Content;