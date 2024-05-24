import './Cart.css';
import PropTypes from 'prop-types';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className="cart-container">
            <h4 className="cart-count">Cart: {cart.length}</h4>
            <div className="cart-items">
                {cart.map(bottle => (
                    <div key={bottle.id} className="cart-item">
                        <img src={bottle.img} alt={bottle.name} />
                        <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
};

export default Cart;
