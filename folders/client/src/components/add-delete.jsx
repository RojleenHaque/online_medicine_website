import React, { useState } from 'react';

const Add = () => {
  // Initial empty product list
  const [products, setProducts] = useState([]);

  return (
    <div className="products-container">
      <h1 className="products-title">Product List</h1>
      <table className="products-table" border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Empty body for now */}
        </tbody>
      </table>

      {/* Add New Product Button */}
      <div>
        <button onClick={() => alert('Implement Add Product functionality here!')}>Add Product</button>
      </div>
    </div>
  );
};

export default Add;
