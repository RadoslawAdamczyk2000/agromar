import styled from 'styled-components';
const NavigationWrapper = styled.nav`
    align-items:center;
    background-color:${({theme}) => theme.colors.white};
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    height:7rem;
    position:sticky;
    top:0;
    z-index:999;
    & > menu{
        display:grid;
        grid-template-columns:3fr 1fr;
        height:7rem;
        padding:0 1rem;
        width:100%;
        @media only screen and (max-width:750px){
            grid-template-columns:1fr;
            & > span{
                display:none;
            }
        }
    }
`
export default NavigationWrapper;