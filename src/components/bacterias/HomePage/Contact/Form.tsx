import React from 'react';
import FormArea from '../../../atoms/HomePage/Contact/FormArea';
import FormButton from '../../../atoms/HomePage/Contact/FormButton';
import FormItem from '../../../atoms/HomePage/Contact/FormItem';
const Form = ({cz,de,en,pl}:{cz:any,de:any,en:any,pl:any}) => {
    return(
        <form 
            id="contactform" 
            action="https://formsubmit.io/send/warzywapleszew@gmail.com " 
            method="POST"
        >
            <input name="_formsubmit_id" type="text" style={{display:"none"}}/>
            {
                cz &&
                <>
                <div>
                    <input 
                        name="_redirect" 
                        type="hidden" 
                        id="name" 
                        value="https://agromar.netlify.app/cz"
                    />               
                    <FormItem
                        label='Jméno a příjmení'
                        inputName='fullname'
                        variant='text'
                    />
                    <div>
                        <FormItem
                            label='Emailová adresa'
                            inputName='mail'
                            variant='email'
                        />
                        <FormItem
                            label='Telefonní číslo'
                            inputName='phone'
                            variant='tel'
                        />
                    </div>
                    <FormArea
                        inputName='message'
                        label='Zpráva'
                    />
                </div>
                <FormButton
                    label='Poslat'
                />
                </>
            }
            {
                de &&
                <>
                <div>
                    <input 
                        name="_redirect" 
                        type="hidden" 
                        id="name" 
                        value="https://agromar.netlify.app/de"
                    />
                    <FormItem
                        label='Vorname und Nachname'
                        inputName='fullname'
                        variant='text'
                    />
                    <div>
                        <FormItem
                            label='E-Mail-Adresse'
                            inputName='mail'
                            variant='email'
                        />
                        <FormItem
                            label='Telefonnummer'
                            inputName='phone'
                            variant='tel'
                        />
                    </div>
                    <FormArea
                        inputName='message'
                        label='Nachricht'
                    />
                </div>
                <FormButton
                    label='Senden'
                />
                </>
            }
            {
                pl &&
                <>
                <div>
                    <input 
                        name="_redirect" 
                        type="hidden" 
                        id="name" 
                        value="https://agromar.netlify.app/"
                    />
                    <FormItem
                        label='Imię i nazwisko'
                        inputName='fullname'
                        variant='text'
                    />
                    <div>
                        <FormItem
                            label='Adres e-mail'
                            inputName='mail'
                            variant='email'
                        />
                        <FormItem
                            label='Numer telefonu'
                            inputName='phone'
                            variant='tel'
                        />
                    </div>
                    <FormArea
                        inputName='message'
                        label='Wiadomość'
                    />
                </div>
                <FormButton
                    label='Wyślij'
                />
                </>
            }
            {
                en &&
                <>
                <div>
                    <input 
                        name="_redirect" 
                        type="hidden" 
                        id="name" 
                        value="https://agromar.netlify.app/en"
                    />
                    <FormItem
                        label='Fullname'
                        inputName='fullname'
                        variant='text'
                    />
                    <div>
                        <FormItem
                            label='E-mail address'
                            inputName='mail'
                            variant='email'
                        />
                        <FormItem
                            label='Phone number'
                            inputName='phone'
                            variant='tel'
                        />
                    </div>
                    <FormArea
                        inputName='message'
                        label='Message'
                    />
                </div>
                <FormButton
                    label='Send'
                />
                </>
            }
            
        </form>
    )
}
export default Form;