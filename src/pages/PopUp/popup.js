import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import CreditCardInput from 'react-credit-card-input';
import ReactPhoneInput from 'react-phone-input-2'


import './popup.css';
import Api from '../../api/api';
import WammoHeader from '../Layouts/WammoBuyNow/WammoBNHeader/WammoHeader'

class PopUp extends Component{
    constructor(props) {
        super(props)

        this.state = {
            Name: "",
            CardNumber: "",
            ExpirationMonth: "01",
            ExpirationYear: "2019",
            CVV: "",
            Address1: "",
            City: "",
            State: "",
            Country: "",
            ZipCode: "",
            Phone: "",
            Email: "",
            ExpirationDate: "",
        }

        this.data = {
            Card: {
                Name: "",
                CardNumber: "",
                ExpirationMonth: "01",
                ExpirationYear: "2019",
                CVV: "",
                Address1: "",
                City: "",
                State: "",
                Country: "",
                ZipCode: "",
                Phone: "",
                Email: "",
            },
            Charge: {
                amount: 0,
                currency: "USD",
                Description: "Pay the bill 100 EUR",
                itemName:'',
                itemID:'',
                email: "",
            },
        }

        this.data.Charge.itemName = props.location.state.params.itemName;
        this.data.Charge.itemID = props.location.state.params.itemId;
        this.data.Charge.amount = props.location.state.params.amount;
        this.data.Charge.currency = props.location.state.params.currency;
        this.data.Charge.email = props.location.state.params.email;
        console.log(this.data);
        this.sendRequest = this.sendRequest.bind(this);
        this.bringBack = this.bringBack.bind(this);
    }

    selectCountry (val) {
        this.setState({ Country: val });
    }
     
    selectRegion (val) {
        this.setState({ State: val });
    }

    sendRequest() {
        var c_val = this.state.ExpirationDate;
        var ind = c_val.indexOf('/');
        var month, year;
        if(ind == -1){
            if(parseInt(c_val.substring(0,2))>12)
            {
                ind = 1;
            }    
            else
            {
                ind = 2;
            }    
            // this.setState({ExpirationMonth: c_val.substring(0,ind)});
            month = c_val.substring(0,ind);
            if(parseInt(c_val.substring(ind)) < 19)
                // this.setState({ExpirationMonth: "2019"});
                year = "2019";
            else 
            // if(parseInt(c_val.substring(ind)) > 99)
            //     // this.setState({ExpirationYear: "2099"});
            //     year = "2099";
            // else
                // this.setState({ExpirationYear: c_val.substring(ind)});
                year = "20" + c_val.substring(ind);
        }else {
            // this.setState({ExpirationMonth: c_val.substring(0,ind)});
            month = c_val.substring(0,ind);
            console.log(c_val.substring(0, ind), ind);
            var year = "20" + c_val.substring(ind+1).replace(/\s/g, '');
            console.log(c_val.substring(ind+1), ind);
            this.setState({ExpirationYear: year});
        }

        console.log(this.data);
        var mCardnumber = this.state.CardNumber.replace(/\s/g, '');
        var tokenReqJson = {
            payment_processor: 2,
            card: {
                exp_year: year,
                exp_month: month,
                number: mCardnumber,
                currency: this.data.Charge.currency,
                cvc: this.state.CVV,
                address_city: this.state.City,
                address_country: this.state.Country,
                address_line1: this.state.Address1,
                address_line2: this.state.Address1,
                address_state: this.state.Country,
                address_zip: this.state.ZipCode,
                first_name: this.state.Name,
                last_name: this.state.Name
            }
        }
        console.log("token req json:", tokenReqJson);

        Api.getToken(tokenReqJson, (err, res)=>{
            if(err || !res){
                let _err = [];
                try {
                    _err = JSON.parse(err);
                } catch(e) {
                    _err = [err];
                }
                // this.setState({error: _err});
                console.log("some err occured on GetToken:", _err);
            } else {
                var tokenResJson = res;
                console.log("token response:", tokenResJson);
                /*
                Response json : {
                    "id": "29",
                    "object": "token",
                    "client_ip": "N/A"
                    "created": 1550634419,
                    "livemode": false,
                    "type": "credit_card",
                    "used": false
                }
                */
                var gatewayReqJson = {
                    payment_processor: 2,
                    gateway: {
                        gateway_type: "test"
                    }
                }
                Api.getGatewayId(gatewayReqJson, (err, res)=>{
                    if(err || !res){
                        let _err = [];
                        try {
                            _err = JSON.parse(err);
                        } catch(e) {
                            _err = [err];
                        }
                        // this.setState({error: _err});
                        console.log("some err occured on Get Gateway:", _err);
                    } else {

                        var gatewayResJson = res;
                        console.log("gateway response:", gatewayResJson);
                        /*
                        Response json : {
                            "id": 10,
                            "gateway_type": "test",
                            "status": "retained",
                            "created": 1550634323,
                            "redacted": false,
                            "user_id": "4504d18f-e35b-4ce0-9a64-53e66ca83a14",
                            "payment_processor_type": 2
                        }
                        */
                       
                        var transactionReqJson = {
                            payment_processor: 2,
                            charge: {
                                amount: this.data.Charge.amount,
                                currency: this.data.Charge.currency,
                                token_id: tokenResJson.id,
                                payment_gateway_id: gatewayResJson.id
                            }
                        }
                        Api.getChageTrasaction(transactionReqJson, (err, res)=>{
                            if(err || !res){
                                let _err = [];
                                try {
                                    _err = JSON.parse(err);
                                } catch(e) {
                                    _err = [err];
                                }
                                // this.setState({error: _err});
                                console.log("some err occured on transaction:", _err);
                            } else {
                                var transactionResJson = res;
                                console.log("gateway response:", transactionResJson);
                                /*
                                Response json : {
                                    "id": 6,
                                    "object": "Purchase",
                                    "amount": 5000,
                                    "amount_refunded": 0,
                                    "captured": true,
                                    "created": 1550634477,
                                    "currency": "USD",
                                    "livemode": false,
                                    "paid": true,
                                    "refunded": true,
                                    "status": "succeeded"
                                }
                                */

                                if(transactionResJson.status === "succeeded")
                                    this.props.history.push('/thankyou');
                                else
                                    alert("Transaction Failed!");
                            }
                        })
                    }
                })
            }
        })
    }

