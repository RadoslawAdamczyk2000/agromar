import React from 'react';
import Author from '../../../atoms/HomePage/Contact/Author';
import Info from '../../../atoms/HomePage/Contact/Info';
import Map from '../../../atoms/HomePage/Contact/Map';
import Form from '../../../bacterias/HomePage/Contact/Form';
import ContactWrapper from './styles/ContactWrapper';
const Contact = () => {
    return(
        <ContactWrapper>
            <div className='content'>
                <div>
                    <Info/>
                    <Map/>
                </div>
                <Form/>
            </div>
            <Author/>
        </ContactWrapper>
    )
}
export default Contact;