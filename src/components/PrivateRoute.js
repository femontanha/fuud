import React from 'react';
import {
    Route,
    Redirect,
  } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const accessToken = localStorage.getItem('access-token');

    return (
      <Route
        {...rest}
        render={props =>
            accessToken ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: `${process.env.PUBLIC_URL}/login`,
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;
