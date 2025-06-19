import { User, CartItem, Product } from '../types';

// Mock database
const USERS_KEY = 'glamourhub_users';
const CURRENT_USER_KEY = 'glamourhub_current_user';

interface StoredUser extends User {
  password: string;
  cart: CartItem[];
  wishlist: Product[];
}

// Initialize with some demo users
const initializeUsers = () => {
  const existingUsers = localStorage.getItem(USERS_KEY);
  if (!existingUsers) {
    const demoUsers: StoredUser[] = [
      {
        id: '1',
        name: 'Demo User',
        email: 'demo@glamourhub.com',
        password: 'demo123',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
        cart: [],
        wishlist: []
      }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(demoUsers));
  }
};

export const authService = {
  login: async (email: string, password: string): Promise<User> => {
    initializeUsers();
    const users: StoredUser[] = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid email or password');
    }

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      cart: user.cart,
      wishlist: user.wishlist
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
    return userWithoutPassword;
  },

  register: async (name: string, email: string, password: string): Promise<User> => {
    initializeUsers();
    const users: StoredUser[] = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    
    if (users.find(u => u.email === email)) {
      throw new Error('User already exists with this email');
    }

    const newUser: StoredUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      cart: [],
      wishlist: []
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    const userWithoutPassword = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      cart: newUser.cart,
      wishlist: newUser.wishlist
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
    return userWithoutPassword;
  },

  logout: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  getCurrentUser: (): User | null => {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  updateUserData: (userId: string, cart: CartItem[], wishlist: Product[]) => {
    const users: StoredUser[] = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex !== -1) {
      users[userIndex].cart = cart;
      users[userIndex].wishlist = wishlist;
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      
      // Update current user session
      const currentUser = {
        ...users[userIndex],
        cart,
        wishlist
      };
      delete (currentUser as any).password;
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    }
  }
};