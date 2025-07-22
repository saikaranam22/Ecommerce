import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProductDetail.css';

// Mock products data
const products = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 24.99,
    image: 'https://via.placeholder.com/600x800?text=T-Shirt',
    category: 'T-Shirts',
    gender: 'men',
    description: 'A classic white t-shirt made from 100% premium cotton. Perfect for everyday wear, this comfortable and breathable t-shirt is a wardrobe essential.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    inStock: true
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 59.99,
    image: 'https://via.placeholder.com/600x800?text=Jeans',
    category: 'Pants',
    gender: 'men',
    description: 'These slim fit jeans are designed for comfort and style. Made from high-quality denim with a touch of stretch for ease of movement.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Blue', 'Black', 'Gray'],
    inStock: true
  },
  {
    id: 3,
    name: 'Casual Hoodie',
    price: 49.99,
    image: 'https://via.placeholder.com/600x800?text=Hoodie',
    category: 'Hoodies',
    gender: 'men',
    description: 'Stay warm and comfortable in this casual hoodie. Features a soft fleece lining, adjustable hood, and kangaroo pocket.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy'],
    inStock: true
  },
  {
    id: 4,
    name: 'Summer Dress',
    price: 39.99,
    image: 'https://via.placeholder.com/600x800?text=Dress',
    category: 'Dresses',
    gender: 'women',
    description: 'A light and airy summer dress perfect for warm days. Features a floral pattern and comfortable fit.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral', 'Blue', 'Pink'],
    inStock: true
  },
  {
    id: 5,
    name: 'Floral Blouse',
    price: 34.99,
    image: 'https://via.placeholder.com/600x800?text=Blouse',
    category: 'Tops',
    gender: 'women',
    description: 'A beautiful floral blouse with a relaxed fit. Perfect for both casual and semi-formal occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Floral', 'White', 'Black'],
    inStock: true
  },
  {
    id: 6,
    name: 'Leather Jacket',
    price: 89.99,
    image: 'https://via.placeholder.com/600x800?text=Jacket',
    category: 'Jackets',
    gender: 'men',
    description: 'A stylish leather jacket that adds an edge to any outfit. Features a comfortable fit and durable construction.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown'],
    inStock: true
  },
  {
    id: 7,
    name: 'Pleated Skirt',
    price: 44.99,
    image: 'https://via.placeholder.com/600x800?text=Skirt',
    category: 'Skirts',
    gender: 'women',
    description: 'A versatile pleated skirt that can be dressed up or down. Features a comfortable elastic waistband.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Gray'],
    inStock: true
  },
  {
    id: 8,
    name: 'Leather Belt',
    price: 29.99,
    image: 'https://via.placeholder.com/600x800?text=Belt',
    category: 'Accessories',
    gender: 'unisex',
    description: 'A high-quality leather belt that complements any outfit. Features a classic buckle and durable construction.',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Brown'],
    inStock: true
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simulate API call with setTimeout
    const timer = setTimeout(() => {
      const foundProduct = products.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
      if (foundProduct) {
        setSelectedSize(foundProduct.sizes[0]);
        setSelectedColor(foundProduct.colors[0]);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    // In a real app, this would add the product to the cart
    alert(`Added to cart: ${product.name} - Size: ${selectedSize}, Color: ${selectedColor}, Quantity: ${quantity}`);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container">
        <div className="product-not-found">
          <h2>Product Not Found</h2>
          <p>Sorry, the product you are looking for does not exist.</p>
          <Link to="/products" className="btn btn-primary">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span>{product.name}</span>
        </div>

        <div className="product-detail">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-options">
              <div className="option-group">
                <h3 className="option-title">Size</h3>
                <div className="size-options">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => handleSizeChange(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <h3 className="option-title">Color</h3>
                <div className="color-options">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => handleColorChange(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <h3 className="option-title">Quantity</h3>
                <div className="quantity-selector">
                  <button
                    className="quantity-btn"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="quantity-input"
                  />
                  <button
                    className="quantity-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="product-actions">
              <button
                className="btn btn-primary add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button className="btn btn-secondary wishlist-btn">
                Add to Wishlist
              </button>
            </div>

            <div className="product-meta">
              <p><strong>Availability:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
              <p><strong>Category:</strong> {product.category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 