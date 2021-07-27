import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import configureStore from './store/configureStore';
import routes from './routes';
import {setAuthorizationToken} from "./utils/helpers";
import {loginSuccess} from "./actions/authActions";
import jwt from 'jsonwebtoken';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  store.dispatch(loginSuccess(jwt.decode(localStorage.token)));
}

ReactDOM.render(
  <Provider store={store}>
      <div>
          <Notifications />
          <Router>
              {routes}
          </Router>
      </div>
  </Provider>,
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
