export const nameVlaidation = (input) => {
    const regex = /^[a-zA-Z]{2,30}$/;

    return regex.test(input) ? undefined : 'Write a correct name!';
}

export const phoneValidation = (input) => {
    const regex = /^\+374?[-. ]?([0-9]{2})[-. ]?([0-9]{3})\)?[-. ]?([0-9]{3})$/;

    return regex.test(input) ? undefined : `Must be a phone number!`;
}

export const mailValidation = (input) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return regex.test(String(input).toLocaleLowerCase()) ? undefined : 'Must be a mail!';
}

export const isRequier = (input) => input.length ? undefined : 'Required field!';

const minLength = (length) => (input) => input.length >= length ? undefined : `Min length must be ${length}!`;
export const minLength3 = minLength(3);

const maxLength = (length) => (input) => input.length <= length ? undefined : `Max length must be ${length}!`;
export const maxLength15 = maxLength(15);

export const passwordValidation = (input) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    return regex.test(input) ? undefined : 'Password must be strong!';
}

export const  priceValidate = (input) => {
    const regex = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;

    return regex.test(input) ? undefined : 'Must be correct for price!';
}