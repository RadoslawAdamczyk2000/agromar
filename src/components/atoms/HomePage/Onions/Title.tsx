import React from 'react';
import TitleWrapper from './styles/TitleWrapper';
const Title = ({title}:{title:string}) => {
    return(
        <TitleWrapper>
            <h3>
                {title}
            </h3>
        </TitleWrapper>
    )
}
export default Title;