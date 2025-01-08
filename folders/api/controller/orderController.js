import Order from "../models/order.js"; // Import the Order model
import asyncHandler from "express-async-handler"; // Import async handler
//import User from "../models/user.js"; // Import the User model for role checks
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing
import jwt from "jsonwebtoken"; // Import JWT for authentication

// Create a new order (User authentication required)
export const createOrder = asyncHandler(async (req, res) => {
  const { userName, email, orderItems, shippingAddress } = req.body;

  // Validate required fields
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

  // Calculate total price
  const totalPrice = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  try {
    // Create order
    const order = new Order({
      userName,
      email,
      orderItems,
      shippingAddress,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    console.error("Order creation failed:", error);
    res.status(500).json({ message: "Internal Server Error. Failed to save order." });
  }
});

// Admin: Track all orders (Admin authentication required)
export const getAllOrders = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password are required.");
  }

  try {
    // Find admin user by email
    const adminUser = await User.findOne({ email });

    // Check if user exists and is an admin
    if (!adminUser || adminUser.role !== "admin") {
      res.status(403);
      throw new Error("Access denied. Admin privileges required.");
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, adminUser.password);
    if (!isMatch) {
      res.status(401);
      throw new Error("Invalid email or password.");
    }

    // Fetch all orders if authentication is successful
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
});
// export { createOrder, getAllOrders };
