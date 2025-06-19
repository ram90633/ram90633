import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X, LogOut } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { authService } from '../services/authService';
import toast from 'react-hot-toast';

const Header: React.FC = () => {
  const { state, dispatch } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value });
  };

  const handleCategoryClick = (category: string) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category });
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 'category' });
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 'home' });
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: 'All' });
    dispatch({ type: 'SET_SEARCH_QUERY', payload: '' });
  };

  const handleCartClick = () => {
    if (cartItemsCount > 0) {
      dispatch({ type: 'SET_CURRENT_PAGE', payload: 'cart' });
    } else {
      toast.error('Your cart is empty');
    }
  };

  const handleAuthClick = () => {
    if (state.user) {
      setShowUserMenu(!showUserMenu);
    } else {
      dispatch({ type: 'SET_SHOW_AUTH_MODAL', payload: true });
      dispatch({ type: 'SET_AUTH_MODE', payload: 'login' });
    }
  };

  const handleLogout = () => {
    authService.logout();
    dispatch({ type: 'SET_USER', payload: null });
    dispatch({ type: 'CLEAR_CART' });
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: '' });
    setShowUserMenu(false);
    toast.success('Logged out successfully');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={handleHomeClick}
              className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              GlamourHub
            </button>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className={`relative w-full transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products, brands..."
                value={state.searchQuery}
                onChange={handleSearch}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
              <Heart className="w-6 h-6" />
              {state.wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.wishlist.length}
                </span>
              )}
            </motion.button>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCartClick}
              className="relative p-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </motion.button>

            {/* User Profile */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAuthClick}
                className="p-2 text-secondary-600 hover:text-primary-600 transition-colors flex items-center space-x-2"
              >
                {state.user?.avatar ? (
                  <img 
                    src={state.user.avatar} 
                    alt={state.user.name}
                    className="w-6 h-6 rounded-full"
                  />
                ) : (
                  <User className="w-6 h-6" />
                )}
                {state.user && (
                  <span className="hidden md:block text-sm font-medium">
                    {state.user.name.split(' ')[0]}
                  </span>
                )}
              </motion.button>

              {/* User Menu Dropdown */}
              <AnimatePresence>
                {showUserMenu && state.user && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-secondary-200 py-2"
                  >
                    <div className="px-4 py-2 border-b border-secondary-100">
                      <p className="font-medium text-secondary-900">{state.user.name}</p>
                      <p className="text-sm text-secondary-600">{state.user.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-secondary-700 hover:bg-secondary-50 flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for products, brands..."
              value={state.searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-secondary-200"
          >
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => handleCategoryClick('Makeup')}
                className="block text-secondary-700 hover:text-primary-600 transition-colors"
              >
                Makeup
              </button>
              <button 
                onClick={() => handleCategoryClick('Skincare')}
                className="block text-secondary-700 hover:text-primary-600 transition-colors"
              >
                Skincare
              </button>
              <button 
                onClick={() => handleCategoryClick('Haircare')}
                className="block text-secondary-700 hover:text-primary-600 transition-colors"
              >
                Haircare
              </button>
              <button 
                onClick={() => handleCategoryClick('Fragrance')}
                className="block text-secondary-700 hover:text-primary-600 transition-colors"
              >
                Fragrance
              </button>
              <button 
                onClick={() => handleCategoryClick('Bath & Body')}
                className="block text-secondary-700 hover:text-primary-600 transition-colors"
              >
                Bath & Body
              </button>
              <button 
                onClick={() => handleCategoryClick("Men's Grooming")}
                className="block text-secondary-700 hover:text-primary-600 transition-colors"
              >
                Men's Grooming
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;