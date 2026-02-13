"use client";

import { useCart } from "../context/cartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>Your Cart</h2>
        <p className="empty-cart">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="cart-title">Your Cart</h2>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="cart-left">
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p className="price">${item.price}</p>
            </div>
          </div>

          <div className="cart-right">
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) =>
                updateQuantity(item.id, Number(e.target.value))
              }
            />

            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="btn btn-primary">Proceed to Checkout</button>
      </div>
    </div>
  );
}
