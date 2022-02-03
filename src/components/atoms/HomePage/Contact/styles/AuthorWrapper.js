import styled from 'styled-components';
const AuthorWrapper = styled.div`
    align-items:center;
    background-color:${({theme}) => theme.colors.gray};
    color:${({theme}) => theme.colors.white};
    display:flex;
    height:6rem;
    justify-content:center;
    transition:.12s linear color;
    &:hover{
        color:${({theme}) => theme.colors.celeste};
    }
    & > a{
        font-size:1.9rem;
    }
`
export default AuthorWrapper;