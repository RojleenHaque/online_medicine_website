


import express from 'express';
import { addProduct, listProduct, removeProduct, singleProduct } from '../controller/producController.js';
import upload from '../middleware/multer.js'; // Ensure you have a valid multer middleware
import { adminAuth } from '../middleware/auth.js';

const productRoute = express.Router();

// Add product route with image upload
// productRoute.post('/add', adminAuth, upload.single('image'), addProduct);
productRoute.post('/add', adminAuth, addProduct);

// List all products route
productRoute.get('/list', adminAuth, listProduct);

// Remove a product route
productRoute.delete('/remove', adminAuth, removeProduct);

// Get a single product route
productRoute.get('/single', adminAuth, singleProduct);

export default productRoute;
