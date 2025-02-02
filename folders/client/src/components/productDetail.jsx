import axios from 'axios';
import products from './product'; // Import your product data from the file

const addProductsToBackend = async () => {
  try {
    // Loop through all products and send them to the backend
    for (const product of products) {
      const response = await axios.post('http://localhost:4000/api/products', product);
      console.log('Product added:', response.data);
    }
  } catch (error) {
    console.error('Error adding products:', error);
  }
};

// Call the function to add products
addProductsToBackend();
