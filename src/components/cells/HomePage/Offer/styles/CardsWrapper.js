import styled from 'styled-components';
const CardsWrapper = styled.div`
    background-color:${({theme}) => theme.colors.emerald};
    background-image:url('../../../../../assets/vegetable-outlines-4898185.ai');
    display:grid;
    grid-gap:1rem;
    grid-template-columns:repeat(2,1fr);
    margin:0 0 5rem 0;
    padding:1rem;
    & > div:nth-of-type(odd){
        grid-column:1;
    }
    & > div:nth-of-type(even){
        grid-column:2;
        margin-top:15rem;
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