import React from 'react';
import AuthorWrapper from './styles/AuthorWrapper';
const Author = () => {
    const currentYear = new Date().getFullYear();
    return(
        <AuthorWrapper>
            <a 
                href='https://rad-web.vercel.app/' 
                target='_blank' 
                rel='follow'
            >
                RadWEB | Radosław Adamczyk &copy; {currentYear}
            </a>
        </AuthorWrapper>
    )
}
export default Author;