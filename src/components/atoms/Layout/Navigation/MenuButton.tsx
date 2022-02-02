import React from 'react';
import { ImenuButton } from '../../../../types/interfaces';
const MenuButton = ({isOpen,setOpen}) => {
    return(
        <button isOpen={isOpen} onClick={setOpen}>
            <span/>
            <span/>
            <span/>
        </button>
    )
}
export default MenuButton;