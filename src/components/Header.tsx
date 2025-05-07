import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Book, Users, FileText, Search, X, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                <path d="M12 8v8m-4-4h8" />
              </svg>
              <span className="text-white font-bold text-2xl">MedTrans</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-all"
            >
              <Home className="h-4 w-4 mr-1" />
              Trang chủ
            </Link>
            <Link
              to="/books"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-all"
            >
              <Book className="h-4 w-4 mr-1" />
              Thư viện
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-all"
            >
              <Users className="h-4 w-4 mr-1" />
              Đội ngũ
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-white transition-all"
            >
              <FileText className="h-4 w-4 mr-1" />
              Giới thiệu
            </Link>
          </div>

          {/* Search and Login */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-full leading-5 bg-white bg-opacity-90 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white focus:bg-opacity-100 transition duration-150 ease-in-out sm:text-sm"
                placeholder="Tìm kiếm sách y khoa..."
                type="search"
              />
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
              Đăng nhập
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all"
            >
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white rounded-b-lg shadow-lg absolute w-full z-50">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 text-base font-medium text-blue-600 border-l-4 border-blue-500 hover:bg-blue-50 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Trang chủ
              </div>
            </Link>
            <Link
              to="/books"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 border-l-4 border-transparent hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Book className="h-5 w-5 mr-2" />
                Thư viện
              </div>
            </Link>
            <Link
              to="/team"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 border-l-4 border-transparent hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Đội ngũ
              </div>
            </Link>
            <Link
              to="/about"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 border-l-4 border-transparent hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Giới thiệu
              </div>
            </Link>
          </div>
          <div className="pt-4 pb-5 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Tìm kiếm sách y khoa..."
                  type="search"
                />
              </div>
            </div>
            <div className="mt-3 px-4">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;