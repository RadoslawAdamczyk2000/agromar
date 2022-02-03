import styled from 'styled-components';
const LangItemWrapper = styled.li`
    align-items:center;
    display:flex;
    flex-shrink:0;
    font-size:${({theme}) => theme.fonts.sizes.navItem};
    font-weight:${({theme}) => theme.fonts.weights.bold};
    height:5rem;
    justify-content:center;
    width:5rem;
    & > a{
        align-items:center;
        display:flex;
        height:100%;
        justify-content:center;
        overflow:hidden;
        position:relative;
        transition:.12s .12s linear border-radius;
        width:100%;
        z-index:0;
        &::before{
            background-color:${({theme}) => theme.colors.celeste};
            height:100%;
            left:50%;
            top:105%;
            transform:translateX(-50%);
            transition:.12s linear transform;
            width:100%;
            z-index:-1;
        }
    }
    &:focus,
    &:hover{
        & > a{
            border-radius:2rem;
            &::before{
                transform:translate(-50%,-105%);
            }
        }
    }
`
export default LangItemWrapper;