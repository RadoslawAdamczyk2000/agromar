import React from 'react';
import {RiFacebookFill,RiMailOpenLine,RiPhoneLine} from 'react-icons/ri';
import ContactItemWrapper from './styles/ContactItemWrapper';
import SocialWrapper from './styles/SocialWrapper';
const Social = ({path, title}) => {
    return(
        <SocialWrapper>
            <a 
                href={path} 
                target='_blank' 
                rel='follow'
            >
                <span className='icon'>
                    <RiFacebookFill/>
                </span>
                <span className='name'>
                    {title}
                </span>
            </a>
        </SocialWrapper>
    )
}

const Info = () => {
    return(
        <div>
            <address>
                <ul>
                    <Social 
                        path='https://www.facebook.com/Warzywa-obrane-Pleszew-102560911809086' 
                        title='Warzywa obrane Pleszew'
                    />
                    <Social 
                        path='https://www.facebook.com/Gesch%C3%A4ltes-Gem%C3%BCse-K%C3%BCchenfertiges-Gem%C3%BCse-101886361930585' title='Geschältes Gemüse. Küchenfertiges Gemüse'
                    />
                    <ContactItemWrapper>
                        <span>
                            <RiPhoneLine/>
                        </span>
                        <div>
                            <a href='tel:501816146'>
                                501-816-146
                            </a>
                            <a href='tel:500747899'>
                                500-747-899
                            </a>
                        </div>
                    </ContactItemWrapper>
                    <ContactItemWrapper>
                        <span>
                            <RiMailOpenLine/>
                        </span>
                        <div>
                            <a href='mailto:warzywapleszew@gmail.com'>
                                warzywapleszew@gmail.com
                            </a>
                        </div>
                    </ContactItemWrapper>
                    <ContactItemWrapper>
                        <div>
                            <p>
                                <b>Agromar - Pacanowice 36 a, 63-300 Pleszew</b>
                            </p>
                        </div>
                    </ContactItemWrapper>
                    <ContactItemWrapper>
                        <div>
                            <p>
                                <b>Numer Nip/VAT:</b> PL 6080034084
                            </p>
                        </div>
                    </ContactItemWrapper>
                </ul>
            </address>
        </div>
    )
}
export default Info;
