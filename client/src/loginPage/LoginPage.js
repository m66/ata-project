import './loginPage.scss';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function LoginPage() {

    const [numberEmail, setnumberEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');
    const [passwordList, setPasswordList] = useState([])

    // useEffect(() => {
    //     Axios
    //         .get('http://localhost:3001/getPassword')
    //         .then((response) => {
    //             setPasswordList(response.data)
    //         })
    // }, [])

    // ========= LOGIN =========
    const login = () => {
        Axios.post('http://localhost:3001/login', {
            numberEmail: numberEmail,
            password: password
        }).then((response) => {
            if(response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].numberEmail);
            }
        })
    }

    // const decryptPassword = (encryption) => {
    //     Axios.post('http://localhost:3001/decryptPassword', {
    //         // login: numberEmail,
    //         password: encryption.password,
    //         iv: encryption.iv
    //     }).then((response) => {
    //         console.log(response.data)
    //     })
    // }

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
                    {/* <button id='login' onClick={() => {
                        decryptPassword({
                            nu: password,
                            iv: val.iv
                        })
                    }}>Login</button> */}
                    <div className='signup_link'>
                        Nota member? <a href='#'>Signup</a>
                    </div>
                </form>
            </div>
            <div>{passwordList.map((val) => {
                return <h1>{val.password}</h1>
            })}</div>
        </div>
    )
}

export default LoginPage;