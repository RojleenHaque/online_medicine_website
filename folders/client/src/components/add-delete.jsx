import React, { useState } from "react";
import axios from "axios";

const Add = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    discountPrice: "",
    image: null, 
  });

  // Handle input 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image file
  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: files[0] }));  // Store the selected file
  };

  // Add to database
  const handleAddProduct = async () => {
    if (
      !newProduct.name ||
      !newProduct.description ||
      !newProduct.price ||
      !newProduct.discountPrice ||
      !newProduct.image
    ) {
      alert("Please fill in all fields and upload an image!");
      return;
    }

    try {
      const formData = new FormData();  //
      formData.append("name", newProduct.name);
      formData.append("description", newProduct.description);
      formData.append("price", newProduct.price);
      formData.append("discountPrice", newProduct.discountPrice);
      formData.append("image", newProduct.image); 

      const response = await axios.post("http://localhost:4000/api/products/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });

      if (response.status === 201) {
        const addedProduct = response.data; 
    localStorage.setItem("recentProductId", addedProduct._id);
        setNewProduct({
          name: "",
          description: "",
          price: "",
          discountPrice: "",
          image: null,
        }); // Clear input fields
        alert("Product added successfully!");
        window.location.reload(); // to load in home
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="products-container">
      <h2 className="products-title">Add Product</h2>
      <table className="products-table" border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newProduct.description}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="discountPrice"
                placeholder="Discount Price"
                value={newProduct.discountPrice}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="file"
                name="image" 
                accept="image/*" 
                onChange={handleImageChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default Add;