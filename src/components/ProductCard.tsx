import React from 'react';
import { Heart, Star, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { state, dispatch } = useApp();
  
  const isInWishlist = state.wishlist.some(item => item.id === product.id);
  const isInCart = state.cart.some(item => item.product.id === product.id);

  const handleAddToWishlist = () => {
    if (isInWishlist) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
      toast.success('Removed from wishlist');
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
      toast.success('Added to wishlist');
    }
  };

  const handleAddToCart = () => {
    dispatch({ 
      type: 'ADD_TO_CART', 
      payload: { product, quantity: 1 }
    });
    toast.success('Added to cart');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Bestseller
            </span>
          )}
          {product.discount && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleAddToWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 ${
            isInWishlist 
              ? 'bg-primary-500 text-white' 
              : 'bg-white/80 text-secondary-600 hover:bg-primary-500 hover:text-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
        </motion.button>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-secondary-500 font-medium">{product.brand}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-secondary-600">{product.rating}</span>
            <span className="text-sm text-secondary-400">({product.reviewCount})</span>
          </div>
        </div>

        <h3 className="font-semibold text-secondary-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-secondary-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-secondary-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
            product.inStock
              ? isInCart
                ? 'bg-secondary-100 text-secondary-600 border border-secondary-300'
                : 'bg-primary-500 text-white hover:bg-primary-600'
              : 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>
            {!product.inStock 
              ? 'Out of Stock' 
              : isInCart 
                ? 'In Cart' 
                : 'Add to Cart'
            }
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;