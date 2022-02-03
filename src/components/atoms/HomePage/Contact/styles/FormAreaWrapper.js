import styled from 'styled-components';
const FormAreaWrapper = styled.div`
align-items:center;
    display:flex;
    height:15rem;
    justify-content:center;
    margin:3rem auto;
    max-width:85%;
    position:relative;
    /* width:${({isContact}) => isContact ? '25rem' : '50rem'}; */
    width:50rem;
    & > label{
        background-color:${({theme}) => theme.colors.gray};
        border-radius:.5rem;
        color:${({theme}) => theme.colors.white};
        left:1rem;
        padding:.45rem .75rem;
        position:absolute;
        top:calc(((1.6rem + 2 * .75rem) / 2 + 1rem) * (-1));
    }
    & > textarea{
        border-radius:1rem;
        color:${({theme}) => theme.colors.gray};
        font-size:1.8rem;
        font-weight:${({theme}) => theme.fonts.weights.bold};
        flex-shrink:0;
        height:100%;
        outline:.25rem solid ${({theme}) => theme.colors.gray};
        padding:.8rem;
        text-align:start;
        transition:.12s linear color,.12s linear outline;
        width:100%;
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.emerald};
            outline:.25rem solid ${({theme}) => theme.colors.emerald};
        }
        &:focus ~ label,
        &:hover ~ label,
        &:focus + label,
        &:hover + label{
            background-color:${({theme}) => theme.colors.emerald};
        }
    }
`
export default FormAreaWrapper;