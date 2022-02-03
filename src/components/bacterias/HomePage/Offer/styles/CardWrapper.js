import styled from 'styled-components';
const CardWrapper = styled.div`
    background-color:${({theme}) => theme.colors.white};
    box-shadow:0 0 1rem hsla(0,100%,0%,.5);
    margin:9rem auto;
    max-width:95vw;
    position:relative;
    width:50rem;
    & > .content{
        align-items:center;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
    }
    &::after{
        background-color:${({theme}) => theme.colors.white};
        bottom:-3.5rem;
        clip-path: polygon(100% 0, 100% 44%, 34% 99%, 0 100%, 0 0);
        height:4rem;
        max-width:95vw;
        width:50rem;
    }
    &:focus > figure > *,
    &:hover > figure > *{
        transform:scale(1.5);
    }
`
export default CardWrapper;