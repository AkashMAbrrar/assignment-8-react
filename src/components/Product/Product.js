import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, brand, price, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='prod-info'>
                <p className='product-name'>{name}</p>
                <h3>Brand: {brand}</h3>
                <p>Price: $ {price}</p>
            </div>
            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;