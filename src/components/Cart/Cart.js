import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    return (
        <div className='cart'>
            <h3>Product Summary</h3>
            <p>Product count: {cart.length}</p>

        </div>
    );
};

export default Cart;