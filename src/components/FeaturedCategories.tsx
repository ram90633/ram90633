import React from 'react';
import { categories } from '../data/products';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';

const FeaturedCategories: React.FC = () => {
  const { dispatch } = useApp();

  const handleCategoryClick = (categoryName: string) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: categoryName });
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 'category' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-display font-bold text-secondary-900 mb-4"
        >
          Shop by Category
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-secondary-600 max-w-2xl mx-auto"
        >
          Discover our curated collection of beauty essentials across all categories
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => handleCategoryClick(category.name)}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <div className="flex flex-wrap gap-1">
                  {category.subcategories.slice(0, 2).map((sub) => (
                    <span
                      key={sub}
                      className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm"
                    >
                      {sub}
                    </span>
                  ))}
                  {category.subcategories.length > 2 && (
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                      +{category.subcategories.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;