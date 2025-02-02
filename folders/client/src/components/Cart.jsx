import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = async () => {
    console.log("userName: ", userInfo.userName);
     console.log("email: ", userInfo.email);
    if (!userInfo.userName || !userInfo.email || !userInfo.address) {
      alert("Please fill in all the required fields.");
      return;
    }

    const orderData = {
      userName: userInfo.userName,
      email: userInfo.email,
      orderItems: cartItems.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      shippingAddress: {
        address: userInfo.address,
        city: userInfo.city,
        postalCode: userInfo.postalCode,
        country: userInfo.country,
      },
      totalPrice: calculateTotal(),
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/orders/create",
        orderData
      );

      if (response.status === 201) {
        alert("Order successfully placed! Thanks for shopping with us.");
        setCartItems([]);
        localStorage.removeItem("cart");
        //navigate("/payment");
        localStorage.setItem("orderId", response.data._id);  // Save orderId in localStorage
        navigate("/customer-order"); 
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred while processing your order.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h3>Your cart is empty</h3>
          <a href="/" className="btn btn-primary mt-3">
            Shop Now
          </a>
        </div>
      ) : (
        <div>
          <div className="product-block">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>Tk{item.price.toFixed(2)}</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="form-control mx-2 text-center"
                          style={{ width: "60px" }}
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>Tk{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-end">
              <h4>
                Total: <span>Tk {calculateTotal().toFixed(2)}</span>
              </h4>
            </div>
          </div>

          <div className="user-info-block mt-5">
            <h4>Enter Your Information</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="userName"
                  className="form-control"
                  value={userInfo.userName}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, userName: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Street Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  value={userInfo.address}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, address: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  value={userInfo.city}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, city: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="postalCode" className="form-label">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  className="form-control"
                  value={userInfo.postalCode}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, postalCode: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="form-control"
                  value={userInfo.country}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, country: e.target.value })
                  }
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

