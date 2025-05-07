import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 mt-auto animate-fade-in text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6">
          <a href="#" className="text-base hover:text-yellow-400 transition-colors duration-300">
            Về chúng tôi
          </a>
          <a href="#" className="text-base hover:text-yellow-400 transition-colors duration-300">
            Đội ngũ
          </a>
          <a href="#" className="text-base hover:text-yellow-400 transition-colors duration-300">
            Liên hệ
          </a>
          <a href="#" className="text-base hover:text-yellow-400 transition-colors duration-300">
            Điều khoản sử dụng
          </a>
          <a href="#" className="text-base hover:text-yellow-400 transition-colors duration-300">
            Chính sách bảo mật
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-8">
          <p className="text-center text-sm text-gray-300">
            © 2025 MedTrans, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;