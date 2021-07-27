import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Authenticate from './components/common/Authenticate';
import App from './components/App';
import LoginForm from "./components/login/LoginForm";
import RegistrationForm from "./components/register/RegistrationForm";
import EmailSubmit from "./components/reset/EmailSubmit";
import PasswordSubmit from "./components/reset/PasswordSubmit";
import ShoppingLists from "./components/shopping_lists/ShoppingLists";

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={RegistrationForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/reset" component={EmailSubmit} />
        <Route exact path="/auth/password/:token" component={PasswordSubmit} />
        <Route exact path="/dashboard" component={Authenticate(ShoppingLists)} />
    </Switch>
);
