import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { authService } from '../services/authService';
import toast from 'react-hot-toast';

const AuthModal: React.FC = () => {
  const { state, dispatch } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let user;
      if (state.authMode === 'login') {
        user = await authService.login(formData.email, formData.password);
        toast.success('Welcome back!');
      } else {
        user = await authService.register(formData.name, formData.email, formData.password);
        toast.success('Account created successfully!');
      }

      dispatch({ type: 'SET_USER', payload: user });
      if (user.cart && user.wishlist) {
        dispatch({ 
          type: 'LOAD_USER_DATA', 
          payload: { cart: user.cart, wishlist: user.wishlist } 
        });
      }
      dispatch({ type: 'SET_SHOW_AUTH_MODAL', payload: false });
      setFormData({ name: '', email: '', password: '' });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    dispatch({ type: 'SET_SHOW_AUTH_MODAL', payload: false });
    setFormData({ name: '', email: '', password: '' });
  };

  if (!state.showAuthModal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl p-8 w-full max-w-md relative"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-secondary-400 hover:text-secondary-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-2">
              {state.authMode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-secondary-600">
              {state.authMode === 'login' 
                ? 'Sign in to your GlamourHub account' 
                : 'Join GlamourHub today'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {state.authMode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-secondary-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading 
                ? 'Please wait...' 
                : state.authMode === 'login' ? 'Sign In' : 'Create Account'
              }
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-secondary-600">
              {state.authMode === 'login' 
                ? "Don't have an account? " 
                : "Already have an account? "
              }
              <button
                onClick={() => dispatch({ 
                  type: 'SET_AUTH_MODE', 
                  payload: state.authMode === 'login' ? 'register' : 'login' 
                })}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                {state.authMode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {state.authMode === 'login' && (
            <div className="mt-4 p-4 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-700 font-medium mb-2">Demo Account:</p>
              <p className="text-sm text-primary-600">
                Email: demo@glamourhub.com<br />
                Password: demo123
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AuthModal;