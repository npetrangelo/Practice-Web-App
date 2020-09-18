import React from 'react';
import {Link } from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src="https://i.ytimg.com/vi/suw63h_LQbU/maxresdefault.jpg" alt="Boston" width="500" />
                <Link to="/form">
                    <button>Register</button>
                </Link>
            </div>
        );
    }
}

export default HomePage;