import { useState } from "react";
import "./OrderModal.css";


const OrderModal = ({ food, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("COD");

  if (!food) return null;

  const totalPrice = food.price * quantity;

  return (
        <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Food Info */}
        <div className="food-info">
          <img src={food.image} alt={food.name} />
          <div>
            <h2>{food.name}</h2>
            <p>{food.description}</p>
            <p className="price">₹{food.price}</p>
          </div>
        </div>

        {/* Quantity Section */}
        <div className="quantity-section">
          <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>➖</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)}>➕</button>
        </div>

        <h3>Total: ₹{totalPrice}</h3>

        {/* Customer Form */}
        <div className="form-section">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option value="COD">Cash on Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-btn">
            Confirm Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrderModal;