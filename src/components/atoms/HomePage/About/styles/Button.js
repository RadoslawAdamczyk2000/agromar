import styled from 'styled-components';
const Button = styled.button`
    align-items:center;
    background-color:${({theme}) => theme.colors.gray};
    color:${({theme}) => theme.colors.white};
    display:center;
    font-size:${({theme}) => theme.fonts.sizes.button};
    font-weight:${({theme}) => theme.fonts.weights.bold};
    height:5rem;
    margin:2rem auto;
    transition:.12s linear background-color,.12s linear filter;
    width:19rem;
    &:focus,
    &:hover{
        background-color:${({theme}) => theme.colors.emerald};
        filter:brightness(115%);
    }
`
export default Button;