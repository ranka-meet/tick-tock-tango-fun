
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Navbar />
      <main className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-sm text-gray-500">© 2025 Tic Tac Toe. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-gray-500 hover:text-indigo-600">Privacy Policy</a>
              <a href="/about" className="text-sm text-gray-500 hover:text-indigo-600">About</a>
              <a href="/contact" className="text-sm text-gray-500 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
