import React, {Component} from 'react';
import Currency from 'react-currency-formatter';
import './Balance.scss'

class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: this.getClassName(props.balance),
            amount: props.balance
        };
    }

    getClassName = (balance) => {
        if(balance >= 0) {
            return 'text-success';
        }
        return 'text-danger';
    };

    render() {
        return <span className={this.state.className}>
            <Currency
                quantity={this.state.amount}
                currency="EUR"
            />
        </span>;
    }
}

export default Balance;
