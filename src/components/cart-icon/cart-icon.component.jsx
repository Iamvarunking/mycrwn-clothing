import React from 'react' ;
import { ReactComponent as ShopingBag } from '../../assets/shoping-bag/shoping-bag.svg' ;
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions' ;
import { selectCartItemsCount } from '../../redux/cart/cart.selectors' ;
import './cart-icon.styles.scss' ;

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShopingBag className='shoping-icon' />
        <span className='item-count'> { itemCount }</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

const setStateToProps = (state) => ({
   itemCount : selectCartItemsCount(state) 
});

export default connect(setStateToProps, mapDispatchToProps)(CartIcon) ;