import './Cart.css'
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
    const { cart, removeItem } = props;

    console.log(cart)

    return (
        <div className='cart'>

            <h3>Product Summary</h3>
            <p>Product count: {cart.length}</p>
            {
                cart.map(item => <CartItem item={item}></CartItem>)
            }
            <button >Choose 1 For Me</button>
            <button onClick={removeItem}>Remove All</button>
        </div>
    );
};
export default Cart;