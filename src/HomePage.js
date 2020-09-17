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
            <div>
                <img src="https://i.ytimg.com/vi/suw63h_LQbU/maxresdefault.jpg" alt="Girl in a jacket" width="500" />
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Register" />
                </form>
            </div>
        );
    }
}

export default HomePage;