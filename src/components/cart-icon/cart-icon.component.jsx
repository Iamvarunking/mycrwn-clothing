import React from 'react' ;
import { ReactComponent as ShopingBag } from '../../assets/shoping-bag/shoping-bag.svg' ;
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions' ;
import './cart-icon.styles.scss' ;

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShopingBag className='shoping-icon' />
        <span className='item-count'> 0 </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon) ;