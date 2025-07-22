import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, image, category } = product;

  return (
    <div className="product-card card">
      <Link to={`/products/${id}`} className="product-link">
        <div className="product-image-container">
          <img src={image} alt={name} className="product-image" />
          <div className="product-overlay">
            <button className="quick-view-btn">Quick View</button>
          </div>
        </div>
        <div className="product-info">
          <p className="product-category">{category}</p>
          <h3 className="product-name">{name}</h3>
          <p className="product-price">${price.toFixed(2)}</p>
        </div>
      </Link>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard; 