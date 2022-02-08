import styled from 'styled-components';
const TitleWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
    height:100%;
    position:absolute;
    top:0;
    width:100%;
    & > div{
        color:${({theme}) => theme.colors.white};
        margin:auto;
        max-width:95%;
        text-shadow:0 0 2rem hsla(0,100%,0%,.5),0 0 1rem hsla(0,100%,0%,.5);
        width:55rem;
        & > h1{
            font-size:${({theme}) => theme.fonts.sizes.title};
            @media only screen and (max-width:750px){
                font-size:4rem;
            }
        }
        & > h2{
            font-size:${({theme}) => theme.fonts.sizes.subtitle};
            @media only screen and (max-width:750px){
                font-size:3rem;
            }
        }
    }
    @media only screen and (max-width:850px){
        grid-template-columns:repeat(1,1fr);
    }
`
export default TitleWrapper;