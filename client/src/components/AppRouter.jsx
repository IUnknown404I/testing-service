import React, {useContext} from 'react';
import {AuthContext} from "../context";
import {Switch, Route, Redirect} from "react-router-dom";
import {publicRoutes, privateRoutes, ecoRoutes} from "../router/routes";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
            <Switch>

                {publicRoutes.map((route) =>
                    <Route
                        key = {Date.now() + 6}
                        component = {route.component}
                        path = {route.path}
                        exact = {route.exact}
                    />)}

                {isAuth &&
                privateRoutes.map((route) =>
                    <Route
                        key = {Date.now() + 6}
                        component = {route.component}
                        path = {route.path}
                        exact = {route.exact}
                    />)
                }

                {isAuth &&
                ecoRoutes.map((route) =>
                    <Route
                        key = {Date.now() + 6}
                        component = {route.component}
                        path = {route.path}
                        exact = {route.exact}
                    />)
                }

                {isAuth
                    ? <Redirect to='/profile'/>
                    : <Redirect to='/login'/>
                }

            </Switch>
    );
};

export default AppRouter;