import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './BnbResult.css';

import WammoHeader from '../Layouts/WammoBuyNow/WammoBNHeader/WammoHeader'

class BnbResult extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <WammoHeader/>
                <div className="result-form">

                    <div className="wpay-form-header">
                        <h3>Add your button code to your webpage</h3>
                        <p><a href="#">Log in</a> or <a href="#">Sign up</a> for a WammoPay Business account to protect your button. What's this? </p>
                        <p>You just created customized HTML code for your button. The final step is to copy the code from this page and paste it into your website editor.</p>
                        <div className="group">
                            <p>You just created customized HTML code for your button. The final step is to copy the code from this page and paste it into your website editor. </p>
                            <strong>Copy the button code:</strong>
                            <ol>
                                <li>
                                    Click <strong>Select Code</strong>.
                                </li>
                                <li>
                                    Right-click and copy the selected code.
                                </li>
                            </ol>
                            <p>If you're working with a website developer, you can paste the button code into an email and send it to your developer now.</p>
                            <br/>
                            <strong>Paste the button code in your website editor:</strong>
                            <p>The code must be pasted in the "code" view, where you can view and edit HTML.</p>
                            <ol>
                                <li>In your website editor or admin page, open the page where you want to add your button.</li>
                                <li>Look for an option to view or edit HTML.</li>
                                <li>Find the section of the page where you want your button to appear.</li>
                                <li>Right-click and paste your button code into the HTML.</li>
                                <li>Save and publish the page. (The preview function in your editor may not display the button code correctly.)</li>
                                <li>
                                    Test the button to make sure it links to a PayPal payment page.
                                </li>
                            </ol>
                            <p>
                                Need more help? 
                                <a target="_blank" href="http://www.wammopay.com/button-code-page-help" pa-marked="1">Click here</a> for additional information.
                            </p>
                        </div>
                    </div>
                    <div className="build-form-container">
                        <div id="result-pane">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#tab-website" role="tab" aria-controls="home" aria-selected="true">Website</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#tab-email" role="tab" aria-controls="profile" aria-selected="false">Email</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tab-website">
                                    <div className="tab-pane-content">
                                        <div className="leftModule">
                                            <div>
                                                <textarea className="textarea" cols="65" rows="8" id="generatedWebsiteCode" readOnly="" name="generated_website_code">
                                                    
                                                </textarea>
                                            </div>
                                            <div className="selectCodeContainer">
                                                <input className="button btnSelectCode" type="button" name="select_website_code_btn" value="Select Code" pa-marked="1"/>
                                                <Link className="submitPage editButtonLink" to='/prebuildform'>Go back to edit this button</Link>
                                            </div>
                                        </div>
                                        <div className="rightModule">
                                            <p className="heading">
                                                <strong>Buyer's View</strong>
                                            </p>
                                            <div className="previewSection">
                                                <img src={require('../../assets/img/Checkout-logo-large.png')} border="0" alt="Preview Image"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-email">
                                    <div>
                                        <textarea name="tt-email" id="tt-email" rows="6">
                                            
                                        </textarea>
                                    </div>
                                    <div className="selectCodeContainer">
                                        <input className="button btnSelectCode" type="button" name="select_website_code_btn" value="Select Code" pa-marked="1"/>
                                        <Link className="submitPage editButtonLink" to='/prebuildform'>Go back to edit this button</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group externalNote">
                        <h5>A reminder about your PayPal account</h5>
                        <p>You can put your buttons on your website and start selling. However, buyers will be required to have a PayPal account to complete the purchase. Be sure to sign up for a Premier or Business account to access payments you receive and to allow your buyers to pay with their credit cards.</p>
                    </div>

                    <div className="group">
                        <h6>Create more buttons</h6>
                        <div>
                            <div className="row">
                                <img src={require('../../assets/img/info_createsimilar_197wx72h.jpg')} border="0" className="imgBorderFull" alt="Create similar button"/>
                                <div className="morebuttonscontent">
                                    <a className="submitPage createSimilarLink" href="#" pa-marked="1">
                                        <strong>Create similar button</strong></a> | <a href="#" pa-marked="1"><strong>Create a new button</strong></a>
                                        <p className="createSimilarButton">
                                            <strong>Similar:</strong>
                                                Use the button you just created as a template for another button.
                                            <br/>
                                            <strong>New:</strong>
                                            Create a completely new button from a blank form.
                                        </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="morebuttonscontent">

                                </div>
                            </div>
                            <div className="row">

                            </div>
                        </div>
                        <div className="clear">
                            
                        </div>
                    </div>
                    <footer className="wpay-form-footer">
                        <ul>
                            <li className="first">
                                <a href="#" pa-marked="1">About WammoPay</a>
                            </li>
                            <li>
                                <a href="#" pa-marked="1">Contact Us</a>
                            </li>
                            <li>
                                <a href="#" pa-marked="1">Fees</a>
                            </li>
                            <li>
                                <a href="#" pa-marked="1">WammoPay Developers</a>
                            </li>
                            <li>
                                <a href="#" pa-marked="1">Merchant Services</a>
                            </li>
                            <li>
                                <a href="#" pa-marked="1">Worldwide</a>
                            </li>
                            <li className="last">
                                <a href="#" pa-marked="1">Site Feedback</a>
                            </li>
                        </ul>
                        <ul>
                            <li className="first">
                                <a href="#" pa-marked="1">Privacy</a>
                            </li>
                            <li>
                                <a href="#" pa-marked="1">WammoPay Blog</a>
                            </li>
                            <li>
                                <a href="#" pa-marked="1">Jobs</a>
                            </li>
                            <li>
                                <a href="#" pa-marked="1">Legal Agreements</a>
                            </li>
                            <li>
                                <a href="#" pa-marked="1">Site Map</a>
                            </li>
                            <li className="last">
                                <a href="#" pa-marked="1">eBay</a>
                            </li>
                        </ul>
                        <p id="legal">Copyright © 2019-2029 WammoPay. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        );
    }
}

export default BnbResult;
