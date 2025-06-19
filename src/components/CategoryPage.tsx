import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { state, dispatch } = useApp();

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (state.selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === state.selectedCategory);
    }

    // Filter by search query
    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [state.selectedCategory, state.searchQuery]);

  const handleBackToHome = () => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 'home' });
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: 'All' });
  };

  if (filteredProducts.length === 0) {
    return (
      <div className="min-h-screen bg-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-medium text-secondary-900 mb-2">No products found</h3>
            <p className="text-secondary-600">Try adjusting your search or filter criteria.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <div className="h-6 w-px bg-secondary-300"></div>
            <h1 className="text-3xl font-bold text-secondary-900">
              {state.selectedCategory}
            </h1>
          </div>
          <span className="text-secondary-600">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryPage;