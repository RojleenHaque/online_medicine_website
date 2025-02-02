

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewProductPage = () => {
  const [newProduct, setNewProduct] = useState(null);
  const navigate = useNavigate();

  // Fetch the most recently added product's ID from localStorage
  useEffect(() => {
    const productId = localStorage.getItem("recentProductId"); // Ensure this matches the key in localStorage
    if (productId) {
        axios
            .get(`http://localhost:4000/api/products/${productId}`)
            .then((response) => {setNewProduct(response.data); // Store the fetched product in state
            })
            .catch((error) => {
                console.error("Error fetching product by ID:", error);
            });
    }
}, []);


  const handleAddToCart = (product) => {
    // Store the product in localStorage and navigate to the cart page
    localStorage.setItem("recentProductId", product._id); // Store only the product ID
    navigate("/cart");
  };

  if (!newProduct) {
    return <p>No product added yet.</p>; // Display a message if no product is added yet
  }

return (
  <>

    <div className="block1">
      <div className="block1_description">
        <div className="box">
          <div className="span5">10% Off</div>
          <img
            className="image1"
            src={newProduct.image}
            alt={`${newProduct.name}`}
          />
        </div>

        <div className="description">
          <span className="span1">{newProduct.name}</span>
          <br />
          <p>{newProduct.description}</p>
        </div>

        <div className="cart">
          <div>
            <span className="span4">
              MRP Tk {newProduct.discountPrice.toFixed(2)}
            </span>
            <br />
            Tk {newProduct.price.toFixed(2)} /piece
            <br />
          </div>
          <button
            className="button1"
            onClick={() => handleAddToCart(newProduct)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </>
);
};

export default NewProductPage;
