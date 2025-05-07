import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const categories = ['Tất cả', 'Nội khoa', 'Ngoại khoa', 'Sản phụ khoa', 'Nhi khoa', 'Y học cơ sở'];

  const featuredBooks = [
    { id: 1, title: 'Giải phẫu học Gray', specialty: 'Y học cơ sở', cover: '/api/placeholder/200/300', pages: 1250, previewPages: 50 },
    { id: 2, title: 'Nội khoa Harrison', specialty: 'Nội khoa', cover: '/api/placeholder/200/300', pages: 2800, previewPages: 50 },
    { id: 3, title: 'Sản phụ khoa Williams', specialty: 'Sản phụ khoa', cover: '/api/placeholder/200/300', pages: 1450, previewPages: 50 },
    { id: 4, title: 'Nhi khoa Nelson', specialty: 'Nhi khoa', cover: '/api/placeholder/200/300', pages: 2100, previewPages: 50 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeroSection />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeCategory === category
                        ? 'border-teal-500 text-teal-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="px-4 py-8 sm:px-0">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Sách nổi bật</h2>
              <a href="#" className="text-sm font-medium text-teal-600 hover:text-teal-500 flex items-center">
                Xem tất cả
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredBooks.map((book) => (
                <div
                  key={book.id}
                  className="group bg-white overflow-hidden shadow-sm rounded-lg transition-all duration-300 hover:shadow-md"
                >
                  <div className="relative aspect-w-2 aspect-h-3 bg-gray-200">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-64 object-cover object-center group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        {book.specialty}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-teal-600">
                      <a href={`/books/${book.id}`}>
                        <span className="absolute inset-0" aria-hidden="true"></span>
                        {book.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {book.pages} trang | {book.previewPages} trang xem trước
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <a
                        href={`/books/${book.id}`}
                        className="text-xs font-medium text-teal-600 hover:text-teal-500"
                      >
                        Xem trước
                      </a>
                      <button
                        onClick={() => console.log(`Requesting book: ${book.title}`)}
                        className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                      >
                        Yêu cầu bản dịch
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;