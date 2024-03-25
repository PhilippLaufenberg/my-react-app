import React, { useState } from "react";
function MyComponent2() {
  const [name, setName] = useState("Guest ");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline"
      ></input>
      <p>Name: {name}</p>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        placeholder="Enter your quantity"
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline"
      ></input>
      <p>Quantity: {quantity}</p>
      <textarea
        type="string"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Delivery instructions"
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline"
      ></textarea>
      <p>Comment: {comment}</p>
      <select
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline"
        value={payment}
        onChange={handlePaymentChange}
        placeholder="Enter your payment"
      >
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>
      <label>
        <input
          type="radio"
          value="Pickup"
          className="mx-2"
          checked={shipping === "Pickup"}
          onChange={handleShippingChange}
        />
        Pickup
      </label>
      <br></br>
      <label>
        <input
          type="radio"
          value="Delivery"
          className="mx-2"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent2;
