
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/User.js'
import productRouter from './routes/Product.js'
import connectCloudinary from './config/cloudinary.js'
import orderRoute from './routes/Order.js'


const app=express()
const PORT=process.env.PORT|| 4000
app.use(
    cors({
      //  origin: "http://localhost:5174", // Allow requests only from this origin
      //  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
      //  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    })
  );
  app.use(express.json())

 connectDB() //connect mongodb
connectCloudinary();


//endpoints
app.get("/", (req, res) =>{
    res.send("Api Working")
 })


//  // Routes for seeding data
// app.use('/api/seed', databaseSeeder);

// Routes for login
app.use('/api/users', userRouter);

// //route for product
app.use("/api/products",productRouter); //in frontend

//route for order
app.use("/api/orders",orderRoute);






 //start server
 app.listen(PORT || 4000, () => {
        console.log(`Server listening on port ${PORT}`); // Correct use of backticks
    });