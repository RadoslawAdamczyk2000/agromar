import styled from 'styled-components';
const NavigationWrapper = styled.nav`
    align-items:center;
    background-color:${({theme}) => theme.colors.background};
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    height:7rem;
    position:sticky;
    top:0;
    width:100%;
    & > menu{
        display:grid;
        grid-template-columns:2fr 3fr 1fr;
        height:7rem;
        width:100%;
    }
`
export default NavigationWrapper;