import React, { PureComponent } from 'react';
import { Redirect } from "react-router-dom";
import getTokenFromHash from '../lib/getTokenFromHash';
import { APP_NAME, SPOTIFY_URL, SPOTIFY_AUTHORIZE } from '../constants';
import '../styles/login.scss';

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasRedirect: false,
        };
    }

    componentDidMount() {
        const { history } = this.props;
        const { from } = this.props.location.state;
        const newToken = from.hash !== '' ? getTokenFromHash(from.hash) : null;

        if (newToken) {
            localStorage.setItem('access-token', newToken);
            history.push(`${process.env.PUBLIC_URL}/`);
            this.setState({ hasRedirect: true });
        }
    }

    render() {
        const { from } = this.props.location.state;
        const { hasRedirect } = this.state;

        if (hasRedirect) return <Redirect to={ from } />;

        return(
            <div className="app-login">
                <h1 className="app-login__title">
                    Bem vinda(o) ao { APP_NAME }
                </h1>
                <p className="app-login__description">
                    Para explorar nossa experiência, você precisa ter uma conta no Spotify.
                </p>
                <p className="app-login__disclaimer">
                    Não tem uma conta no Spotify? <a href={ SPOTIFY_URL } className="app-login__link">Criar uma conta</a>.
                </p>
                <a href={ SPOTIFY_AUTHORIZE } className="app-login__btn">
                    Logar com o Spotify
                </a>
            </div>
        )
    }
};

export default Login;
