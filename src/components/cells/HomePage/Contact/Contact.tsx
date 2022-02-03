import React from 'react';
import Author from '../../../atoms/HomePage/Contact/Author';
import Info from '../../../atoms/HomePage/Contact/Info';
import Map from '../../../atoms/HomePage/Contact/Map';
import Form from '../../../bacterias/HomePage/Contact/Form';
const Contact = () => {
    return(
        <footer>
            <div>
                <div>
                    <Info/>
                    <Map/>
                </div>
                <Form/>
            </div>
            <Author/>
        </footer>
    )
}
export default Contact;