import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
    console.log(cart);
  let total = 0;
  let shiping = 0;
  let quantity = 0;
  for (const product of cart) {
    shiping = shiping + product.shipping;
    total = total + product.price * product.quantity;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 0.1).toFixed(2);

  const grandTotal = total + shiping + Number(tax);
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items : {quantity}</p>
      <p>Total Price: {total} </p>
      <p>Shiping: {shiping} </p>
      <p>Tax: {tax}</p>
      <h5>Grand Total: {grandTotal}</h5>
    </div>
  );
};

export default Cart;
