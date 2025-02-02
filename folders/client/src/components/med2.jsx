import React, { useState } from 'react';
import alatrolImage from '../image/otc/alatrol-10-mg.webp';
import burnaImage from '../image/otc/burna.webp';
import napaImage from '../image/otc/napa-tablet-500mg-10-tablets.jpeg';
import viodinImage from '../image/otc/viodin.png';
import otcDescriptionImage from '../image/otc/OTC Medicines.webp';
import { useNavigate } from 'react-router-dom';

const OTCMedicine = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Alatrol',
      dose: '10 mg',
      type: 'Tablet',
      description: 'Cetirizine Hydrochloride [Oral]',
      price: 2.30,
      image: alatrolImage
    },
    {
      id: 2,
      name: 'Burna',
      dose: '1%',
      type: 'Cream',
      description: 'Silver Sulfadiazine',
      price: 54.50,
      image: burnaImage
    },
    {
      id: 3,
      name: 'Napa',
      dose: '500 mg',
      type: 'Tablet',
      description: 'Paracetamol',
      price: 1.08,
      image: napaImage
    },
    {
      id: 4,
      name: 'Viodin',
      dose: '10%',
      type: 'Solution',
      description: 'Povidone Iodine',
      price: 108.00,
      image: viodinImage
    }
  ];

  const handleAddToCart = (product) => {
    localStorage.setItem('cart', JSON.stringify([{ ...product, quantity: 1 }]));
    navigate('/cart', '_blank');
  };

  return (
    <>
      <div className="heading">
        <h3 className="p">OTC Medicine</h3>
        <div className="view_more">see all</div>
      </div>

      <div className="block1">
        {products.map((product) => (
          <div className="block1_description" key={product.id}>
            <div className="box">
              <div className="span5">10% Off</div>
              <img className="image1" src={product.image} alt={`${product.name} ${product.dose}`} />
            </div>

            <div className="description">
              <span className="span1">{product.name}</span>
              <span className="span2">{product.dose}</span><br />
              {product.type}<br />
              <span className="span3">{product.description}</span><br />
            </div>

            <div className="cart">
              <div>
                <span className="span4">MRP Tk {product.price.toFixed(2)}</span><br />
                Tk {product.price.toFixed(2)} /piece<br />
              </div>
              <button className="button1" onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="description_img">
        <img className="img1" src={otcDescriptionImage} alt="OTC Medicines" />
        <div className="text1">
          <h1>OTC Medicine</h1>
          <p>
            OTC medicine refers to medicines that can be purchased without a prescription. They are used to treat common ailments like pain, coughs, colds, and skin infections.
          </p>
        </div>
      </div>
    </>
  );
};

export default OTCMedicine;
