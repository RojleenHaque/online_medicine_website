

// Middleware to protect routes for authenticated users
// export const protect = asyncHandler(async (req, res, next) => {
//   let token;

//   // Check if Authorization header is present and starts with "Bearer"
//   if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
//     try {
//       // Extract token
//       token = req.headers.authorization.split(" ")[1];
//       console.log("Token received:", token); // Log token for debugging

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use jwt.verify for verification

//       // Fetch user from the database (excluding password)
//       req.user = await User.findById(decoded.id).select("-password");

//       if (!req.user) {
//         return res.status(401).json({ message: "User not found" });
//       }

//       // Proceed to the next middleware
//       next();
//     } catch (err) {
//       console.error("Error in token verification:", err.message);
//       res.status(401).json({ message: "Token verification failed!" });
//     }
//   } else {
//     // If no token is present
//     res.status(401).json({ message: "Not authorized, no token" });
//   }
// });

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

    req.user = decoded; // Store decoded user info in the request object
    next(); // Proceed to next middleware or route handler
  } catch (error) {
    console.error("Admin authorization error:", error.message);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
};
