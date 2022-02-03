import React from 'react';
import FormArea from '../../../atoms/HomePage/Contact/FormArea';
import FormButton from '../../../atoms/HomePage/Contact/FormButton';
import FormItem from '../../../atoms/HomePage/Contact/FormItem';
const Form = () => {
    return(
        <form>
            <div>
                <FormItem/>
                <div>
                    <FormItem/>
                    <FormItem/>
                </div>
                <FormArea/>
            </div>
            <FormButton/>
        </form>
    )
}
export default Form;