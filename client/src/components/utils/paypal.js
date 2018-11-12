import React, { Component } from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout';

class PayPal extends Component {
    render () {

        const onSuccess = (payment) => {
            this.props.onSuccess(payment);
        }

        const onCancel = (data) => {

        }

        const onError = (err) => {

        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.toPay;

        const client = {
            sandbox: '....',
            production: ''
        }

        return (
            <div>
                <PaypalExpressBtn
                    env={env}
                    // client={client} 
                    currency={currency}
                    total={total}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                    style={{
                        size:'large',
                        color:'blue',
                        shape:'rect',
                        label:'checkout'
                    }} 
                />
            </div>
        )
    }
}

export default PayPal