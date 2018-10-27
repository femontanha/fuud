import React from 'react';
import { Link } from "react-router-dom";
import bg from '../static/404.png';
import '../styles/notfound.scss';

export default () => (
    <div className="app-notfound">
        <h1 className="app-notfound__title">Página não encontrada!</h1>
        <img className="app-notfound__img" src={bg} alt="Página não encontrada" />
        <Link className="app-notfound__link" to="/">Página Inicial</Link>
    </div>
);
