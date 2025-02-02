import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = ({ query = "" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products");
        console.log(response.data); // Check the data structure
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Products</h3>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : filteredProducts.length ? (
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index}>
              <strong>{product.name}</strong> 
              <p>{product.description}</p> 
              <p>Price: Tk {product.price.toFixed(2)}</p> 
              {product.discountPrice && product.discountPrice !== product.price && (
                <p>Discount: Tk {product.discountPrice.toFixed(2)}</p> 
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
