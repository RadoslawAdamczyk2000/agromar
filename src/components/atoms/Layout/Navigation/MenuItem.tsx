import { Link } from 'gatsby';
import React from 'react';
const MenuItem = ({path='/',title}:{path:string,title:string}) => {
    return(
        <li>
            <Link to={path}>
                {title}
            </Link>
        </li>
    )
}
export default MenuItem;