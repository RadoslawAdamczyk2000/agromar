import styled from 'styled-components';
const OnionsWrapper = styled.div`
    align-items:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:10rem auto;
    width:85vw;
    & > * {
        text-align:center;
    }
    & > .cards{
        display:grid;
        grid-gap:2rem;
        grid-template-columns:repeat(2,1fr);
        padding:2rem;
        @media only screen and (max-width:1000px){
            grid-template-columns:repeat(1,1fr);
        }
    }
`
export default OnionsWrapper;