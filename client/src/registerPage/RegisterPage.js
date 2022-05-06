import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './registerPage.scss';
import { 
    mailValidation,
    isRequier,
    minLength3,
    maxLength15,
} from './validation';


// ------ VALIDATION ------
const formValidation = {
    companyName: {
        isTouch: false,
        errorMessage: null,
        value: ''
    },
    name: {
        isTouch: false,
        errorMessage: null,
        value: ''
    },
    address: {
        isTouch: false,
        errorMessage: null,
        value: ''
    },
    phoneMail: {
        isTouch: false,
        errorMessage: null,
        value: ''
    },
    format: {
        isTouch: false,
        errorMessage: null,
        value: ''
    },  
    password: {
        isTouch: false,
        errorMessage: null,
        value: ''
    }
}

const inputListener = (e, targetInput, validations) => {
    const { value, name } = e.target;
    let message = '';

    validations.forEach(validation => {
        const errorMassage = validation(value);
        
        if(errorMassage) {
            message = errorMassage;
        }
    });

    const errorField = targetInput.nextElementSibling.nextElementSibling.nextElementSibling;

    formValidation[name].isTouch = true;
    formValidation[name].value = value;

    if(message) {
        targetInput.classList.add('error');
        errorField.textContent = message;
        formValidation[name].errorMessage = message;
    } else {
        targetInput.classList.remove('error');
        errorField.textContent = '';
        formValidation[name].errorMessage = null;
    }
}

const nameInputValidations = [minLength3, maxLength15, isRequier];
const companyNameInputValidations = [minLength3, maxLength15, isRequier];
const mailInputValidations = [mailValidation, isRequier];
const passwordInputValidations = [ isRequier];
// ------ END OF VALIDADION ------



function RegisterPage() {
    const [companyName, setCompanyName] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [numberEmail, setNumberEmail] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [password, setPassword] = useState('');
    const [usersList, setUsersList] = useState([])


    useEffect(() => {
        Axios.get('http://localhost:3001/api/get')
            .then((response) => {
                setUsersList(response.data);
            })
    }, [])

    const submitUserInfo = () => {
        Axios.post('http://localhost:3001/register', {
            companyName: companyName,
            name: name,
            address: address,
            numberEmail: numberEmail,
            companyType: companyType,
            password: password
        }).then(() => {
            alert('Successful insert')
        })
    }

    return (
        <div className='register-page'>
            <div className='all-form'>
                <h1>Registration</h1>
                <form method='post' onSubmit={(e) => e.preventDefault()}>

                    <div className='txt_field'>
                        <input 
                            type='text' 
                            name='companyName' 
                            onChange={(e) => {
                                inputListener(e, e.target, companyNameInputValidations);
                                setCompanyName(e.target.value)
                            }}
                            required
                        />
                        <span></span>
                        <label>Company name</label>
                        <p className="error-text"></p>
                    </div>

                    <div className='txt_field'>
                        <input 
                            type='text' 
                            name="name" 
                            onChange={(e) => {
                                inputListener(e, e.target, nameInputValidations);
                                setName(e.target.value)
                            }} 
                            required
                        />
                        <span></span>
                        <label>Name Lastname</label>
                        <p className="error-text"></p>
                    </div>

                    <div className='txt_field'>
                        <input 
                            type='text' 
                            name='address' 
                            onChange={(e) => setAddress(e.target.value)} 
                            required />
                        <span></span>
                        <label>Address</label>
                        <p className="error-text"></p>
                    </div>

                    <div className='txt_field'>
                        <input 
                            type='text' 
                            name="phoneMail"
                            onChange={(e) => {
                                inputListener(e, e.target, mailInputValidations);
                                setNumberEmail(e.target.value);
                            }}
                            required />
                        <span></span>
                        <label>Telephone number or mail</label>
                        <p className="error-text"></p>
                    </div>
                    
                    <div className='select'>
                        <select 
                            name='format' 
                            id='format' 
                            onChange={(e) => setCompanyType(e.target.value)}
                        >
                            <option defaultValue disabled >Choose a company type</option>
                            <option name='companyType' value="store" >Store</option>
                            <option name='companyType' value="manufacture" >Manufacture</option>
                        </select>
                    </div>

                    <div className='txt_field'>
                        <input 
                            type='password' 
                            name="password"
                            onChange={(e) => {
                                inputListener(e, e.target, passwordInputValidations);
                                setPassword(e.target.value);
                            }}
                            required 
                        />
                        <span></span>
                        <label>Password</label>
                        <p className="error-text"></p>
                    </div>

                    <div className='txt_field'>
                        <input type='password' name="password" required />
                        <span></span>
                        <label>Repeat Password</label>
                        <p className="error-text"></p>
                    </div>

                    <button id='login-btn' value='Login' onClick={submitUserInfo}>Login</button>

                </form>
            </div>

            <div id='users-list'>
                <table>
                    <tbody>
                    {usersList.map((user) => {
                        return (
                            <tr key={Math.random()}>
                                <td>Login: {user.numberEmail}</td>
                                <td>Password: {user.password}</td>
                                <td>iv: {user.iv}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}

export  default RegisterPage;