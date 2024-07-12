import React, { Component } from 'react';

export class Practice extends Component {
    render(props) {
        return (
            <div>
                <h1>My car brand is {this.props.brand}</h1>
            </div>
        );
    }
}

export default Practice;
