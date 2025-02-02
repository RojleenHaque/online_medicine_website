
import React, { useState } from 'react';
import bextrimImage from '../image/vitamins/bextrim.jpeg';
import vitaminCImage from '../image/vitamins/c.jpeg';
import coralImage from '../image/vitamins/coral.jpeg';
import multivitaminImage from '../image/vitamins/downloamulti.jpeg';
import vitaminsDescriptionImage from '../image/vitamins/1489397_1.jpg';
import { useNavigate } from 'react-router-dom';

const Vitamins = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Bextrim Gold',
      size: '500 mg',
      type: 'Tablet',
      description: 'Multivitamin + Multimineral',
      price: 324.00,
      image: bextrimImage
    },
    {
      id: 2,
      name: 'Vitamin C',
      size: '500 mg',
      type: 'Chewable Tablet',
      description: 'Ascorbic Acid',
      price: 1.50,
      image: vitaminCImage
    },
    {
      id: 3,
      name: 'CoraCal-D',
      size: '500 mg/200 IU',
      type: 'Tablet',
      description: 'Calcium Carbonate',
      price: 100.25,
      image: coralImage
    },
    {
      id: 4,
      name: 'Multivitamin',
      size: '250 mg',
      type: 'Solution',
      description: 'Multivitamin & Multimineral',
      price: 67.50,
      image: multivitaminImage
    }
  ];

  const handleAddToCart = (product) => {
    localStorage.setItem('cart', JSON.stringify([{ ...product, quantity: 1 }]));
    navigate('/cart');
  };

  return (
    <>
      <div className="heading">
        <h3 className="p">Supplements And Vitamins</h3>
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
        <img className="img1" src={vitaminsDescriptionImage} alt="Supplements and Vitamins" />
        <div className="text1">
          <h1>Supplements And Vitamins</h1>
          <p>
            Explore different kinds of vitamins and supplements. Vitamins are nutrients your body needs in small amounts to stay healthy. Supplements are
            pills, liquids, or powders that contain vitamins, minerals, or a combination of both, which some people use to fill in the blanks in their
            diets.
          </p>
        </div>
      </div>
    </>
  );
};

export default Vitamins;
