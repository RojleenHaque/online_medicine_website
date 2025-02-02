
import React, { useState } from 'react';
import sergelImage from '../image/sergel-20-mg-capsule-52083742307-i1-1zf66MWNieQiLLH3NXk6.jpg';
import azithroImage from '../image/medicines/azithro.jpg';
import monasImage from '../image/medicines/monas-10.webp';
import pantorixImage from '../image/Pantonix 40 Injection-600x600w.jpg.webp';
import prescriptionMedicine from "../image/Prescription Medicines.webp";
import { useNavigate } from 'react-router-dom';

const Med1 = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Sergel',
      dose: '20 mg',
      type: 'Capsule',
      description: 'Esomeprazole Magnesium Trihydrate',
      price: 6.30,
      image: sergelImage
    },
    {
      id: 2,
      name: 'Azithomicyn',
      dose: '500 mg',
      type: 'Capsule',
      description: 'Azithromycin',
      price: 31.50,
      image: azithroImage
    },
    {
      id: 3,
      name: 'Monas',
      dose: '19 mg',
      type: 'Tablet',
      description: 'Montelukast',
      price: 236.25,
      image: monasImage
    },
    {
      id: 4,
      name: 'Pantorix',
      dose: '40 mg',
      type: 'Tablet',
      description: 'Pantoprazole',
      price: 6.50,
      image: pantorixImage
    }
  ];

  const handleAddToCart = (product) => {
    localStorage.setItem('cart', JSON.stringify([{ ...product, quantity: 1 }]));
    navigate('/cart');
  };

  return (
    <>
      <div className="heading">
        <h3 className="p">Prescription Medicine</h3>
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
              <span className="span3">{product.description}</span><br /> {/* Renamed ingredient to description */}
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
        <img className="img1" src={prescriptionMedicine} alt="Prescription Medicine" />
        <div className="text1">
          <h1>Prescription Medicine</h1>
          <p>This section provides Prescription medicines that require a medical prescription to be dispensed, also offers online medicines and healthcare products with home delivery in Dhaka as well as all over Bangladesh.</p>
        </div>
      </div>
    </>
  );}
export default Med1;
