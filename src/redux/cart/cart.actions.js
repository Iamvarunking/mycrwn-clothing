import { cartActionTypes } from './cart.types' ;

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItems = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItemToCart = item => ({

    type: cartActionTypes.REMOVE_ITEM_TO_CART,
    payload:item
});

export const decreaseAndRemoveItem = item => ({
    type: cartActionTypes.DECREASE_AND_REMOVE_ITEM,
    payload:item
});