import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Market.css';

const Market = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addHandleClick = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='market-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        addHandleClick={addHandleClick}
                        key={product.id}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Product Summary</h3>
                <p>Product count: {cart.length}</p>
            </div>
        </div>
    );
};

export default Market;