
//header
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../image/logo-my-pharmacy-1609341055.png"; 
import cart from "../image/4357325.png";  
import SearchBar from "./searchBar";
import products from "./product";

const Header = ({ setSearchResults }) => {
  const navigate = useNavigate();

  const handleSearch = (query, minPrice, maxPrice) => {
    const results = products.filter((product) => {
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
      const withinPriceRange =
        (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
      
      return matchesQuery && withinPriceRange;
    });
    setSearchResults(results);
    navigate("/search-results");
  };

  return (
    <header>
      <div className="header">
        <div className="header-bar">
          <img className="logo" src={logo} alt="Online Medicine Store" />
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Sign-up</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <img className="cart-img" src={cart} alt="Cart" />
                  Cart
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>
    </header>
  );
};

export default Header;
