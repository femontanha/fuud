import React from 'react';
import logo from '../static/spotifood.svg';
import SwitchTheme from './SwitchTheme';
import { APP_NAME } from '../constants';
import '../styles/header.scss';

const Header = () => (
    <header className="header">
        <img src={ logo } alt={ APP_NAME } />
        <SwitchTheme />
    </header>
);

export default Header;
