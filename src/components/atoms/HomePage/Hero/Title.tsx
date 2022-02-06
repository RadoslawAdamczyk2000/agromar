import React from 'react';
import TitleWrapper from './styles/TitleWrapper';
const Title = ({title,subtitle}) => {
    return(
        <TitleWrapper>
            <div>
                <h1>
                    {title}
                </h1>
                <h2>
                    {subtitle}
                </h2>
            </div>
        </TitleWrapper>
    )
}
export default Title;