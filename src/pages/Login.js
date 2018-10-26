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
            history.push('/');
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
                    Welcome to { APP_NAME }
                </h1>
                <p className="app-login__description">
                    To explore our experience, you need to login with your Spotify account.
                </p>
                <p className="app-login__disclaimer">
                    Don't have Spotify account? <a href={ SPOTIFY_URL } className="app-login__link">Create an account</a>.
                </p>
                <a href={ SPOTIFY_AUTHORIZE } className="app-login__btn">
                    Login with Spotify
                </a>
            </div>
        )
    }
};

export default Login;
