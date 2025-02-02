

import React, { useState } from 'react';
import listacareImage from '../image/personal/listacare.webp';
import listerGoldImage from '../image/personal/IMG-20231019-WA0497.webp';
import mediPlusImage from '../image/personal/mediplas.webp';
import orastarImage from '../image/personal/orastar.webp';
import personalCareImage from '../image/personal/Personal Care Products.webp';
import { useNavigate } from 'react-router-dom';

const PersonalCare = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Listacare Blue Mint',
      size: '120 ml',
      type: 'Mouthwash',
      description: 'Menthol + Thymol',
      price: 72.00,
      image: listacareImage
    },
    {
      id: 2,
      name: 'Lister Gold',
      size: '120 ml',
      type: 'Mouthwash',
      description: 'Menthol + Thymol',
      price: 72.00,
      image: listerGoldImage
    },
    {
      id: 3,
      name: 'MediPlus',
      size: '140 gm',
      type: 'Toothpaste',
      description: 'Ultimate Dental Care',
      price: 85.50,
      image: mediPlusImage
    },
    {
      id: 4,
      name: 'Orastar Plus',
      size: '250 ml',
      type: 'Mouthwash',
      description: 'Eucalyptol + Menthol',
      price: 135.00,
      image: orastarImage
    }
  ];

  const handleAddToCart = (product) => {
    localStorage.setItem('cart', JSON.stringify([{ ...product, quantity: 1 }]));
    navigate('/cart');
  };

  return (
    <>
      <div className="heading">
        <h3 className="p">Dental and Personal Care Products</h3>
        <div className="view_more">see all</div>
      </div>

      <div className="block1">
        {products.map((product) => (
          <div className="block1_description" key={product.id}>
            <div className="box">
              <div className="span5">10% Off</div>
              <img className="image1" src={product.image} alt={`${product.name} ${product.size}`} />
            </div>

            <div className="description">
              <span className="span1">{product.name}</span>
              <span className="span2">{product.size}</span><br />
              {product.type}<br />
              <span className="span3">{product.description}</span><br />
            </div>

            <div className="cart">
              <div>
                <span className="span4">MRP Tk {product.price.toFixed(2)}</span><br />
                Tk {product.price.toFixed(2)} /unit<br />
              </div>
              <button className="button1" onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="description_img">
        <img className="img1" src={personalCareImage} alt="Dental and Personal Care Products" />
        <div className="text1">
          <h1>Dental and Personal Care Products</h1>
          <p>
            Discover a variety of personal care products, including mouthwash, toothpaste, and more, designed to meet your grooming needs. Elevate your self-care routine with high-quality essentials for daily use.
          </p>
        </div>
      </div>
    </>
  );
};

export default PersonalCare;
