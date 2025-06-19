import React from 'react';
import { AppProvider } from './context/AppContext';
import { useApp } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import FeaturedCategories from './components/FeaturedCategories';
import ProductGrid from './components/ProductGrid';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

const AppContent: React.FC = () => {
  const { state } = useApp();

  const renderCurrentPage = () => {
    switch (state.currentPage) {
      case 'category':
        return <CategoryPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      default:
        return (
          <>
            <Hero />
            <CategoryFilter />
            <FeaturedCategories />
            <ProductGrid />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-secondary-50">
      <Header />
      <main>
        {renderCurrentPage()}
      </main>
      {state.currentPage === 'home' && <Footer />}
      <AuthModal />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1e293b',
            color: '#fff',
            borderRadius: '12px',
          },
        }}
      />
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;