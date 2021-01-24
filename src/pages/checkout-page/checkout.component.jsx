import React from 'react'  ;
import { connect } from 'react-redux' ;
import { createStructuredSelector } from 'reselect';
import { cartItemTotal } from '../../redux/cart/cart.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component' ;
import CheckoutItem from '../../components/checkout-item/checkout-item.component' ;
 
import './checkout.styles.scss'
const CheckoutPage = ({cartItems, Total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Discription</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
        <span className="total">TOTAL: ${Total}</span>
        <div className='test-warning'>
            *Please use these following test credit card for payment*
            <br />
            4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
        </div>
        <StripeCheckoutButton price={Total}/>
    </div>
);

const mapStateToprops = createStructuredSelector({
    cartItems : selectCartItems,
    Total: cartItemTotal
})

export default connect(mapStateToprops)(CheckoutPage) ;