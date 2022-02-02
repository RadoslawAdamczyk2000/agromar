import React from 'react';
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