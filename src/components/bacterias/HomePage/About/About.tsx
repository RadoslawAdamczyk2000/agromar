import React, { useState } from 'react';
import Content from '../../../atoms/HomePage/About/Content';
import ExtraContent from '../../../atoms/HomePage/About/ExtraContent';
import Poster from '../../../atoms/HomePage/About/Poster';
import TitleSection from '../../../atoms/HomePage/About/TitleSection';
import AboutWrapper from './styles/AboutWrapper';
const About = ({title,content,extraContent,poster}) => {
    const [isOpen,setOpen] = useState(false);
    return(
        <AboutWrapper>
            <TitleSection 
                title={title}
            />
            <div className='content'>
                <Poster
                    poster={poster}
                />
                <Content 
                    behave={() => setOpen(!isOpen)}
                    content={content}
                />
            </div>
            <ExtraContent
                    isOpen={isOpen} 
                    content={extraContent}
            />
        </AboutWrapper>
    )
}
export default About;