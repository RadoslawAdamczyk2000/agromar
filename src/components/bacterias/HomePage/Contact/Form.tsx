import React from 'react';
import FormArea from '../../../atoms/HomePage/Contact/FormArea';
import FormButton from '../../../atoms/HomePage/Contact/FormButton';
import FormItem from '../../../atoms/HomePage/Contact/FormItem';
const Form = ({cz,de,pl}:{cz:any,de:any,pl:any}) => {
    return(
        <form>
            {
                cz &&
                <>
                <div>
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
            
        </form>
    )
}
export default Form;