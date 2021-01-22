import React from 'react' ;
import { removeItemToCart , decreaseAndRemoveItem , addCartItems } from '../../redux/cart/cart.actions' ;
import { connect } from 'react-redux' ;


import './checkout-item.styles.scss' ; 


const CheckoutItem = ({cartItem , removeItem , addItem , decreaseRemoveItem }) => {
    const {name, price, quantity, imageUrl} = cartItem;
    return (
         <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>
                { name }
            </span>
            <span className='quantity'>
                <div onClick={() => decreaseRemoveItem(cartItem)} className='arrow'>
                     &#10094;        
                </div>
                <span className='value'>
                    { quantity }
                </span> 
                <div onClick={() =>  addItem(cartItem)} className='arrow'>
                    &#10095;      
                </div>
             </span>
             <span className='price'>
                 { price }
             </span>
             <div  onClick={() =>  removeItem(cartItem)} className='remove-button'>
                 &#10005;
             </div>
         </div>
    
)}

const mapDispatchToProps = dispatch => ({
    removeItem : item => dispatch(removeItemToCart(item)),
    addItem : item => dispatch(addCartItems(item)),
    decreaseRemoveItem : item => dispatch(decreaseAndRemoveItem(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem) ;