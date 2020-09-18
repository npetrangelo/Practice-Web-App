import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RegistrationForm from './RegistrationForm';
import HomePage from "./HomePage";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
          <Route exact path="/form" component={RegistrationForm} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// TODO Make HTML form elements to render

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
