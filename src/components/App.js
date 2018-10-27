import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import Header from './Header';
import '../styles/app.scss';

class App extends React.Component {
    render() {
        return (
            <Router>
                <main className="app-main">
                    <Header />
                    <Route path="/login" component={Login} />
                    <PrivateRoute exact path="/" component={ Home } />
                </main>
            </Router>
        );
    }
};

export default App;
