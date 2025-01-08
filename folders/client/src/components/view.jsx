// view
// import React from 'react';

// const products = [
//   { name: "Sergel", description: "Tablet", price: "7.00", discount_price: "6.30" },
//   { name: "Azithromycin", description: "Tablet", price: "35.00", discount_price: "31.50" },
//   { name: "Monas", description: "Tablet", price: "262.50", discount_price: "236.00" },
//   { name: "Pantorix", description: "Tablet", price: "10.00", discount_price: "6.50" },
//   { name: "Alatrol", description: "Tablet", price: "3.00", discount_price: "2.50" },
//   { name: "Burna", description: "Cream", price: "60.00", discount_price: "54.50" },
//   { name: "Paracetamol", description: "Tablet", price: "2.00", discount_price: "1.50" },
//   { name: "Viodin", description: "Solution", price: "120.00", discount_price: "108.50" },
//   { name: "Bextrim Gold", description: "Tablet", price: "360.00", discount_price: "334.50" },
//   { name: "Vitamin C", description: "Tablet", price: "2.00", discount_price: "1.50" },
//   { name: "Coracal-D", description: "Tablet", price: "120.00", discount_price: "100.50" },
//   { name: "Multivitamin", description: "Tablet", price: "65.00", discount_price: "67.50" },
//   { name: "Listacare Blue Mint", description: "Solution", price: "80.00", discount_price: "72.50" },
//   { name: "Lister Gold", description: "Solution", price: "80.00", discount_price: "72.50" },
//   { name: "MediPlus", description: "Cream", price: "90.00", discount_price: "85.00" },
//   { name: "Orastar Plus", description: "Solution", price: "150.00", discount_price: "135.00" },
// ];

// const ProductsTable = () => {
//   return (
//     <div className="products-container">
//       <h1 className="products-title">Product List</h1>
//       <table className="products-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Discount Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={index}>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>${product.price}</td>
//               <td>${product.discount_price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductsTable;

import React from 'react';



const ProductsTable = () => {
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
          <tr>
            <td>Sergel</td>
            <td>Tablet</td>
            <td>Tk 7.00</td>
            <td>Tk 6.30</td>
          </tr>
          <tr>
            <td>Azithromycin</td>
            <td>Tablet</td>
            <td>Tk 35.00</td>
            <td>Tk 31.50</td>
          </tr>
          <tr>
            <td>Monas</td>
            <td>Tablet</td>
            <td>Tk 262.50</td>
            <td>Tk 236.00</td>
          </tr>
          <tr>
            <td>Pantorix</td>
            <td>Tablet</td>
            <td>Tk 10.00</td>
            <td>Tk 6.50</td>
          </tr>
          <tr>
            <td>Alatrol</td>
            <td>Tablet</td>
            <td>Tk 3.00</td>
            <td>Tk 2.50</td>
          </tr>
          <tr>
            <td>Burna</td>
            <td>Cream</td>
            <td>Tk 60.00</td>
            <td>Tk 54.50</td>
          </tr>
          <tr>
            <td>Paracetamol</td>
            <td>Tablet</td>
            <td>Tk 2.00</td>
            <td>Tk 1.50</td>
          </tr>
          <tr>
            <td>Viodin</td>
            <td>Solution</td>
            <td>Tk 120.00</td>
            <td>Tk 108.50</td>
          </tr>
          <tr>
            <td>Bextrim Gold</td>
            <td>Tablet</td>
            <td>Tk 360.00</td>
            <td>Tk 334.50</td>
          </tr>
          <tr>
            <td>Vitamin C</td>
            <td>Tablet</td>
            <td>Tk 2.00</td>
            <td>Tk 1.50</td>
          </tr>
          <tr>
            <td>Coracal-D</td>
            <td>Tablet</td>
            <td>Tk 120.00</td>
            <td>Tk 100.50</td>
          </tr>
          <tr>
            <td>Multivitamin</td>
            <td>Tablet</td>
            <td>Tk 65.00</td>
            <td>Tk 67.50</td>
          </tr>
          <tr>
            <td>Listacare Blue Mint</td>
            <td>Solution</td>
            <td>Tk 80.00</td>
            <td>Tk 72.50</td>
          </tr>
          <tr>
            <td>Lister Gold</td>
            <td>Solution</td>
            <td>Tk 80.00</td>
            <td>Tk 72.50</td>
          </tr>
          <tr>
            <td>MediPlus</td>
            <td>Cream</td>
            <td>Tk 90.00</td>
            <td>Tk 85.00</td>
          </tr>
          <tr>
            <td>Orastar Plus</td>
            <td>Solution</td>
            <td>Tk 150.00</td>
            <td>Tk 135.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
