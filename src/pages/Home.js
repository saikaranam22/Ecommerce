import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import ProductCard from '../components/ProductCard';

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 24.99,
    image: 'https://via.placeholder.com/300x400?text=T-Shirt',
    category: 'T-Shirts'
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 59.99,
    image: 'https://via.placeholder.com/300x400?text=Jeans',
    category: 'Pants'
  },
  {
    id: 3,
    name: 'Casual Hoodie',
    price: 49.99,
    image: 'https://via.placeholder.com/300x400?text=Hoodie',
    category: 'Hoodies'
  },
  {
    id: 4,
    name: 'Summer Dress',
    price: 39.99,
    image: 'https://via.placeholder.com/300x400?text=Dress',
    category: 'Dresses'
  }
];

// Mock data for categories
const categories = [
  {
    id: 1,
    name: 'Men',
    image: 'https://via.placeholder.com/300x300?text=Men',
    link: '/products?category=men'
  },
  {
    id: 2,
    name: 'Women',
    image: 'https://via.placeholder.com/300x300?text=Women',
    link: '/products?category=women'
  },
  {
    id: 3,
    name: 'Accessories',
    image: 'https://via.placeholder.com/300x300?text=Accessories',
    link: '/products?category=accessories'
  }
];

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Style Redefined</h1>
          <p className="hero-subtitle">Discover the latest trends in fashion</p>
          <Link to="/products" className="btn btn-primary hero-button">Shop Now</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="grid product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all-container">
            <Link to="/products" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="promo-section">
        <div className="container">
          <div className="promo-content">
            <h2 className="promo-title">Summer Collection 2023</h2>
            <p className="promo-description">
              Get ready for summer with our new collection of light and comfortable clothing.
            </p>
            <Link to="/products?collection=summer" className="btn btn-primary">Explore Collection</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="category-grid">
            {categories.map(category => (
              <Link to={category.link} key={category.id} className="category-card">
                <img src={category.image} alt={category.name} className="category-image" />
                <h3 className="category-name">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3 className="feature-title">Free Shipping</h3>
              <p className="feature-description">On orders over $50</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-undo"></i>
              </div>
              <h3 className="feature-title">Easy Returns</h3>
              <p className="feature-description">30 days return policy</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h3 className="feature-title">Secure Payment</h3>
              <p className="feature-description">100% secure checkout</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="feature-title">24/7 Support</h3>
              <p className="feature-description">Dedicated customer service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 