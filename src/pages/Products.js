import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

// Mock data for products with real stock images
const allProducts = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'T-Shirts',
    gender: 'men'
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Pants',
    gender: 'men'
  },
  {
    id: 3,
    name: 'Casual Hoodie',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Hoodies',
    gender: 'men'
  },
  {
    id: 4,
    name: 'Summer Dress',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Dresses',
    gender: 'women'
  },
  {
    id: 5,
    name: 'Floral Blouse',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Tops',
    gender: 'women'
  },
  {
    id: 6,
    name: 'Leather Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Jackets',
    gender: 'men'
  },
  {
    id: 7,
    name: 'Pleated Skirt',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Skirts',
    gender: 'women'
  },
  {
    id: 8,
    name: 'Leather Belt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    gender: 'unisex'
  }
];

// Categories for filter
const categories = [
  'All',
  'T-Shirts',
  'Pants',
  'Hoodies',
  'Dresses',
  'Tops',
  'Jackets',
  'Skirts',
  'Accessories'
];

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');

  // State for filters and sorting
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [sortBy, setSortBy] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on selected filters
  const filteredProducts = allProducts.filter(product => {
    // Filter by category
    if (selectedCategory !== 'All' && product.category !== selectedCategory) {
      return false;
    }

    // Filter by gender from URL parameter
    if (categoryParam === 'men' && product.gender !== 'men') {
      return false;
    }
    if (categoryParam === 'women' && product.gender !== 'women') {
      return false;
    }
    if (categoryParam === 'accessories' && product.category !== 'Accessories') {
      return false;
    }

    // Filter by price range
    if (product.price < priceRange.min || product.price > priceRange.max) {
      return false;
    }

    // Filter by search query
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'name-a-z':
        return a.name.localeCompare(b.name);
      case 'name-z-a':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Handle price range change
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="products-page">
      <div className="container">
        <h1 className="page-title">Products</h1>

        <div className="products-layout">
          <aside className="filters-sidebar">
            <div className="filter-section">
              <h3 className="filter-title">Categories</h3>
              <ul className="category-filters">
                {categories.map(category => (
                  <li key={category}>
                    <button
                      className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-section">
              <h3 className="filter-title">Price Range</h3>
              <div className="price-inputs">
                <div className="price-input-group">
                  <label htmlFor="min-price">Min:</label>
                  <input
                    type="number"
                    id="min-price"
                    name="min"
                    min="0"
                    max="1000"
                    value={priceRange.min}
                    onChange={handlePriceChange}
                  />
                </div>
                <div className="price-input-group">
                  <label htmlFor="max-price">Max:</label>
                  <input
                    type="number"
                    id="max-price"
                    name="max"
                    min="0"
                    max="1000"
                    value={priceRange.max}
                    onChange={handlePriceChange}
                  />
                </div>
              </div>
            </div>
          </aside>

          <div className="products-content">
            <div className="products-toolbar">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="search-input"
                />
              </div>
              <div className="sort-container">
                <label htmlFor="sort-select">Sort by:</label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={handleSortChange}
                  className="sort-select"
                >
                  <option value="default">Default</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="name-a-z">Name: A to Z</option>
                  <option value="name-z-a">Name: Z to A</option>
                </select>
              </div>
            </div>

            {sortedProducts.length > 0 ? (
              <div className="grid product-grid">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <p>No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 