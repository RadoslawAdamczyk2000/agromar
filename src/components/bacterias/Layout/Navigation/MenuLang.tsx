import React from 'react';
import LangItem from '../../../atoms/Layout/Navigation/LangItem';
import MenuLangWrapper from './styles/MenuLangWrapper';
const MenuLang = () => {
    return(
        <MenuLangWrapper>
            <LangItem path='/' title='PL'/>
            <LangItem path='/' title='CZ'/>
            <LangItem path='/' title='DE'/>
        </MenuLangWrapper>
    )
}
export default MenuLang;