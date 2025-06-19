import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import toast from 'react-hot-toast';

const CartPage: React.FC = () => {
  const { state, dispatch } = useApp();

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
      toast.success('Item removed from cart');
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { productId, quantity: newQuantity } });
    }
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    toast.success('Item removed from cart');
  };

  const subtotal = state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    if (!state.user) {
      dispatch({ type: 'SET_SHOW_AUTH_MODAL', payload: true });
      dispatch({ type: 'SET_AUTH_MODE', payload: 'login' });
      toast.error('Please login to proceed with checkout');
      return;
    }
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 'checkout' });
  };

  const handleBackToShopping = () => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 'home' });
  };

  if (state.cart.length === 0) {
    return (
      <div className="min-h-screen bg-secondary-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-secondary-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Your cart is empty</h2>
            <p className="text-secondary-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <button
              onClick={handleBackToShopping}
              className="bg-primary-500 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <button
            onClick={handleBackToShopping}
            className="flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continue Shopping</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Shopping Cart ({state.cart.length} items)
              </h2>

              <div className="space-y-6">
                {state.cart.map((item) => (
                  <motion.div
                    key={`${item.product.id}-${item.selectedShade || 'default'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-4 p-4 border border-secondary-200 rounded-lg"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold text-secondary-900">{item.product.name}</h3>
                      <p className="text-sm text-secondary-600">{item.product.brand}</p>
                      {item.selectedShade && (
                        <p className="text-sm text-secondary-600">Shade: {item.selectedShade}</p>
                      )}
                      <p className="text-lg font-bold text-primary-600">${item.product.price}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 rounded-full border border-secondary-300 hover:bg-secondary-50"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded-full border border-secondary-300 hover:bg-secondary-50"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-secondary-900 mb-6">Order Summary</h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-secondary-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-secondary-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-secondary-900">Total</span>
                    <span className="text-lg font-bold text-primary-600">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {subtotal < 50 && (
                <div className="mt-4 p-3 bg-accent-50 rounded-lg">
                  <p className="text-sm text-accent-700">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}

              <button
                onClick={handleCheckout}
                className="w-full mt-6 bg-primary-500 text-white py-3 rounded-full font-medium hover:bg-primary-600 transition-colors"
              >
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm text-secondary-600">
                  Secure checkout with 256-bit SSL encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;