import express from "express";
const router = express.Router();
import { createOrder, getAllOrders } from "../controller/orderController.js";


// to create an order
router.post("/create", createOrder);

// to tarck 
router.post("/track", getAllOrders);


export default router;

