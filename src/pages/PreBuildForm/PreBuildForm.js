import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './PreBuildForm.css';
import Api from '../../api/api';
import WammoHeader from '../Layouts/WammoBuyNow/WammoBNHeader/WammoHeader'

class PreBuildForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            itemName:'',
            itemID:'',
            amount: 0,
            currency: "USD",
            email: "",
        }
        // this.state = props.location.state.params;
        // console.log(this.state);
        this.sendRequest = this.sendRequest.bind(this);
    }

    sendRequest() {
        console.log("here are the values:", this.state);
        Api.generateButton(this.state, (err, res)=>{
            this.props.history.push('/bnbresult');
            if(err || !res){
                let _err = [];
                try {
                    _err = JSON.parse(err);
                } catch(e) {
                    _err = [err];
                }
                // this.setState({error: _err});
                console.log("some err occured:", _err);
            } else {
                this.props.history.push('/bnbresult');
            }
        })
    }

    render() {
        let {itemName, itemID, amount, currency, email} = this.state;
        return(
            <div>
                <WammoHeader/>
                <div className="w-pay-form-container">
                    <div className="wpay-form-header">
                        <h3>Create WammoPay payment button</h3>
                        <p>WammoPay payment buttons are an easy way to accept payments. Check the WammoPay <a href="#">Payments Standard Overview</a> for more information.</p>
                        <p>Use this page to customize your button and create the HTML you’ll need to copy and paste into your website. <a href="#">Learn more</a>.</p>
                        <p>Having trouble viewing this page?</p>
                    </div>
                    <div className="wpay-form-main-container">
                        <div className="form-main-content">
                            <div className="accordion" id="wpay-form-step-list">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Step 1: Choose a button type and enter your payment details
                                            </button>
                                        </h5>
                                    </div>
                                    
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#wpay-form-step-list">
                                        <div className="card-body">
                                            <div className="demoLink">
                                                <a target="_blank" pa-marked="1">
                                                    <span className="small">Which button should I choose?</span>
                                                </a>
                                            </div>
                                            <div className="choose-btn">
                                                <label htmlFor="buttonType">Choose a button type</label>
                                                <select id="buttonType" defaultValue="services" name="button_type">
                                                    <option value="products">Shopping cart</option>
                                                    <option value="services">Buy Now</option>
                                                    <option value="donations">Donations</option>
                                                    <option value="subscriptions">Subscriptions</option>
                                                    <option value="auto_billing">Automatic Billing</option>
                                                    <option value="payment_plan">Installment Plan</option>
                                                </select>
                                                <div className="fieldNote">Note: <a className="submitPage loginSavedSubmit" pa-marked="1">Log in</a> to My Saved Buttons to create a new button similar to an existing button.</div>
                                            </div>
                                            <div className="item-attr">
                                                <div className="item-name">
                                                    <label htmlFor="itemName">Item name</label>
                                                    <input type="text" className="text xlarge" name="product_name" id="itemName" value={itemName} onChange={(e) => this.setState({ itemName: e.target.value })} />
                                                </div>
                                                <div className="item-id">
                                                    <label htmlFor="itemID">
                                                        Item ID
                                                        <span className="fieldNote"> (optional) </span>
                                                        <span className="autoTooltip" title="" tabIndex="0">
                                                            What's this?
                                                            <span className="accessAid">
                                                                You can assign an Item ID as a unique identifier to make tracking easier
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <input type="text" className="text xlarge" name="product_id" id="itemID" value={itemID} onChange={(e) => this.setState({ itemID: e.target.value })} />
                                                </div>
                                            </div>
                                            <div className="price-currency">
                                                <div className="floatLeft">
                                                    <label htmlFor="itemPrice">Price</label>
                                                    <input type="text" className="text xlarge" name="item_price" id="itemPrice" value={amount} onChange={(e) => this.setState({ amount: e.target.value })} />
                                                </div>
                                                <div className="floatLeft">
                                                    <label htmlFor="itemPriceCurrency">Currency</label>
                                                    <select id="BillingAmountCurrency" name="item_price_currency" className="currencySelect" defaultValue={currency} onChange={(e) => this.setState({ currency: e.target.value })}>
                                                        <option value="USD" title="$">USD</option>
                                                        <option value="AUD" title="$">AUD</option>
                                                        <option value="BRL" title="R$">BRL</option>
                                                        <option value="GBP" title="£">GBP</option>
                                                        <option value="CAD" title="$">CAD</option>
                                                        <option value="CZK" title="">CZK</option>
                                                        <option value="DKK" title="">DKK</option>
                                                        <option value="EUR" title="€">EUR</option>
                                                        <option value="HKD" title="$">HKD</option>
                                                        <option value="HUF" title="">HUF</option>
                                                        <option value="ILS" title="₪">ILS</option>
                                                        <option value="JPY" title="¥">JPY</option>
                                                        <option value="CNY" title="¥">CNY</option>
                                                        <option value="MXN" title="$">MXN</option>
                                                        <option value="TWD" title="NT$">TWD</option>
                                                        <option value="NZD" title="$">NZD</option>
                                                        <option value="NOK" title="">NOK</option>
                                                        <option value="PHP" title="P">PHP</option>
                                                        <option value="PLN" title="">PLN</option>
                                                        <option value="RUB" title="">RUB</option>
                                                        <option value="SGD" title="$">SGD</option>
                                                        <option value="SEK" title="">SEK</option>
                                                        <option value="CHF" title="">CHF</option>
                                                        <option value="THB" title="฿">THB</option>
                                                    </select>
                                                    <a target="_blank" className="infoLink" pa-marked="1">Need multiple prices?</a>
                                                </div>
                                            </div>
                                            <div className="customize-btn-show">
                                                <div className="customizeButtonSection">
                                                    <div className="borderBox">
                                                        <p className="heading">
                                                            <strong>Customize button</strong>
                                                        </p>
                                                        <div id="customizeSection">
                                                            <p id="addDropdownPrice" className="hideShow opened">
                                                                <label htmlFor="dropdownPrice">
                                                                    <input className="checkbox" type="checkbox" id="dropdownPrice" name="dropdown_price" value="createdDropdownPrice"/>
                                                                    <span className="products">
                                                                        Add drop-down menu with price/option&nbsp;
                                                                    </span>
                                                                    <span className="subscriptions accessAid fadedOut">
                                                                        Add a dropdown menu with prices and options
                                                                    </span>
                                                                    <a target="_blank" className="infoLink exampleLink" pa-marked="1">Example</a>
                                                                </label>
                                                            </p>

                                                            <p id="addDropdown" className="hideShow opened">
                                                                <label htmlFor="dropdown">
                                                                    <input className="checkbox" type="checkbox" id="dropdown" name="dropdown" value="createdDropdown"/>
                                                                    <span className="hideShow accessAid hide" id="dropDownLabelForSubscription">
                                                                        Add a dropdown menu 
                                                                    </span>
                                                                    <span id="dropDownLabel" className="opened">
                                                                        Add drop-down menu&nbsp;
                                                                    </span>
                                                                    <a target="_blank" className="infoLink exampleLink" pa-marked="1">Example</a>
                                                                </label>
                                                            </p>

                                                            <p id="addTextfield" className="hideShow opened">
                                                                <label htmlFor="textfield">
                                                                    <input className="checkbox" type="checkbox" id="textfield" name="textfield" value="createdTextfield"/>
                                                                    Add text field&nbsp;
                                                                    <a target="_blank" className="infoLink exampleLink" pa-marked="1">Example</a>
                                                                </label>
                                                            </p>

                                                            <span id="buttonAppLink" className="collapsed">
                                                                <a pa-marked="1">Customize text or appearance</a>
                                                                <span className="fieldNote">
                                                                        (optional)
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="buyerViewSection">
                                                        <p className="heading"><strong>Your customer's view</strong></p>

                                                        <p className="hideShow opened previewImageSection">
                                                            <img id="previewImage" src={require('../../assets/img/Checkout-logo-large.png')} border="0" alt="Preview Image"/>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ste-container">
                                                <div className="shipping">
                                                    <label htmlFor="itemShippingAmount">Shipping</label>
                                                    <input className="text" type="text" id="itemShippingAmount" size="9" name="item_shipping_amount"/>
                                                    <span className="currencyLabel">USD</span>
                                                    <div className="fieldNote">Note: <a className="submitPage loginSubmit" pa-marked="1">Log in</a> to access settings in your profile.</div>
                                                </div>
                                                <div className="tax-rate">
                                                    <label htmlFor="itemTaxAmount">Tax rate</label>
                                                    <input className="text" type="text" id="itemTaxAmount" size="9" name="item_tax_amount"/>
                                                    <span>%</span>
                                                    <div className="fieldNote">Note: <a className="submitPage loginSubmit" pa-marked="1">Log in</a> to access settings in your profile.</div>
                                                </div>
                                                <div className="email-addr">
                                                    <label htmlFor="receiveEmailAddress">Email address to receive payments</label>
                                                    <input type="text" className="text xlarge" name="receive_email_address" id="receiveEmailAddress" value={email} onChange={(e) => this.setState({ email: e.target.value })} />
                                                    <div className="fieldNote">Note: <a className="submitPage loginSubmit" pa-marked="1">Log in</a> if you already have a WammoPay account.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Step 2: Track inventory, profit &amp; loss (optional)
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#wpay-form-step-list">
                                        <div className="card-body">
                                            you can add your comment here...
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Step 3: Customize advanced features (optional)
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#wpay-form-step-list">
                                        <div className="card-body">
                                            You can add your comment here...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-primary" id="create-wpay-form" onClick={this.sendRequest} name="create_button_submit">Create Button</a>
                    </div>
                    <footer className="wpay-form-footer">
                        <ul>
                            <li className="first">
                                <a pa-marked="1">About WammoPay</a>
                            </li>
                            <li>
                                <a pa-marked="1">Contact Us</a>
                            </li>
                            <li>
                                <a pa-marked="1">Fees</a>
                            </li>
                            <li>
                                <a pa-marked="1">WammoPay Developers</a>
                            </li>
                            <li>
                                <a pa-marked="1">Merchant Services</a>
                            </li>
                            <li>
                                <a pa-marked="1">Worldwide</a>
                            </li>
                            <li className="last">
                                <a pa-marked="1">Site Feedback</a>
                            </li>
                        </ul>
                        <ul>
                            <li className="first">
                                <a pa-marked="1">Privacy</a>
                            </li>
                            <li>
                                <a pa-marked="1">WammoPay Blog</a>
                            </li>
                            <li>
                                <a pa-marked="1">Jobs</a>
                            </li>
                            <li>
                                <a pa-marked="1">Legal Agreements</a>
                            </li>
                            <li>
                                <a pa-marked="1">Site Map</a>
                            </li>
                            <li className="last">
                                <a pa-marked="1">eBay</a>
                            </li>
                        </ul>
                        <p id="legal">Copyright © 2019-2029 WammoPay. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        );
    }
}

export default PreBuildForm;
