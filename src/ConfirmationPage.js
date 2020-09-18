import React from 'react';
import {Link } from "react-router-dom";

class ConfirmationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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