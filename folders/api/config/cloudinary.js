import { v2 as cloudinary } from 'cloudinary';

// Cloudinary connection setup
const connectCloudinary = async () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLUDINARY_NAME,  // Replace with your Cloudinary cloud name
      api_key: process.env.CLOUDINARY_API_KEY,        // Replace with your Cloudinary API key
      api_secret: process.env.CLOUDINARY_SECRET_K,  // Replace with your Cloudinary API secret
    });

    console.log("Connected to Cloudinary successfully");
  } catch (error) {
    console.error("Error connecting to Cloudinary:", error);
  }
};

export default connectCloudinary;
