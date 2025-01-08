import React from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  
  const navigate = useNavigate();

  const handleViewProducts = () => {
    navigate('/view'); // Redirect to products page
  };

  const handleAddItem = () => {
    navigate('/add-item'); // Redirect to add item page
  };

  const handleTrackOrder = () => {
    navigate('/track-order'); // Redirect to track order page
  };

  return (<>
  
    <div className="dashboard-container">
    <h1 class="dash-board-z">Admin panel</h1>
      <div className="dashboard-block">
        <h2>View all the Products</h2>
        <button onClick={handleViewProducts}>View</button>
      </div>

      <div className="dashboard-block">
        <h2>Add new items</h2>
        <button onClick={handleAddItem}>add</button>
      </div>

      <div className="dashboard-block">
        <h2>Track user's Order</h2>
        <button onClick={handleTrackOrder}>track</button>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
