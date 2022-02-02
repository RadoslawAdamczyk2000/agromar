import React from 'react';
import MenuItem from '../../../atoms/Layout/Navigation/MenuItem';
const Menu = () => {
    return(
        <ul>
            <MenuItem path='/' title='start'/>
            <MenuItem path='/' title='o nas'/>
            <MenuItem path='/' title='oferta'/>
            <MenuItem path='/' title='kontakt'/>
        </ul>
    )
}
export default Menu;