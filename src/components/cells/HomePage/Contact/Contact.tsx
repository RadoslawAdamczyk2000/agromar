import React from 'react';
import Author from '../../../atoms/HomePage/Contact/Author';
import Info from '../../../atoms/HomePage/Contact/Info';
import Map from '../../../atoms/HomePage/Contact/Map';
import Form from '../../../bacterias/HomePage/Contact/Form';
import ContactWrapper from './styles/ContactWrapper';
const Contact = ({cz,de,pl}:{cz:any,de:any,pl:any}) => {
    return(
        <ContactWrapper>
            <div className='content'>
                <div>
                    <Info/>
                    <Map/>
                </div>
                <Form
                    cz={cz}
                    de={de}
                    pl={pl}
                />
            </div>
            <Author/>
        </ContactWrapper>
    )
}
export default Contact;