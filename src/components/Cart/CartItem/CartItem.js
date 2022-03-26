import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    const { item } = props;
    console.log(item)
    return (
        <div className='cart-item'>
            <img src={item.img} alt="" />
            <p>{item.name}</p>
        </div>
    );
};

export default CartItem;