import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import FeaturedCategories from './components/FeaturedCategories';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-secondary-50">
        <Header />
        <main>
          <Hero />
          <CategoryFilter />
          <FeaturedCategories />
          <ProductGrid />
        </main>
        <Footer />
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
    </AppProvider>
  );
}

export default App;