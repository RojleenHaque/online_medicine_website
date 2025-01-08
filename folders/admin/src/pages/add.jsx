import React, { useState } from 'react';


const AddItem = () => {
  // State for managing form inputs
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDiscountPrice, setProductDiscountPrice] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send the data to your backend or store it in a global state
    console.log({
      name: productName,
      description: productDescription,
      price: productPrice,
      discount_price: productDiscountPrice,
    });

    // Reset the form
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductDiscountPrice('');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Add New Product</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">
                    Product Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productDescription"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Product Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productDiscountPrice" className="form-label">
                    Product Discount Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="productDiscountPrice"
                    value={productDiscountPrice}
                    onChange={(e) => setProductDiscountPrice(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
