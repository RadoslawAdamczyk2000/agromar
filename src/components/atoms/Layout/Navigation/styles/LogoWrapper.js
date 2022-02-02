import styled from 'styled-components';
const LogoWrapper = styled.figure`
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    height:7rem;
    justify-content:center;

    & > div,
    & > figcaption{
        align-items:center;
        display:flex;
        height:100%;
        justify-content:center;
    }

    & > div{
        padding:.5rem;
        & > img{
            height:100%;
            object-fit:contain;
            object-position:center;
        }
    }

    & > figcaption{
        font-size:2.5rem;
        font-weight:${({theme}) => theme.fonts.weights.black};
        padding:0 1rem;
    }

    
`
export default LogoWrapper;