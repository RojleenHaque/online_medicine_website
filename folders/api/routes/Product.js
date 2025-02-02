
import express from 'express';
import multer from 'multer';
import path from 'path';
import Product from '../models/product.js';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';  // For deleting temporary files

const storage = multer.diskStorage({  //multer
  destination: (req, file, cb) => {
    const uploadDir = './upload';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir); 
    }
    cb(null, uploadDir);  
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  
  },
});

const upload = multer({ storage: storage });

const productRouter = express.Router();

//upload to cloudinary
const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "products",  // Folder to store in Cloudinary
    });
    console.log("Cloudinary Upload Result:", result);  // Log result for debugging
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error.message);  // Log the error message
    throw new Error("Error uploading image to Cloudinary.");
  }
};



// Add a new product 
productRouter.post("/add", upload.single('image'), async (req, res) => {
  const { name, description, price, discountPrice } = req.body;
  const image = req.file.path;  // Multer stores the file temporarily in 'req.file'

  if (!name || !description || !price || !discountPrice) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const imageUrl = await uploadToCloudinary(image);

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      image: imageUrl,
    });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);  
    fs.unlinkSync(image);
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ message: "Failed to add product." });
  }
});



// get one product
productRouter.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ message: "Failed to fetch product." });
  }
});


 export default productRouter;
