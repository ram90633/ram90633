import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { Product, CartItem, User } from '../types';
import { authService } from '../services/authService';

interface AppState {
  user: User | null;
  cart: CartItem[];
  wishlist: Product[];
  searchQuery: string;
  selectedCategory: string;
  currentPage: 'home' | 'category' | 'cart' | 'checkout' | 'auth';
  showAuthModal: boolean;
  authMode: 'login' | 'register';
}

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; selectedShade?: string } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_SELECTED_CATEGORY'; payload: string }
  | { type: 'SET_CURRENT_PAGE'; payload: 'home' | 'category' | 'cart' | 'checkout' | 'auth' }
  | { type: 'SET_SHOW_AUTH_MODAL'; payload: boolean }
  | { type: 'SET_AUTH_MODE'; payload: 'login' | 'register' }
  | { type: 'LOAD_USER_DATA'; payload: { cart: CartItem[]; wishlist: Product[] } };

const initialState: AppState = {
  user: null,
  cart: [],
  wishlist: [],
  searchQuery: '',
  selectedCategory: 'All',
  currentPage: 'home',
  showAuthModal: false,
  authMode: 'login'
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    
    case 'LOAD_USER_DATA':
      return { 
        ...state, 
        cart: action.payload.cart, 
        wishlist: action.payload.wishlist 
      };
    
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(
        item => item.product.id === action.payload.product.id && 
        item.selectedShade === action.payload.selectedShade
      );
      
      const newCart = existingItem
        ? state.cart.map(item =>
            item.product.id === action.payload.product.id && 
            item.selectedShade === action.payload.selectedShade
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        : [...state.cart, {
            product: action.payload.product,
            quantity: action.payload.quantity,
            selectedShade: action.payload.selectedShade
          }];
      
      // Update user data in storage if logged in
      if (state.user) {
        authService.updateUserData(state.user.id, newCart, state.wishlist);
      }
      
      return { ...state, cart: newCart };
    
    case 'REMOVE_FROM_CART':
      const filteredCart = state.cart.filter(item => item.product.id !== action.payload);
      
      if (state.user) {
        authService.updateUserData(state.user.id, filteredCart, state.wishlist);
      }
      
      return { ...state, cart: filteredCart };
    
    case 'UPDATE_CART_QUANTITY':
      const updatedCart = state.cart.map(item =>
        item.product.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      
      if (state.user) {
        authService.updateUserData(state.user.id, updatedCart, state.wishlist);
      }
      
      return { ...state, cart: updatedCart };
    
    case 'CLEAR_CART':
      if (state.user) {
        authService.updateUserData(state.user.id, [], state.wishlist);
      }
      return { ...state, cart: [] };
    
    case 'ADD_TO_WISHLIST':
      if (state.wishlist.find(item => item.id === action.payload.id)) {
        return state;
      }
      const newWishlist = [...state.wishlist, action.payload];
      
      if (state.user) {
        authService.updateUserData(state.user.id, state.cart, newWishlist);
      }
      
      return { ...state, wishlist: newWishlist };
    
    case 'REMOVE_FROM_WISHLIST':
      const filteredWishlist = state.wishlist.filter(item => item.id !== action.payload);
      
      if (state.user) {
        authService.updateUserData(state.user.id, state.cart, filteredWishlist);
      }
      
      return { ...state, wishlist: filteredWishlist };
    
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    
    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    
    case 'SET_SHOW_AUTH_MODAL':
      return { ...state, showAuthModal: action.payload };
    
    case 'SET_AUTH_MODE':
      return { ...state, authMode: action.payload };
    
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load user data on app start
  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      dispatch({ type: 'SET_USER', payload: currentUser });
      if (currentUser.cart && currentUser.wishlist) {
        dispatch({ 
          type: 'LOAD_USER_DATA', 
          payload: { 
            cart: currentUser.cart, 
            wishlist: currentUser.wishlist 
          } 
        });
      }
    }
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};