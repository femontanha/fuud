import React from 'react';
import '../styles/switch-theme.scss';

const handleClick = () => {
    // TODO: Save localstorage
    document.body.classList.toggle('dark');
};

const SwitchTheme = () => {
    return (
        <button className="switch-theme" onClick={ handleClick }>
            Trocar Tema
        </button>
    );
};

export default SwitchTheme;
