import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { FeaturedProducts } from './components/FeaturedProducts';
import { CategorySection } from './components/CategorySection';
import { PromoBanner } from './components/PromoBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ToastContainer } from './components/Toast';
import { ProductDetails } from './components/ProductDetails';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const MainContent: React.FC = () => {
  const { activePage, detailProduct } = useShop();

  // If a user is inspecting a specific product, show the comprehensive Product Detail view
  if (detailProduct) {
    return <ProductDetails />;
  }

  switch (activePage) {
    case 'shop':
      return <ShopPage />;
    case 'categories':
      return (
        <div className="pt-8">
          <CategorySection />
          <FeaturedProducts />
        </div>
      );
    case 'deals':
      return (
        <div className="pt-8 bg-[#F5F5FB]">
          <PromoBanner />
          <ShopPage />
        </div>
      );
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    case 'home':
    default:
      return (
        <main>
          <Hero />
          <TrustBar />
          <FeaturedProducts />
          <CategorySection />
          <PromoBanner />
          <WhyChooseUs />
          <Testimonials />
          <Newsletter />
        </main>
      );
  }
};

export default function App() {
  return (
    <ShopProvider>
      <div className="min-h-screen flex flex-col bg-[#050B1C] selection:bg-[#2563FF] selection:text-white font-sans">
        <Header />
        
        <div className="flex-grow">
          <MainContent />
        </div>

        <Footer />

        {/* Global Drawers & Modals */}
        <CartDrawer />
        <QuickViewModal />
        <SearchModal />
        <CheckoutModal />
        <ToastContainer />
      </div>
    </ShopProvider>
  );
}
