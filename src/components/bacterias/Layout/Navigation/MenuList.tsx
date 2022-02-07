import React from 'react';
import MenuItem from '../../../atoms/Layout/Navigation/MenuItem';
import MenuListWrapper from './styles/MenuListWrapper';
const MenuList = ({cz,de,pl}:{cz:any,de:any,pl:any}) => {
    return(
        <MenuListWrapper>
            {
                cz &&
                <>
                    <MenuItem path='/' title='start'/>
                    <MenuItem path='/' title='o nás'/>
                    <MenuItem path='/' title='nabídka'/>
                    <MenuItem path='/' title='kontakt'/>
                </>
            }
            {
                de &&
                <>
                    <MenuItem path='/' title='anfang'/>
                    <MenuItem path='/' title='über uns'/>
                    <MenuItem path='/' title='angebot'/>
                    <MenuItem path='/' title='kontakt'/>
                </>
            }
            {
                pl &&
                <>
                    <MenuItem path='#start' title='start'/>
                    <MenuItem path='#o-nas' title='o nas'/>
                    <MenuItem path='#oferta' title='oferta'/>
                    <MenuItem path='#kontakt' title='kontakt'/>
                </>
            }
        </MenuListWrapper>
    )
}
export default MenuList;