import React from 'react' ;
import StripeCheckout from 'react-stripe-checkout' ;

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100 ;
    const publicableKey = 'pk_test_51ICzwkBGd1VrKDnpfmPUTSVuNJHyT2AWkU4dT1uhPQXpcO4M7577wiCzuBE6ACyA1JalopmmHBxAVxF0xlK3iEjv00wGeE3Pl0' ;
    const noToken = token => {
        console.log(token) ;
        alert('Pay Seccessfull')
    }
    return (
    <StripeCheckout 
    label='Pay Now'
    name='CRWN CLOTHING Pvt. Ltd.'
    shippingAddress
    billingAddress
    description={`Your total is $${price}`}
    image='https://sendeyo.com/up/d/f3eb2117da'
    panelLabel='Pay Now'
    amount={priceForStripe}
    token={noToken}
    stripeKey={publicableKey}
    />
    )
};

export default StripeCheckoutButton ;