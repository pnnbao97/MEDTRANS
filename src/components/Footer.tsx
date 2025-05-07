import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 mt-auto animate-fade-in">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-accent-coral">
              Về chúng tôi
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-accent-coral">
              Đội ngũ
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-accent-coral">
              Liên hệ
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-accent-coral">
              Điều khoản sử dụng
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-accent-coral">
              Chính sách bảo mật
            </a>
          </div>
        </nav>
        <div className="mt-8">
          <p className="text-center text-base text-gray-400">
            © 2025 MedTrans, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
