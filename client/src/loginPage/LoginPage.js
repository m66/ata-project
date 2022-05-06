import './loginPage.scss';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function LoginPage() {

    const [numberEmail, setnumberEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    // ========= LOGIN =========
    const login = () => {
        Axios.post('http://localhost:3001/login', {
            numberEmail: numberEmail,
            password: password
        }).then((response) => {

            if(response.status >= 300) {
                setLoginStatus(response.data.message);
            } else {
                console.log(response)
            }
        })
    }

    // ========= LOGIN END =========
    return (
        <div className='loginPage'>
            <div className='all-form'>
                <h1>Login</h1>
                <form method='post'  onSubmit={(e) => e.preventDefault()}>
                    <div className='txt_field'>
                        <input type='text' onChange={
                            (e) => setnumberEmail(e.target.value)
                        }
                        required
                        />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className='txt_field'>
                        <input 
                            type='password'
                            onChange={
                                (e) => setPassword(e.target.value)
                            }
                        required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className='pass'>Forgot Password?</div>
                    <button id='login' onClick={login}>Login</button>
                    <div className='signup_link'>
                        Nota member? <a href='#'>Signup</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;