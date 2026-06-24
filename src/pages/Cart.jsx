import React, { useEffect, useState } from "react";
import './cart.css'
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const deleteProduct = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert("Product Deleted Successfully");
  };

  return (
    <>
    <br></br>
    <div className="cart-container">
      {cartItems.map((item) => (
        <div className="cart-card" key={item.id}>
          <img
            src={item.thumbnail}
            alt={item.title}
            width="200"
          />

          <h3>{item.title}</h3>

          <p>${item.price}</p>

          <button
            className="delete-btn"
            onClick={() => deleteProduct(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
    </>
  );
};

export default Cart;