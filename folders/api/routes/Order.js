import express from "express";
const router = express.Router();
import { createOrder, getAllOrders,updateOrderStatus,getOrderById } from "../controller/orderController.js";

// Route to create an order
router.post("/create", createOrder);

// Route to track an order by Order ID
router.get("/track", getAllOrders);

router.put("/update", updateOrderStatus);

router.get('/get/:orderId', getOrderById); 
export default router;

