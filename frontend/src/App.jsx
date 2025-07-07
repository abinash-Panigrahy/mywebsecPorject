import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="pt-20">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};


export default App ;
