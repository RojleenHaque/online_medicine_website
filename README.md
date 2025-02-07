# Online Medicine Delivery System

## Project Overview
The **Online Medicine Delivery System** is a web-based application designed to facilitate the easy ordering and delivery of medicines. The system includes features for both users and administrators, ensuring a seamless experience from ordering to delivery. Built using modern web technologies, this project leverages **Node.js** for the backend, **React** for the frontend, **MongoDB** for database management, **Multer** for file uploads, **JWT** for authentication, and **Cloudinary** for image storage.

---

## Features

### User Features
1. **User Registration and Login**
   - Users can create an account and log in securely using JWT-based authentication.
2. **Cart Page**
   - Users can add medicines to their cart and place orders.
3. **Order Placement**
   - Users can place orders for the medicines in their cart.
4. **Order Status Tracking**
   - Users can track the status of their orders (e.g., pending, accepted).

### Admin Features
1. **Admin Dashboard**
   - Admins have access to a dedicated dashboard to manage the system.
2. **Product Management**
   - Admins can view the list of products and add and delete products to the inventory.
3. **Order Management**
   - Admins can accept or delete user orders.
   - Admins can update the status of orders to keep users informed.

### Technical Features
1. **Backend**: Built with **Node.js** and **Express** for robust server-side logic.
2. **Frontend**: Developed using **React** for a dynamic and responsive user interface.
3. **Database**: Utilizes **MongoDB** for efficient data storage and retrieval.
4. **File Uploads**: Uses **Multer** for handling file uploads, such as product images.
5. **Authentication**: Implements **JWT (JSON Web Tokens)** for secure user authentication.**Bcrypt & Bcryptjs** for hashing passwords.
6. **Image Storage**: Integrates **Cloudinary** for storing and managing product images.

---

## Getting Started
Follow these steps to set up and run the project locally.
### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** 
- **npm** 
- **MongoDB** 
- **Cloudinary**
- 
### Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/RojleenHaque/online_medicine_website.git
   cd online_medicine_website
Install Dependencies
2. **Install backend dependencies**
cd api
npm install

3. **Install frontend dependencies**
cd ../client
npm install
Set Up Environment Variables

Create a .env file in the backend directory and add the following variables:
MONGO_URI=mongodb+srv://rojleenhaque:X4O7Va1FWddyRxuh@cluster0.ziv6p.mongodb.net/
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=dafxzdeln
CLOUDINARY_API_KEY=364498421858822
CLOUDINARY_API_SECRET=djEnTonVkiA8rCCFys8HZISIolM

Run the Application
# Start the backend server
cd api
npm start
# Start the frontend development server
cd ../client
npm start

Access the Application
Open your browser and navigate to http://localhost:5173 to access the frontend.
The backend server will be running on http://localhost:4000.

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License.

### Key Points:
1. **Structured Format**: The README is divided into clear sections (Overview, Features, Getting Started, etc.) for easy navigation.
2. **Technical Details**: Highlights the technologies used (Node.js, React, MongoDB, etc.) to give readers a quick understanding of the stack.
3. **Setup Instructions**: Provides a step-by-step guide for setting up the project locally.
4. **Contributing and License**: Encourages collaboration and specifies the license for the project.
