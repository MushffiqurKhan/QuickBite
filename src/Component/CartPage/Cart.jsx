import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <h2 className="empty-cart">Your Cart is Empty 🛒</h2>;
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />

          <div className="item-details">
            <h4>{item.name}</h4>
            <p>₹ {item.price}</p>

            <div className="qty-controls">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h3 className="total-price">Total: ₹ {totalPrice}</h3>
    </div>
  );
};

export default Cart;