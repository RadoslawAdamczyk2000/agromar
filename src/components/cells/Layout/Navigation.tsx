import React from 'react';
import Brand from '../../bacterias/Layout/Navigation/Brand';
import MenuLang from '../../bacterias/Layout/Navigation/MenuLang';
import MenuList from '../../bacterias/Layout/Navigation/MenuList';
import NavigationWrapper from './styles/NavigationWrapper';
const Navigation = () => {
    return(
        <NavigationWrapper>
            <Brand/>
            <menu>
                <span/>
                <MenuLang/>
            </menu>
        </NavigationWrapper>
    )
}
export default Navigation;