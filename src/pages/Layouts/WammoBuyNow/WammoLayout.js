import React, { Component } from 'react';

import './WammoLayout.css'

class WammoLayout extends Component {
    render() {
        return (
            <div className="wrapper">
                {this.props.children}
            </div>
        );
    }
};

export default WammoLayout;
