import './header.scss';
import logo from '../images/logo.png';
import logoFlagAM from '../images/armenia.png';
import logoFlagRS from '../images/russia.png';
import { Link } from 'react-router-dom';
import changeMode from './localstorageDarkLight';

function Header() {

    function chakMode() {
        const modeBtn = document.getElementById('mode-button');
        const body = document.querySelector('body');
        const mode = localStorage.getItem('mode');
    
        if(!modeBtn.classList.length) {
            if(!mode) {
                modeBtn.classList.add('dark-button');
            } else {
                let myMode;
                if(mode === 'light') {
                    myMode = 'dark';
                    body.style.background = 'white';
                } else {
                    myMode = 'light'
                    body.style.background = 'grey';
                }
                modeBtn.classList.add(`${myMode}-button`);
            }
        }
    }

    setTimeout(() =>{
        chakMode()
    }, 0)

    return (
        <div className='header'>
                <Link to='/'>
                    <img src={logo} alt="" className='logo'/>
                </Link>
            <div className='buttonsCollection'>
                <div className='light-dark-modes'>
                    <div id='mode-button' onClick={changeMode}></div>
                </div>
                <div className='registerLogin'>
                    <ul>
                        <Link to='/register-page'>
                            <li><button>Register</button></li>
                        </Link>
                        <Link to='/login-page'>
                            <li><button className='logInBtn'>Login</button></li>
                        </Link>
                    </ul>
                </div>
                <div className='languages'>
                    <ul>
                        <li><img src={logoFlagAM} alt="" className='logo'/></li>
                        <li><img src={logoFlagRS} alt="" className='logo'/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;