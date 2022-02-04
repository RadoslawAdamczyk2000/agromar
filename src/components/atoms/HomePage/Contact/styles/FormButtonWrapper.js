import styled from 'styled-components';
const FormButtonWrapper = styled.button`
    align-items:center;
    background-color:${({theme}) => theme.colors.gray};
    color:${({theme}) => theme.colors.white};
    display:flex;
    font-size:2.5rem;
    height:5.5rem;
    justify-content:center;
    margin:.75rem auto;
    max-width:85vw;
    transition:.12s linear background-color,.12s linear filter, .12s linear transform;
    width:18rem;
    &:focus,
    &:hover{
        background-color:${({theme}) => theme.colors.emerald};
        transform:scaleX(.95);
    }
`
export default FormButtonWrapper;