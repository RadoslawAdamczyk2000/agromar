import styled from 'styled-components';
const CardsWrapper = styled.div`
    background-attachment:fixed;
    background-blend-mode:multiply;
    background-color:${({theme}) => theme.colors.emerald};
    background-image:url('${({image}) => image}');
    margin:0 0 15rem 0;
    padding:1rem;
    position:relative;

    & > div{
        align-items:baseline;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-evenly;
        width:calc(100% - 2rem);
    }
    &::after{
        bottom: -9.5rem;
        background-attachment:fixed;
        background-blend-mode:multiply;
        background-color:${({theme}) => theme.colors.emerald};
        background-image:url('${({image}) => image}');
        clip-path: polygon(100% 0, 100% 14%, 34% 99%, 0 20%, 0 0);
        height:10rem;
        left:0;
        width:100%;
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