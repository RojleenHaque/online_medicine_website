//controller/user

import User from '../models/User.js'; 
import bcrypt from 'bcryptjs'; 
import validator from 'validator'; 
import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv';
configDotenv();



const createToken = (id) => {  //token generation for password
  return jwt.sign(
    { id }, 
    process.env.JWT_SECRET, 
    { expiresIn: "1h" } 
  );
};


//login for user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
   const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success:false,message: "User doesn't exist"});
    }
const isMatch = await bcrypt.compare(password, user.password);  //compare
if(isMatch){
   
    const token = createToken(user._id);  // Generate token after successful login
    res.status(200).json({ //response
      success: true,
      token,
    });}

  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};


  

  //register
  const registerUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" }); //all
      }
      if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      if (!validator.isStrongPassword(password, { minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) { //strength
        return res.status(400).json({
          message: "Password must be at least 6 characters long and include 1 uppercase, 1 lowercase, 1 number, and 1 symbol.",
        });
      }
      const existingUser = await User.findOne({ email });      //alredy exists //compare with email
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
    
      const salt = await bcrypt.genSalt(10);   //hash  
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // 7. Create a new user
      const user = new User({
        name,
        email,
        password: hashedPassword,
      });    
      await user.save();                      //save to db
      const token = createToken(user._id);
res.status(201).json({ //response
  message: "User registered successfully",
  token,
});
    } catch (error) {
      console.error("Registration error:", error.message);
      res.status(500).json({ message: "Server error. Please try again later." });
    }
  };
  
  
  //login for admin
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if credentials match environment variables
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      // Generate a token for admin
      const token = jwt.sign(
        { email: process.env.ADMIN_EMAIL }, // Use email as the payload (sensitive data like password should not be in the token)
        process.env.JWT_SECRET,
        { expiresIn: '1h' } // Token expiration time (optional)
      );
      // Respond with success and token
      res.status(200).json({
        success: true,
        token,
        isAdmin: true, // Explicitly flag the user as admin
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }

  } catch (error) {
    console.error("Admin login error:", error.message);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};



  export default { loginUser, registerUser, adminLogin };
  
