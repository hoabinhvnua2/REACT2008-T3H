import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function AuthorRoute({component: Component, ...rest}) {
    return (
        <Route {...rest} render={ props => {
            if (!localStorage.getItem('user')) {
                return <Redirect to={{pathname: '/login'}} />
            }
            return <Component {...props} />
        }} />
    );
}