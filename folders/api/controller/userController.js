import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
configDotenv();

// Function to create JWT
const createToken = (payload) => {
  console.log("Payload before signing token:", payload); // Debugging line
  if (typeof payload !== 'object' || Array.isArray(payload) || payload === null) {
    throw new Error('Payload must be a plain object.');
  }
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};


const registerUser = async (req, res) => {
  try {
    console.log("Register Request Body:", req.body);

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const normalizedEmail = email.toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password during Signup:", hashedPassword);

    const user = new User({ name, email: normalizedEmail, password: hashedPassword });
    await user.save(); //save to db
    console.log("Saved User in DB:", user);

    const token = createToken({ id: user._id.toString() });
    return res.status(201).json({
      success: true,
      token,
      message: "User registered successfully.",
    });
  } catch (error) {
    console.error("Registration Error:", error.message);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
};


// Login User
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Both email and password are required." });
    }

    
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = createToken({ role: "admin" });
      return res.status(200).json({
        success: true,
        token,
        isAdmin: true,
        message: "Admin logged in successfully.",
      });
    }
    const token = createToken({ email }); 
    return res.status(200).json({
      success: true,
      token,
      message: "User logged in successfully.",
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
};


export default { registerUser, Login };
