import React, { Component } from 'react';

import './alertdialog.css';
import WammoHeader from '../Layouts/WammoBuyNow/WammoBNHeader/WammoHeader'

class AlertDialog extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <WammoHeader/>
                <div className="thank-container">
                    <div className="thank-header">
                        <img src={require('../../assets/img/WPay.png')} alt="WammoPay" className="wammp-avatar"/>
                    </div>
                    <div className="thank-body">
                        <img src={require('../../assets/img/success.svg')}>
                            
                        </img>
                        <p>
                            Thank You for Purchasing
                        </p>
                        <a href="#">
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
