import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, CreditCard, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

const CheckoutPage: React.FC = () => {
  const { state, dispatch } = useApp();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [address, setAddress] = useState({
    name: state.user?.name || '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    phone: ''
  });

  const subtotal = state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const minDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000); // 2 days from now
  const maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now

  const handlePlaceOrder = () => {
    if (!address.street || !address.city || !address.state || !address.zipCode || !address.phone) {
      toast.error('Please fill in all address fields');
      return;
    }

    // Simulate order processing
    setOrderPlaced(true);
    
    // Clear cart after successful order
    setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
      toast.success('Order placed successfully!');
      
      // Redirect to home after 3 seconds
      setTimeout(() => {
        dispatch({ type: 'SET_CURRENT_PAGE', payload: 'home' });
      }, 3000);
    }, 2000);
  };

  const handleBackToCart = () => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 'cart' });
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full mx-4 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-8 h-8 text-green-600" />
          </motion.div>
          
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Order Confirmed!</h2>
          <p className="text-secondary-600 mb-6">
            Thank you for your order. Your beauty products will be delivered on{' '}
            <span className="font-medium text-primary-600">
              {selectedDate.toLocaleDateString()}
            </span>
          </p>
          
          <div className="bg-primary-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-primary-700">
              Order Total: <span className="font-bold">${total.toFixed(2)}</span>
            </p>
          </div>
          
          <p className="text-sm text-secondary-500">
            Redirecting to home page...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <button
            onClick={handleBackToCart}
            className="flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Cart</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            {/* Delivery Address */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <MapPin className="w-5 h-5 text-primary-600" />
                <h3 className="text-xl font-bold text-secondary-900">Delivery Address</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={address.name}
                    onChange={(e) => setAddress({ ...address, name: e.target.value })}
                    className="w-full px-3 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={address.phone}
                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    value={address.street}
                    onChange={(e) => setAddress({ ...address, street: e.target.value })}
                    className="w-full px-3 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your street address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full px-3 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your city"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                    className="w-full px-3 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your state"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    value={address.zipCode}
                    onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
                    className="w-full px-3 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your ZIP code"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Date */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Calendar className="w-5 h-5 text-primary-600" />
                <h3 className="text-xl font-bold text-secondary-900">Choose Delivery Date</h3>
              </div>

              <div className="space-y-4">
                <p className="text-secondary-600">
                  Select your preferred delivery date (2-30 days from today)
                </p>
                
                <div className="relative">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date) => setSelectedDate(date)}
                    minDate={minDate}
                    maxDate={maxDate}
                    dateFormat="MMMM d, yyyy"
                    className="w-full px-3 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholderText="Select delivery date"
                  />
                </div>

                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="text-sm text-primary-700">
                    <strong>Selected Date:</strong> {selectedDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <CreditCard className="w-5 h-5 text-primary-600" />
                <h3 className="text-xl font-bold text-secondary-900">Payment Method</h3>
              </div>

              <div className="space-y-4">
                <div className="border border-secondary-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="cod"
                      name="payment"
                      defaultChecked
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="cod" className="font-medium text-secondary-900">
                      Cash on Delivery
                    </label>
                  </div>
                  <p className="text-sm text-secondary-600 mt-2 ml-6">
                    Pay when your order is delivered to your doorstep
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-secondary-900 mb-6">Order Summary</h3>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {state.cart.map((item) => (
                  <div key={`${item.product.id}-${item.selectedShade || 'default'}`} className="flex items-center space-x-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-secondary-900 text-sm">{item.product.name}</p>
                      <p className="text-xs text-secondary-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-secondary-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-secondary-200 pt-4 space-y-3">
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
                <div className="border-t border-secondary-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-secondary-900">Total</span>
                    <span className="text-lg font-bold text-primary-600">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full mt-6 bg-primary-500 text-white py-3 rounded-full font-medium hover:bg-primary-600 transition-colors"
              >
                Place Order
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm text-secondary-600">
                  By placing this order, you agree to our Terms & Conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;