import React from 'react';
import MenuItem from '../../../atoms/Layout/Navigation/MenuItem';
import MenuListWrapper from './styles/MenuListWrapper';
const MenuList = () => {
    return(
        <MenuListWrapper>
            <MenuItem path='/' title='start'/>
            <MenuItem path='/' title='o nas'/>
            <MenuItem path='/' title='oferta'/>
            <MenuItem path='/' title='kontakt'/>
        </MenuListWrapper>
    )
}
export default MenuList;