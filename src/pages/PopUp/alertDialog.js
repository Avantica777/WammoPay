import React, { Component } from 'react';

import './alertdialog.css';
import WammoHeader from '../Layouts/WammoBuyNow/WammoBNHeader/WammoHeader'

class AlertDialog extends Component{
    constructor(props) {
        super(props)
        this.gotoWammo = this.gotoWammo.bind(this);
    }

    gotoWammo() {
        // do something meaningful, Promises, if/else, whatever, and then
        window.location.assign('https://wammo.io');
    }
    render() {
        return(
            <div>
                <WammoHeader/>
                <div className="thank-container">
                    <div className="thank-header">
                        <img src={require('../../assets/img/logo.svg')} alt="WammoPay" className="wammp-avatar"/>
                    </div>
                    <div className="thank-body">
                        <img src={require('../../assets/img/success.svg')}>
                            
                        </img>
                        <p>
                            Thank You for Purchasing
                        </p>
                        <a onClick={this.gotoWammo} target="_blank">
                            Back to Home
                        </a>
                    </div>
                </div>

                <div className="m-background">
                    
                </div>
            </div>
        );
    }
}

export default AlertDialog;
