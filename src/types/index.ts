export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  subcategory: string;
  rating: number;
  reviewCount: number;
  description: string;
  ingredients?: string[];
  shades?: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  discount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedShade?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  cart?: CartItem[];
  wishlist?: Product[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  productId: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories: string[];
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  deliveryDate: Date;
  address: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}