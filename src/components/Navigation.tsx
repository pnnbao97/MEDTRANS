import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Book, Users, FileText, Search, Menu, X, BookOpen, Heart, Bell } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 animate-fade-in ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <BookOpen className={`h-8 w-8 ${isScrolled ? 'text-primary-color' : 'text-white'}`} />
                <span className={`ml-2 font-bold text-2xl font-lora ${isScrolled ? 'text-primary-color' : 'text-white'}`}>
                  MedTrans
                </span>
              </Link>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                  isScrolled 
                    ? 'border-primary-color text-text-primary' 
                    : 'border-white text-white'
                } text-sm font-medium transition-all hover:opacity-80`}
              >
                <Home className="h-4 w-4 mr-1" />
                Trang chủ
              </Link>
              <Link
                to="/books"
                className={`inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium ${
                  isScrolled ? 'text-gray-500 hover:text-primary-color hover:border-gray-300' : 'text-white hover:border-white/50'
                } transition-all`}
              >
                <Book className="h-4 w-4 mr-1" />
                Thư viện
              </Link>
              <Link
                to="/team"
                className={`inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium ${
                  isScrolled ? 'text-gray-500 hover:text-primary-color hover:border-gray-300' : 'text-white hover:border-white/50'
                } transition-all`}
              >
                <Users className="h-4 w-4 mr-1" />
                Đội ngũ
              </Link>
              <Link
                to="/about"
                className={`inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium ${
                  isScrolled ? 'text-gray-500 hover:text-primary-color hover:border-gray-300' : 'text-white hover:border-white/50'
                } transition-all`}
              >
                <FileText className="h-4 w-4 mr-1" />
                Giới thiệu
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {isSearchOpen ? (
              <div className="relative animate-fade-in">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-primary-color sm:text-sm transition-all"
                  placeholder="Tìm kiếm sách y khoa..."
                  type="search"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              </div>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-full ${
                  isScrolled ? 'bg-gray-100 text-gray-500' : 'bg-white/10 text-white'
                } hover:bg-primary-color hover:text-white transition-all`}
              >
                <Search className="h-5 w-5" />
              </button>
            )}
            
            <button className={`p-2 rounded-full ${
              isScrolled ? 'bg-gray-100 text-gray-500' : 'bg-white/10 text-white'
            } hover:bg-primary-color hover:text-white transition-all relative`}>
              <Heart className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 transform -translate-y-1 translate-x-1"></span>
            </button>
            
            <button className={`p-2 rounded-full ${
              isScrolled ? 'bg-gray-100 text-gray-500' : 'bg-white/10 text-white'
            } hover:bg-primary-color hover:text-white transition-all relative`}>
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 transform -translate-y-1 translate-x-1"></span>
            </button>
            
            <Link
              to="/login"
              className={`ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm ${
                isScrolled 
                  ? 'text-white bg-primary-color hover:bg-cyan-700' 
                  : 'text-primary-color bg-white hover:bg-gray-100'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all`}
            >
              Đăng nhập
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-400 hover:text-gray-500 hover:bg-gray-100' : 'text-white hover:text-white hover:bg-white/10'
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500`}
            >
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block animate-slide-in' : 'hidden'} md:hidden absolute w-full bg-white shadow-lg`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block pl-3 pr-4 py-2 border-l-4 border-primary-color text-base font-medium text-primary-color bg-cyan-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <Home className="h-5 w-5 mr-2" />
              Trang chủ
            </div>
          </Link>
          <Link
            to="/books"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-primary-color"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <Book className="h-5 w-5 mr-2" />
              Thư viện
            </div>
          </Link>
          <Link
            to="/team"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-primary-color"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Đội ngũ
            </div>
          </Link>
          <Link
            to="/about"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-primary-color"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Giới thiệu
            </div>
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Tìm kiếm sách y khoa..."
                type="search"
              />
            </div>
          </div>
          <div className="mt-3 px-4 space-y-1">
            <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary-color w-full">
              <Heart className="h-5 w-5 mr-2 text-gray-500" />
              Danh sách yêu thích
            </button>
            <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary-color w-full">
              <Bell className="h-5 w-5 mr-2 text-gray-500" />
              Thông báo
            </button>
          </div>
          <div className="mt-3 px-4 pb-2">
            <Link
              to="/login"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-color hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
