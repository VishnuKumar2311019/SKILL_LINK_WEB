import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-bg-off font-sans text-slate-800">
      {/* Premium Sticky Navigation */}
      <Navbar />

      {/* Main Pages Content */}
      <main className="flex-grow pt-[72px] md:pt-[84px]">
        <Outlet />
      </main>

      {/* Premium Deep Navy Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
