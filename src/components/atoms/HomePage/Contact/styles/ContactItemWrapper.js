import styled from 'styled-components';
const ContactItemWrapper = styled.li`
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    height:5rem;
    justify-content:center;
    margin:1.5rem auto;
    & > span{
        font-size:2.5rem;
        height:5rem;
        width:5rem;
        & > *{
            align-items:center;
            display:flex;
            height:100%;
            justify-content:content;
            transform:scale(.75);
            width:100%;
        }
    }
    & > div{
        & > a{
            color:${({theme}) => theme.colors.black};
            font-size:1.75rem;
            font-style:normal;
            margin:auto 1rem;
            transition:.12s linear color;
            &:hover{
                color:${({theme}) => theme.colors.emerald};
            }
        }
          & > p{
            color:${({theme}) => theme.colors.black};
            font-size:1.75rem;
            font-style:normal;
            margin:auto 1rem;
            transition:.12s linear color;
            &:hover{
                color:${({theme}) => theme.colors.emerald};
            }
        }
    }
`
export default ContactItemWrapper;