    bringBack(){
        console.log("go back?");
    }

    render() {
        let {Name, CardNumber, ExpirationMonth,ExpirationYear, CVV, Address1, City, State, Country, ZipCode, Phone, Email, ExpirationDate} = this.state;
        return(
            <div>
                <WammoHeader/>
                <div id="openModal" className="paymentPopup">
                    <div>
                        <a onClick={this.bringBack} id="close_btn" title="Close" className="close">X</a>
                        <div className="c-header">
                            <img src={require('../../assets/img/logo.svg')} alt="WammoPay" className="wammo-popup-logo"/>
                        </div>
                        <div className="b-row">
                            <label>Email</label>
                            <input type="email" name="userEmail" id="userEmail" placeholder="jonathondoe@gmail.com" value={Email} onChange={(e) => this.setState({ Email: e.target.value })} />
                        </div>
                        <div className="b-row">
                            <label>Name</label>
                            <input type="text" name="userName" id="userName" placeholder="Enter Name" value={Name} onChange={(e) => this.setState({ Name: e.target.value })} />
                        </div>
                        <div className="b-row">
                            <label>Address</label>
                            <input type="text" placeholder="Enter Full Address" id="userAddr" name="userAddr" value={Address1} onChange={(e)=>this.setState({Address1: e.target.value})}/>
                        </div>
                        <div className="b-row">
                            <label>Country</label>
                            {/* <input type="text" placeholder="Enter Country" id="userCountry" name="userCountry" value={Country} onChange={(e)=>this.setState({Country: e.target.value})}/> */}
                            <CountryDropdown id="userCountry" value={Country} placeholder="Enter Country" onChange={(val) => this.selectCountry(val)} />
                        </div>
                        <div className="b2-row">
                            <label id="label-user-city">City</label>
                            <input type="text" placeholder="Select City" id="userCity" name="userCity" value={City} onChange={(e)=>this.setState({City: e.target.value})}/>
                            <label id="label-user-state">State</label>
                            {/* <input type="text" placeholder="Select State" id="userState" name="userState" value={State} onChange={(e)=>this.setState({State: e.target.value})}/> */}
                            <RegionDropdown country={Country} value={State} id="userState" placeholder="Select State" onChange={(val) => this.selectRegion(val)} />
                        </div>
                        
                        <div className="b-row">
                            <label>Zip</label>
                            <input type="number" placeholder="Enter Zip Code" id="userZip" name="userZip" value={ZipCode} onChange={(e)=>this.setState({ZipCode: e.target.value})}/>
                        </div>
                        <div className="b-row">
                            <label>Phone</label>
                            {/* <input type="text" placeholder="Enter Phone Number" id="userPhone" name="userPhone" value={Phone} onChange={(e)=>this.setState({Phone: e.target.value})}/> */}
                            <ReactPhoneInput
                                defaultCountry={'us'}
                                value={Phone}
                                onChange={(val) => this.setState({Phone: val})}
                            />
                        </div>
                        {/* <div className="b-row">
                            <label>CardNumber</label>
                            <input type="text" inputMode="numeric" pattern="[0-9]*" placeholder="4111 1111 1111 1111" id="cardNumber" name="cardNumber" value={CardNumber} onKeyDown={(e)=>this.deleteCardNumber(e)} onChange={(e)=>this.setCardNumber(e)} />
                        </div>
                        <div className="b2-row">
                            <label id="mmyy">MM/YY</label>
                            <input type="text" size={5} maxLength={7} inputMode="numeric" placeholder="10/18" id="expireDate" name="expireDate" value={ExpirationDate} onChange={(e)=>this.getExpMonthYear(e)}/>
                            <label id="cvc">CVC</label>
                            <input type="text" inputMode="numeric" placeholder="706" id="cvcNum" name="cvcNum" value={CVV} onChange={(e)=>this.setState({CVV: e.target.value})}/>
                        </div> */}
                        <div className="b-row">
                            <label>Credit Card</label>
                            <CreditCardInput
                                containerStyle={
                                    {
                                        position: 'absolute',
                                        left: '25%',
                                        border: '1px solid #aaa',
                                        height: '6%',
                                        width: '60%',
                                        'border-radius': '4px',
                                        outline: 'none',
                                        padding: '0px !important',
                                        'box-sizing': 'border-box',
                                        transition: '.3s',
                                        'font-size': '15px',
                                       ' font-family': "'Montserrat' !important",
                                        'font-weight': '400 !important',
                                    }
                                }
                                cardNumberInputProps={{ value: CardNumber, onChange: e => this.setState({CardNumber: e.target.value}) }}
                                cardExpiryInputProps={{ value: ExpirationDate, onChange: e => this.setState({ExpirationDate: e.target.value}) }}
                                cardCVCInputProps={{ value: CVV, onChange: e => this.setState({CVV: e.target.value}) }}
                                fieldClassName="input"
                                // customTextLabels={{
                                //     invalidCardNumber: 'Invalid card Number',
                                //     expiryError: {
                                //         invalidExpiryDate: 'Expiration date is invalid',
                                //         monthOutOfRange: 'input correct month: 01-12',
                                //         yearOutOfRange: 'input year between 2019-2099',
                                //         dateOutOfRange: 'date out of range'
                                //     },
                                //     invalidCvc: 'invalid cvc',
                                //     invalidZipCode: 'invalid zip code',
                                //     cardNumberPlaceholder: '4242 4242 4242 4242',
                                //     expiryPlaceholder: 'MM/YY',
                                //     cvcPlaceholder: '706',
                                //     zipPlaceholder: '473005'
                                // }}
                            />
                        </div>
                        
                        <div className="b-row">
                            <div className="checkButton">
                                <label> <input type="checkbox"/> <span>Remember Me</span> </label>
                            </div>
                        </div>
                        <input type="button" id="pay-button" value="Pay $20,50.00" onClick={this.sendRequest} />
                    </div>
                </div>

                <div className="m-background">
                    
                </div>
            </div>
        );
    }
}

export default PopUp;
