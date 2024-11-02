import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

export default function Navbarx() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LogicGenX</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/solutions" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Our Solutions
            </Link>
            <Link to="/success-stories" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Success Stories
            </Link>
            <Link to="/mission" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Our Mission
            </Link>
            <Link to="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              Connect With Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/solutions"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={toggleMenu}
            >
              Our Solutions
            </Link>
            <Link
              to="/success-stories"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={toggleMenu}
            >
              Success Stories
            </Link>
            <Link
              to="/mission"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={toggleMenu}
            >
              Our Mission
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
              onClick={toggleMenu}
            >
              Connect With Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}