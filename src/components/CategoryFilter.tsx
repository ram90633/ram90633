import React from 'react';
import { useApp } from '../context/AppContext';
import { categories } from '../data/products';
import { motion } from 'framer-motion';

const CategoryFilter: React.FC = () => {
  const { state, dispatch } = useApp();

  const allCategories = ['All', ...categories.map(cat => cat.name)];

  const handleCategoryClick = (category: string) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category });
    if (category !== 'All') {
      dispatch({ type: 'SET_CURRENT_PAGE', payload: 'category' });
    }
  };

  return (
    <div className="bg-white shadow-sm border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto py-4">
          {allCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                state.selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;