
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <button className="text-gray-600 hover:text-indigo-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
