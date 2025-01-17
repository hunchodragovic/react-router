import React from "react";
import { useNavigate } from "react-router-dom";
const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Order Confirmed</h2>
      <p>Thank you for your order. Your order number is #1234567890</p>
      <button onClick={() => navigate("/home")}>Go back</button>
    </div>
  );
};

export default OrderSummary;
