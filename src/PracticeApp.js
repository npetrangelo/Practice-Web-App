import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import RegistrationForm from "./RegistrationForm";
import ConfirmationPage from "./ConfirmationPage";
import RegisteredPage from "./RegisteredPage";

class PracticeApp extends React.Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.authenticated = false;
    }

    componentDidMount() {
        // this.authenticated = this.form.current.state.authenticated;
    }

    isAuthenticated = () => {
        return this.form.current.component.state.authenticated;
    }

    render() {
        return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/form" component={RegistrationForm} ref={this.form} />
                {
                    //this.authenticated &&
                    <Route exact path="/confirm" component={ConfirmationPage} />
                }
                <Route exact path="/complete" component={RegisteredPage} />
            </Switch>
        </BrowserRouter>
        );
    }
}

export default PracticeApp;