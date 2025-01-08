
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import viteLogo from '/vite.svg'
// import { Navigate } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <h1>Admin Panel</h1>
//         <Navbar />
//         <p>Add item</p>
//         <p>view item</p>
//         <p>track order</p>


        
      
        
//     </>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import pages
import View from './pages/view';
import AddItem from './pages/add';
import TrackOrders from './pages/track';

// Navbar component (if you have one)
import Navbar from './pages/Navbar'; 

function App() {
  return (
    <Router>
      {/* Optionally include your Navbar here */}
      <Navbar />

      <div className="container mt-5">
        <h1 className="text-center">Admin Panel</h1>
        <div className="row">
          <div className="col-md-4">
            <h3>Add Item</h3>
            <p>Add new items to the inventory.</p>
            <Link to="/add-item" className="btn btn-primary">Go to Add Item</Link>
          </div>
          <div className="col-md-4">
            <h3>View Item</h3>
            <p>View existing items in the inventory.</p>
            <Link to="/view-items" className="btn btn-info">Go to View Items</Link>
          </div>
          <div className="col-md-4">
            <h3>Track Order</h3>
            <p>Track customer orders in real-time.</p>
            <Link to="/track-orders" className="btn btn-warning">Go to Track Orders</Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/view-items" element={<View />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/track-orders" element={<TrackOrders />} />
      </Routes>
    </Router>
  );
}

export default App;
