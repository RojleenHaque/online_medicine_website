import React from 'react';
import products from './product'; // Adjust path to your product file

const View = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Product List</h2>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">
                    <strike>${product.price}</strike>
                  </span>
                  <span className="text-success">${product.discount_price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;
