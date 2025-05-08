
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-indigo-600 hover:text-indigo-500">
              Tic Tac Toe
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">
              Play
            </Link>
            <Link to="/how-to-play" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">
              How to Play
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">
              Blog
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">
              About
            </Link>
            <Link to="/privacy" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">
              Privacy
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">
              Contact
            </Link>
          </div>
          <div className="sm:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-100 py-2">
            <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Play
              </Link>
              <Link 
                to="/how-to-play" 
                className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                How to Play
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/privacy" 
                className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
