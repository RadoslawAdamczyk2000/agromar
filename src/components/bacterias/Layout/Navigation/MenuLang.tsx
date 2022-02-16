import React from 'react';
import LangItem from '../../../atoms/Layout/Navigation/LangItem';
import MenuLangWrapper from './styles/MenuLangWrapper';
const MenuLang = () => {
    return(
        <MenuLangWrapper>
            <LangItem path='/' title='PL'/>
            <LangItem path='/en' title='EN'/>
            <LangItem path='/de' title='DE'/>
            <LangItem path='/cz' title='CZ'/>
        </MenuLangWrapper>
    )
}
export default MenuLang;