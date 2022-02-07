import React from 'react';
import TitleWrapper from './styles/TitleWrapper';
const Title = ({title}:{title:string}) => {
    return(
        <TitleWrapper>
            <h3
                dangerouslySetInnerHTML={{__html:title}}
            />
        </TitleWrapper>
    )
}
export default Title;