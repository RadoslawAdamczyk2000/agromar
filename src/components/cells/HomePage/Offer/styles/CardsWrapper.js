import styled from 'styled-components';
import vegePng from '../../../../../assets/vegetable-outlines-4898185-removebg-preview.png';
const CardsWrapper = styled.div`
    background-attachment:fixed;
    background-blend-mode:multiply;
    background-color:${({theme}) => theme.colors.emerald};
    background-image:url('${({image}) => image}');
    display:grid;
    grid-gap:1rem;
    grid-template-columns:repeat(2,1fr);
    margin:0 0 15rem 0;
    padding:1rem;
    position:relative;
    &::after{
        bottom: -9.5rem;
        background-attachment:fixed;
        background-blend-mode:multiply;
        background-color:${({theme}) => theme.colors.emerald};
        background-image:url('${({image}) => image}');
        clip-path: polygon(100% 0, 100% 14%, 34% 99%, 0 20%, 0 0);
        height:10rem;
        width:100%;
    }
    & > div:nth-of-type(odd){
        grid-column:1;
    }
    & > div:nth-of-type(even){
        grid-column:2;
        margin-top:5rem;
    }
    @media only screen and (max-width:1050px){
        grid-template-columns:repeat(1,1fr);
        & > div:nth-of-type(odd){
            grid-column:1;
        }
        & > div:nth-of-type(even){
            grid-column:1;
            margin-top:0;
        }
    }
`
export default CardsWrapper;