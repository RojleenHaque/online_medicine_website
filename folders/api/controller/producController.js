
// productController.js
// Add Product
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import productModel from '../models/product.js'; 
import { adminAuth } from '../middleware/auth.js';





//add
export const addProduct = async (req, res) => {
  try {
    const { name, description, price, discount_price, image } = req.body;

    // Check if the image URL is provided
    // if (!image) {
    //   return res.status(400).json({ message: 'No image URL provided' }); // If no image URL, return an error
    // }
    console.log(name, description, price, discount_price,image);
    
    const productData = {
      name,
      description,
      price,
      discount_price,
      image, 
    };

    console.log(productData);
    const product = new productModel(productData);

    await product.save();     // Save product to DB
    res.status(200).json({
      message: 'Product added successfully',
      product: { name, description, price, discount_price, image },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding product' });
  }
};

// export const addProduct = async (req, res) => {
//     try {
//       // Clear existing products from the database
//       await productModel.deleteMany({});
  
//       // Array to hold the seeded products
//       const seededProducts = [];
  
//       // Loop through each product in the products array
//       for (const product of products) {
//         const { name, description, price, discount_price, image } = product;
  
//         // Define image path (adjust this path to your directory structure)
//         const imagePath = path.join(__dirname, '..', image);  // Adjust according to your file structure
  
//         // Upload the image to Cloudinary
//         const uploadResult = await cloudinary.uploader.upload(imagePath);
//         const imageUrl = uploadResult.secure_url;
  
//         // Create product data with the Cloudinary image URL
//         const productData = {
//           name,
//           description,
//           price,
//           discount_price,
//           image: imageUrl
//         };
  
//         // Create a new product model instance
//         const newProduct = new productModel(productData);
  
//         // Save the product in the database
//         await newProduct.save();
  
//         // Push the saved product to the seededProducts array (optional logging)
//         seededProducts.push(newProduct);
//       }
  
//       // Return a success response with the seeded products
//       res.status(200).json({
//         message: 'Products seeded successfully',
//         products: seededProducts
//       });
  
//     } catch (error) {
//       console.error('Error seeding products:', error);
//       res.status(500).json({ message: 'Error seeding products' });
//     }
//   };

//list
export const listProduct = async (req, res) => {
    try {
      const products = await productModel.find({}); // Fetch all products from the database
      res.status(200).json({
        message: 'Products listed successfully',
        products: products,  // Send back the list of products
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error listing products' });
    }
  };

  //to remove existing
export const removeProduct = async (req, res) => {
  try {
    const productId = req.params.id;  // Assuming ID is passed in the request parameters
    await productModel.findByIdAndDelete(productId);
    res.status(200).json({ message: 'Product removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing product' });
  }
};


//to see single product
export const singleProduct = async (req, res) => {
    try {
      const productId = req.params.id;  // Assuming ID is passed in the request parameters
      await productModel.findByIdAndDelete(productId);
      res.status(200).json({ message: 'Product removed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error removing product' });
    }
  };

