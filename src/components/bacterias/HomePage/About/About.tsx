import React, { useState } from 'react';
import Content from '../../../atoms/HomePage/About/Content';
import ExtraContent from '../../../atoms/HomePage/About/ExtraContent';
import Poster from '../../../atoms/HomePage/About/Poster';
import TitleSection from '../../../atoms/HomePage/About/TitleSection';
import AboutWrapper from './styles/AboutWrapper';
const About = () => {
    const [isOpen,setOpen] = useState(false);
    return(
        <AboutWrapper>
            <TitleSection 
                title='O nas'
            />
            <div className='content'>
                <Poster 
                    poster='https://cdn.pixabay.com/photo/2017/01/14/10/57/woman-1979272_960_720.jpg'
                />
                <Content 
                    behave={() => setOpen(!isOpen)}
                    content='Rośliny warzywne, warzywa, jarzyny – rośliny jednoroczne, dwuletnie lub byliny, które w całości lub w części stanowią pokarm człowieka. Mogą być spożywane w stanie surowym lub po obróbce cieplnej. Częściami użytkowymi roślin warzywnych mogą być całe rośliny lub tylko: liście, owoce, bulwy, łodygi i korzenie.Rośliny warzywne, warzywa, jarzyny – rośliny jednoroczne, dwuletnie lub byliny, które w całości lub w części stanowią pokarm człowieka. Mogą być spożywane w stanie surowym lub po obróbce cieplnej. Częściami użytkowymi roślin warzywnych mogą być całe rośliny lub tylko: liście, owoce, bulwy, łodygi i korzenie.'
                />
            </div>
            <ExtraContent
                    isOpen={isOpen} 
                    content='W czasach współczesnych Lucy i Desmond uciekają z Abstergo i dołączają do innych współczesnych asasynów – Shauna i Rebeki. Desmond powraca do animusa i przeżywa wspomnienia Ezia Auditorego da Firenze, młodego szlachcica z bogatej florenckiej rodziny. Gdy ojciec i bracia Ezia zostają zamordowani, ten przysięga pomścić ich śmierć i dowiedzieć się, jaki motyw doprowadził do tragedii. Ezio dowiaduje się o istnieniu asasynów i templariuszy, rozprawiając się z kolejnymi celami zamieszanymi w intrygę.Fabuła całej serii koncentruje się na trwającym od wieków konflikcie dwóch frakcji: asasynów i templariuszy. Głównym bohaterem produkcji jest Desmond Miles, który za pomocą maszyny zwanej animusem, potrafiącej odczytywać ludzką pamięć genetyczną, przeżywa wspomnienia swoich przodków. W założeniu fabuły w ludzkich genach zapisywane są wspomnienia przodków człowieka, które mogą być dokładnie przeanalizowane przez animusa. Gracz wciela się w ten sposób w swoich przodków będących asasynami, np. Altaïra ibn-la’Ahada, Ezia Auditorego da Firenze, Ratohnhaké:tona – a fabuła współczesna przeplata się z warstwą historyczną.Dodatek do Assassin’s Creed: Revelations, który rozszerza minigrę Podróż Desmonda. Tym razem jednak grywalną postacią jest Obiekt 16.'
            />
        </AboutWrapper>
    )
}
export default About;