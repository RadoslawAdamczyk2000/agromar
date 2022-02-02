import React from 'react';
import Logo from '../../../atoms/Layout/Navigation/Logo';
import MenuButton from '../../../atoms/Layout/Navigation/MenuButton';
const Brand = () => {
    return(
        <div>
            <Logo/>
            {/* <MenuButton
                isOpen={false}
                setOpen={() => console.log('dziala')}
            /> */}
        </div>
    )
}
export default Brand;