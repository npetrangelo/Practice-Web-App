import React from 'react';
import {Link } from "react-router-dom";

class ConfirmationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>
                    Name:
                </label>
                <br/>
                <label>
                    Address:
                </label>
                <br/>
                <label>
                    Email:
                </label>
                <br/>
                <label>
                    School:
                </label>
                <br/>
                <label>
                    Date:
                </label>
                <br/>
                <label>
                    Status:
                </label>
                <br/>
                <label>
                    Payment:
                </label>
                <br/>
                <Link to="/form">
                    <button>Back</button>
                </Link>
                <Link to="/complete">
                    <button>Register</button>
                </Link>
            </div>
        );
    }
}

export default ConfirmationPage;