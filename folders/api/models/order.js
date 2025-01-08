import mongoose from "mongoose";

// Define schema for order items
const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Define schema for order
const orderSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true }, // User name
    email: { type: String, required: true },   // Email
    orderItems: [orderItemSchema],            // List of order items
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    totalPrice: { type: Number, required: true }, // Total price for the order
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema); // Create Order model
export default Order; // Export the model
