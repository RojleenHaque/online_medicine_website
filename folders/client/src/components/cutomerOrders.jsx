import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerOrder = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orderId = localStorage.getItem("orderId");
    if (orderId) {
      const fetchOrder = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/api/orders/get/${orderId}`);
          if (response.data) {
            setOrder(response.data);
          } else {
            alert("Order not found");
          }
        } catch (error) {
          alert("Failed to fetch order. Please try again later.");
        }
      };
      fetchOrder();
    } else {
      console.log("No order found.");
    }
  }, []);

  if (!order) {
    return <div>Loading your order...</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Your Order</h1>
      <div className="order-details">
        <div className="order-detail">
          <span className="order-label">Email:</span>
          <span>{order.email}</span>
        </div>
        <div className="order-detail">
          <span className="order-label">User Name:</span>
          <span>{order.userName}</span>
        </div>
        <div className="order-detail">
          <span className="order-label">Total Price:</span>
          <span>Tk{order.totalPrice.toFixed(2)}</span>
        </div>
        <div className="order-detail">
          <span className="order-label">Status:</span>
          <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
        </div>
        <div className="order-detail">
          <span className="order-label">Shipping Address:</span>
          <span>{order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}</span>
        </div>
        <div className="order-detail">
          <span className="order-label">Order Items:</span>
          <ul>
            {order.orderItems.map((item, index) => (
              <li key={index}>
                {item.name} - Tk{item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrder;
