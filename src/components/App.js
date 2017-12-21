import React, { Component } from 'react';
import '../assets/stylesheets/components/App.scss';

class App extends Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}

export default App;
