export default function changeMode(mode) {

    const $MODE_BTN = document.getElementById('mode-button');
    const $BODY = document.querySelector('body');

    if(!localStorage.getItem('mode')){
        localStorage.setItem('mode', 'light');
    }

    if(localStorage.getItem('mode') === 'light') {
        $MODE_BTN.classList.add(`${localStorage.getItem('mode')}-button`);
        localStorage.setItem('mode', 'dark');
        $MODE_BTN.classList.remove('dark-button');
        $BODY.style.background = 'grey';
    } else {
        $MODE_BTN.classList.add(`${localStorage.getItem('mode')}-button`);
        localStorage.setItem('mode', 'light');
        $MODE_BTN.classList.remove('light-button');
        $BODY.style.background = 'white';
    }
}
