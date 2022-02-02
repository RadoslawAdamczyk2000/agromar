import styled from 'styled-components';
const MenuItemWrapper = styled.li`
    color:${({theme}) => theme.colors.black};
    font-size:${({theme}) => theme.fonts.sizes.navItem};
    font-weight:${({theme}) => theme.fonts.weights.black};
    text-transform:uppercase;
    padding:.5rem 1.5rem;
    transition:.12s linear color;
    &:hover{
        color:${({theme}) => theme.colors.emerald};
    }
`
export default MenuItemWrapper;