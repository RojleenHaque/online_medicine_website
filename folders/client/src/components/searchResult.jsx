// SearchResults.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchResults = ({ searchResults }) => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    // Add the product to the cart (localStorage or any other method)
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...product, quantity: 1 }); // assuming you want to add 1 quantity
    localStorage.setItem("cart", JSON.stringify(cart));

    // Navigate to the cart page
    navigate("/cart");
  };

  return (
    <div className="search-results-page">
      <h2>Search Results</h2>
      {searchResults.length > 0 ? (
        <ul className="product-list">
          {searchResults.map((product, index) => (
            <li key={index} className="product-item">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h5 className="product-name">{product.name}</h5>
                <p className="product-description">{product.description}</p>
                <p className="product-price">
                  <strong>Price:</strong> Tk {product.price}{" "}
                  <span className="discount-price">
                    (Discount price: Tk {product.discountPrice})
                  </span>
                </p>
                {/* Add to Cart button */}
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          No results found. <Link to="/">Go back to Home</Link>
        </p>
      )}
    </div>
  );
};

export default SearchResults;
