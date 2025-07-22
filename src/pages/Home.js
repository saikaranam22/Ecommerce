import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import ProductCard from '../components/ProductCard';

// Mock data for featured products with real stock images
const featuredProducts = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'T-Shirts'
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Pants'
  },
  {
    id: 3,
    name: 'Casual Hoodie',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Hoodies'
  },
  {
    id: 4,
    name: 'Summer Dress',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Dresses'
  }
];

// Mock data for categories with real stock images
const categories = [
  {
    id: 1,
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/products?category=men'
  },
  {
    id: 2,
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/products?category=women'
  },
  {
    id: 3,
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
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