import React from 'react';
import { BookOpen, Search, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="hero-gradient animate-fade-in relative overflow-hidden">
      {/* Abstract medical pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="medical-pattern w-full h-full"></div>
      </div>
      
      {/* Animated circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full animate-float"></div>
      <div className="absolute top-40 -left-20 w-40 h-40 bg-white opacity-10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl font-lora">
            <span className="block">Tài liệu y khoa</span>
            <span className="block text-secondary-color mt-2">cho tương lai Việt Nam</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-100">
            Tiếp cận nguồn tri thức y khoa quốc tế thông qua các bản dịch chất lượng cao
            từ đội ngũ chuyên gia hàng đầu.
          </p>
          
          <div className="mt-12 max-w-md mx-auto sm:max-w-xl sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <a
                href="#featured-books"
                className="btn btn-secondary py-3 px-8 text-base uppercase tracking-wide flex items-center"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Khám phá thư viện
              </a>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 rounded-md shadow">
              <a
                href="/request"
                className="btn btn-outline py-3 px-8 text-base uppercase tracking-wide bg-white flex items-center"
              >
                Yêu cầu bản dịch
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Search bar with floating animation */}
          <div className="mt-12 max-w-xl mx-auto animate-float" style={{animationDelay: '0.5s', animationDuration: '4s'}}>
            <div className="relative rounded-full shadow-xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full py-4 pl-12 pr-10 bg-white rounded-full focus:ring-4 focus:ring-cyan-300 focus:border-transparent"
                placeholder="Tìm kiếm sách y khoa theo tên, tác giả hoặc chuyên ngành..."
              />
              <button className="absolute inset-y-0 right-0 px-6 flex items-center bg-primary-color rounded-r-full text-white hover:bg-cyan-700 transition-all">
                Tìm kiếm
              </button>
            </div>
          </div>
          
          {/* Stats section */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="text-slate-200 mt-2">Đầu sách y khoa</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-white">5,000+</div>
              <div className="text-slate-200 mt-2">Trang được dịch</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-white">20+</div>
              <div className="text-slate-200 mt-2">Chuyên gia y khoa</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8fafc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,165.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
