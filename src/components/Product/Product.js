import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, brand, price, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <p className='product-name'>{name}</p>
            <h3>Brand: {brand}</h3>
        </div>
    );
};

export default Product;