import styled from 'styled-components';
const SocialWrapper = styled.li`
    height:5rem;
    margin:1.5rem auto;
    overflow:hidden;
    position:relative;
    transition:.12s linear color;
    width:45rem;
    &:hover{
        color:${({theme}) => theme.colors.white};
    }
    &::before{
        background-color:#4267B2;
        height:100%;
        width:100%;
        transition:.12s ease-in-out transform;
        left:-100%;
        z-index:-1;
    }
    &:hover::before{
        transform:translateX(100%);
    }
    & > a{
        align-items:center;
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
        font-style:normal;
        height:100%;
        width:100%;
        z-index:1;
        & > .icon,
        & > .name{
            align-items:center;
            display:flex;
            height:5rem;
            justify-content:center;
        }
        & > .icon{
            font-size:2.75rem;
            width:5rem;
        }
        & > .name{
            font-size:1.75rem;
            padding:0 .8rem;
        }
    }
`
export default SocialWrapper;