import React, {useState} from 'react'
import FreeLesson from './FreeLesson';
import Login from './Login';
import LanguageSwitcher from '../LanguageSwitcher';

function Nav() {
    const [modalActive, setModalActive] = useState (false)
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)

        var x = document.getElementById("myTopnav");
        if (x.className === "navResponse") {
            x.className += " responsive";
        } else {
            x.className = "navResponse";
        }
    }

    return (
        <>

            <div className='navBox'>
                <div className='logoBox'>
                    <i className="fab fa-digital-ocean logo"></i>
                    <img alt='logo' src='./logo.png' height='80px' width='80px'></img>
                    <div className='logoText'>MagicCode Education</div>
                </div>
                <div className='navResponse' id='myTopnav' onClick={handleClick}>
                    <ul>
                        <li><a href="#cours">Courses</a></li>
                        <li><a href="#methods">Our methods</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <LanguageSwitcher />

                    {
                    //<div className='btnHead'>
                    //    <button className='smallBtn navBtn' onClick={() => setModalActive(true)}>Sign in</button>
                    //</div>
                    }
                    <div className='btnHead'>
                        <button className='smallBtn navBtn' onClick={() => setModalActive(true)}>Get free lesson</button>
                    </div>
                </div>
                <div className='burger' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </div>
            <FreeLesson active={modalActive} setActive={setModalActive}/>
            <Login active={modalActive} setActive={setModalActive}/>

        </>
    )
}

export default Nav