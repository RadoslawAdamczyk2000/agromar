import { Link } from 'gatsby';
import React from 'react';
import LangItemWrapper from './styles/LangItemWrapper';
const LangItem = ({path='/',title}:{path:string,title:string}) => {
    return(
        <LangItemWrapper>
            <Link to={path}>
                {title}
            </Link>
        </LangItemWrapper>
    )
}
export default LangItem;