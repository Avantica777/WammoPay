import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './buynowbutton.css';

import WammoHeader from '../Layouts/WammoBuyNow/WammoBNHeader/WammoHeader'

class BuyNowButton extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isDisable: false,
            modalcontent: ""
        }
        this.setModalContent = this.setModalContent.bind(this);
    }

    setModalContent(btn_num) {
        switch(btn_num){
            case 11:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" alt="Check out with PayPal" />'});
            break;
                
            case 21:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png" alt="Check out with PayPal" />'})
            break;
                
            case 31:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-small.png" alt="Check out with PayPal" />'})
            break;
    
            case 41:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" alt="Check out with PayPal" />'})
            break;
            case 51:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png" alt="Check out with PayPal" />'})
            break;
            case 61:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-small.png" alt="Check out with PayPal" />'})
            break;
            case 71:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" alt="Check out with PayPal" />'})
            break;
            case 81:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png" alt="Check out with PayPal" />'})
            break;
            case 91:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-small.png" alt="Check out with PayPal" />'})
            break;
            case 12:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/credit-logo-large.png" alt="Check out with PayPal" />'})
            break;
            case 22:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/credit-logo-medium.png" alt="Check out with PayPal" />'})
            break;
            case 32:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/credit_logo_h_200x51.png" alt="Check out with PayPal" />'})
            break;
            case 42:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/credit-logo-large.png" alt="Check out with PayPal" />'})
            break;
            case 52:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/credit-logo-medium.png" alt="Check out with PayPal" />'})
            break;

            default:
                this.setState({ modalcontent: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" alt="Check out with PayPal" />'})
            break;
        }
    }

    render() {
        return(
            <div>
                <WammoHeader/>
                <div role="main" id="main-app" className="main-responsive">
                    <section className="row-fluid row-first">
                        <div className="containerCentered">
                            <div className="span10 center-block center-text text-center reverseLink editorial-container">
                                <div className="editorial-cell ">
                                    <h1 className="x-large h2">Let’s button up your business.</h1>
                                    <p className="contentPara">Start accepting credit cards, debit cards, bank accounts, and of course WammoPay on your site. 
                                        <br/> Setup is fast and easy. We’ll help you every step of the way.
                                        <br/>
                                        <br/>
                                        <a>Get paid on your website</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="button-panel">
                        <div className="btn-panel-heading">
                            <h2>
                                Update your existing buttons
                            </h2>
                            <p>
                                If you already accept WammoPay on your website, we have new button images. Grab the code and replace your existing button images.
                            </p>
                        </div>
                        <div className="btn-panel-container">
                            <div className="btn-panel-pane-left">
                                <a href="#getImgSrc" className="checkout-button b11" onClick={() => this.setModalContent(11)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b21" onClick={() => this.setModalContent(21)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b31" onClick={() => this.setModalContent(31)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b11" onClick={() => this.setModalContent(41)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b21" onClick={() => this.setModalContent(51)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b31" onClick={() => this.setModalContent(61)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b11" onClick={() => this.setModalContent(71)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b21" onClick={() => this.setModalContent(81)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b31" onClick={() => this.setModalContent(91)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                            </div>
                            <div className="btn-panel-pane-right">
                                <a href="#getImgSrc" className="checkout-button b12" onClick={() => this.setModalContent(12)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b22" onClick={() => this.setModalContent(22)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b32" onClick={() => this.setModalContent(32)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b12" onClick={() => this.setModalContent(42)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b22" onClick={() => this.setModalContent(52)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b32" onClick={() => this.setModalContent(62)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                                <a href="#getImgSrc" className="checkout-button b12" onClick={() => this.setModalContent(72)} data-width="228" data-height="44" data-alt="Check out with WammoPay" pa-marked="1"><span>Get Code</span></a>
                            </div>
                        </div>
                    </section>
                    <section className="build-btn-panel">
                        <div className="containerCentered">
                            <div className="span12">
                                <h2 className="headline large">Build a new button</h2>
                            </div>
                        </div>
                        <div className="containerCentered">
                            <div className="span6">
                                <p className="contentPara">If you already have an account and want to create a new button to accept payments and donations, our javascript buttons allow you to get started quickly.</p>
                                <a className="contentLink" href="#openModal" pa-marked="1">Create a javascript button</a>
                            </div>
                            <div className="span6">
                                <p className="contentPara">If you already have an account and want to create a new button with product selections and options our HTML button factory allows for the most flexibility.</p>
                                {/* <a className="contentLink" href="/prebuildform" pa-marked="1">Create an HTML form</a> */}
                                <Link className="contentLink" to="/prebuildform">Create an HTML form</Link>
                            </div>
                        </div>
                    </section>
                    
                    <div id="getImgSrc" className="modalDialog">
                        <div>
                            <a href="#close" title="Close" className="close">X</a>
                            <div>
                                <div className="dlg-header">
                                    <h4>Copy and paste this code</h4>
                                </div>
                                <div className="dlg-container">
                                    <textarea readOnly="readonly" rows="6" id="tt-imgsrc" value={this.state.modalcontent}></textarea>
                                </div>
                                <div className="dlg-comment">
                                    <h6>Replace your current button image using this code</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyNowButton;
