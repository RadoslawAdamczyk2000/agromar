import { Link } from 'gatsby';
import React from 'react';
import MenuItemWrapper from './styles/MenuItemWrapper';
const MenuItem = ({path,title}:{path:string,title:string}) => {
    return(
        <MenuItemWrapper>
            <Link to={path}>
                {title}
            </Link>
        </MenuItemWrapper>
    )
}
export default MenuItem;