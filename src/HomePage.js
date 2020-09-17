import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
        alert('Registering');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Register" />
            </form>
        );
    }
}

export default HomePage;