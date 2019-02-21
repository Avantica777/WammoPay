import React, { Component } from 'react';

class getFormData extends Component{
    constructor(props) {
        super(props)
        this.state = {
            itemName:'',
            itemID:'',
            amount: 0,
            currency: "USD",
            email: "",
        }
        this.state = props.match
        this.props.history.push(
            '/popup',
            this.state
        );
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default getFormData;
