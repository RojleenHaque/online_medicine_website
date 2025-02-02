

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const TrackOrder = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/orders/track");
//         setOrders(response.data);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleStatusChange = async (orderId) => {
//     console.log("Updating status for order ID:", orderId);
//     try {
//       // Update the order status to 'Approved'
//       await axios.put("http://localhost:4000/api/orders/approve", { orderId });
  
//       // Update the local state to reflect the change
//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order._id === orderId ? { ...order, status: "Approved" } : order
//         )
//       );
//     } catch (error) {
//       console.error("Error updating order status:", error);
//     }
//   };
  

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center">Track Orders</h1>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Email</th>
//             <th>User Name</th>
//             <th>Total Price</th>
//             <th>Status</th>
//             <th>Shipping Address</th>
//             <th>Order Items</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.email}>
//               <td>{order.email}</td>
//               <td>{order.userName}</td>
//               <td>Tk{order.totalPrice.toFixed(2)}</td>
//               <td>
            
//   <button
//     className="btn btn-primary"
//     onClick={() => handleStatusChange(order._id)}
//   >
//     {order.status === 'Pending' ? "Pending" : order.status}
//   </button>
// </td>


//               <td>
//                 {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
//                 {order.shippingAddress.postalCode},{" "}
//                 {order.shippingAddress.country}
//               </td>
//               <td>
//                 <ul>
//                   {order.orderItems.map((item, index) => (
//                     <li key={index}>
//                       {item.name} - Tk{item.price} x {item.quantity}
//                     </li>
//                   ))}
//                 </ul>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TrackOrder;
import React, { useState, useEffect } from "react";
import axios from "axios";

const TrackOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/orders/track");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      // Update the order status in the backend
      const response = await axios.put("http://localhost:4000/api/orders/update", { orderId, status: newStatus });
      
      // Update the local state to reflect the change
      if (response.data) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };
  

  return (
    <div className="container mt-5">
      <h1 className="text-center">Track Orders</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Email</th>
            <th>User Name</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Shipping Address</th>
            <th>Order Items</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.email}</td>
              <td>{order.userName}</td>
              <td>Tk{order.totalPrice.toFixed(2)}</td>
              <td>
                {order.status === 'Pending' ? (
                  <select
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                    value={order.status}
                  >
                    <option value="Pending" disabled>
                      Pending
                    </option>
                    <option value="Approved">Approved</option>
                    <option value="Canceled">Canceled</option>
                  </select>
                ) : (
                  order.status
                )}
              </td>
              <td>
                {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}
              </td>
              <td>
                <ul>
                  {order.orderItems.map((item, index) => (
                    <li key={index}>
                      {item.name} - Tk{item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackOrder;
