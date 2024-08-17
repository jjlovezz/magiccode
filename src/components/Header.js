import React, {useState} from 'react'
import {Container} from 'react-bootstrap';
import Nav from './Nav.js';
import FreeLesson from './FreeLesson';
import { useTranslation } from 'react-i18next';

function Header() {
    const [modalActive, setModalActive] = useState (false)
    const { t } = useTranslation();

    return (
        <>
            <Container fluid className='head'>
                <Nav/>
                <FreeLesson active={modalActive} setActive={setModalActive}/>
                
                <div className='headcomp'>

                    <div className='headerBlock'>
                        <Container className='headerContainer'>
                            <div className='he-title'>
                                <h1>{t('welcome')}</h1>
                            </div>
                            <div className='he-description'>
                            <p>{t('welcome_age')}</p>
                            </div>
                            <div className='he-button'>
                            <button className='bigBtn' onClick={() => setModalActive(true)}>Get free lesson</button>
                            </div>
                        </Container>
                    </div>

                </div>
                
            </Container>
            
        </>
    )
}

export default Header