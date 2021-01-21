import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component' ;
import { connect } from 'react-redux' ; 
import { addCartItems } from '../../redux/cart/cart.actions' ; 
import './collection-item.styles.scss';

const CollectionItem = ({item , addCartItems}) => {
    const {name,price,imageUrl} = item ;
    return (    
    <div className='collection-item'>
        <div className='image'
        style={{
            backgroundImage:`url(${imageUrl})`
        }} />
        <div className='collection-footer'>
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span>
        </div>
        <CustomButton  onClick={() => addCartItems(item)} inverted>Add to cart</CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addCartItems : item => dispatch(addCartItems(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem) ; 