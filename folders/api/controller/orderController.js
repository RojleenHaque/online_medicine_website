

import asyncHandler from "express-async-handler";
import Order from "../models/order.js";

// Create Order
export const createOrder = asyncHandler(async (req, res) => {
  const { userName, email, orderItems, shippingAddress } = req.body;

  if (!userName || !email) {
    res.status(400);
    throw new Error("User name and email are required.");
  }

  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items found.");
  }

  if (
    !shippingAddress ||
    !shippingAddress.address ||
    !shippingAddress.city ||
    !shippingAddress.postalCode ||
    !shippingAddress.country
  ) {
    res.status(400);
    throw new Error("Complete shipping address is required.");
  }

  const totalPrice = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const order = new Order({
    userName,
    email,
    orderItems,
    shippingAddress,
    totalPrice,
    status: "Pending"
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
});


//to see all orders in admin panel
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    console.log("Orders:", orders);  // Log the orders to check
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


//update status 
export const updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;  // Accept 'status' as part of the request body

  if (!orderId || !status) {
    return res.status(400).json({ error: "OrderId and status are required" });
  }
  const order = await Order.findById(orderId);
  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }

  // Validate the status
  if (!["Approved", "Canceled"].includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }

  // Update the status
  order.status = status;
  await order.save();

  return res.status(200).json({ message: `Order ${status.toLowerCase()}`, order });
};

/// for user to se their individual order
export const getOrderById = asyncHandler(async (req, res) => {
  const { orderId } = req.params; // Get orderId from the URL
  const order = await Order.findById(orderId); // Find the order by ID

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.json(order); 
});
