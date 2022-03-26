import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = ({ product, addHandleClick }) => {
    const { name, brand, price, img } = product;

    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='prod-info'>
                <p className='product-name'>{name}</p>
                <h3>Brand: {brand}</h3>
                <p>Price: $ {price}</p>
            </div>

            <button onClick={() => addHandleClick(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;