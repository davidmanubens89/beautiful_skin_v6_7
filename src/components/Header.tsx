import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';

interface HeaderLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
  isLandingPage: boolean;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ to, label, isScrolled, isLandingPage }) => (
  <Link
    to={to}
    className={`${
      isLandingPage
        ? isScrolled
          ? 'text-gray-600 hover:text-indigo-600'
          : 'text-white hover:text-indigo-200'
        : 'text-gray-600 hover:text-indigo-600'
    } transition-colors`}
  >
    {label}
  </Link>
);

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const { wishlist } = useWishlist();
  const [showWishlist, setShowWishlist] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isLandingPage
        ? isScrolled
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
        : 'bg-gray-100 bg-opacity-80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-semibold ${
          isLandingPage
            ? isScrolled
              ? 'text-indigo-600'
              : 'text-white'
            : 'text-indigo-600'
        }`}>
          SkinScience
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex space-x-4 mr-6">
            <HeaderLink to="/skin-assessment" label="Assessment" isScrolled={isScrolled} isLandingPage={isLandingPage} />
            <HeaderLink to="/daily-routine" label="Routine" isScrolled={isScrolled} isLandingPage={isLandingPage} />
            <HeaderLink to="/learn" label="Learn" isScrolled={isScrolled} isLandingPage={isLandingPage} />
            <HeaderLink to="/store" label="Store" isScrolled={isScrolled} isLandingPage={isLandingPage} />
            <HeaderLink to="/track-progress" label="Progress" isScrolled={isScrolled} isLandingPage={isLandingPage} />
            <HeaderLink to="/community" label="Community" isScrolled={isScrolled} isLandingPage={isLandingPage} />
          </nav>
          
          <div className="relative">
            <button
              onClick={() => setShowWishlist(!showWishlist)}
              className={`p-2 rounded-full relative ${
                isLandingPage && !isScrolled
                  ? 'text-white hover:bg-white hover:bg-opacity-20'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Heart className={`w-6 h-6 ${wishlist.length > 0 ? 'fill-current' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlist.length}
                </span>
              )}
            </button>

            {showWishlist && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Wishlist</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {wishlist.length === 0 ? (
                    <p className="px-4 py-3 text-gray-600 text-sm">Your wishlist is empty</p>
                  ) : (
                    <ul className="divide-y divide-gray-200">
                      {wishlist.map((productName, index) => (
                        <li key={index} className="px-4 py-3 hover:bg-gray-50">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-800">{productName}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowWishlist(false);
                              }}
                              className="text-sm text-indigo-600 hover:text-indigo-800"
                            >
                              View
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {wishlist.length > 0 && (
                  <div className="px-4 py-2 border-t border-gray-200">
                    <Link
                      to="/store"
                      onClick={() => setShowWishlist(false)}
                      className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm"
                    >
                      View All in Store
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;