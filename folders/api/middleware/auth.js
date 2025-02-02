import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
configDotenv();

export const adminAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract the token from Authorization header

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    // Decode and verify the token using the secret key from .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the decoded token's email matches the admin email
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ success: false, message: "Access denied for admin" });
    }

    req.user = decoded; // to use it in routes
    next(); // Proceed to next middleware or route handler
  } catch (error) {
    console.error("Admin authorization error:", error.message);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
};

