import React from 'react' ;
import { ReactComponent as ShopingBag } from '../../assets/shoping-bag/shoping-bag.svg' ;
import './cart-icon.styles.scss' ;

const CartIcon = () => (
    <div className='cart-icon'>
        <ShopingBag className='shoping-icon' />
        <span className='item-count'> 0 </span>
    </div>
);

export default CartIcon ;