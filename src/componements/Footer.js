import { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
    const [inputValue, setInputValue] = useState('');
    function handleInput(e) {
        setInputValue(e.target.value)
    };
    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Une adresse valide contient une arobase « @ ».");
        }
    };
    return (
        <footer className='footer'>
            <div className='footer__element'>Pour les passionné.e.s de plantes 🌿🌱🌵 !</div>
            <div className='footer__element'>Laissez-nous votre mail :</div>
            <input 
                placeholder='votre mail'
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    );
};

export default Footer;