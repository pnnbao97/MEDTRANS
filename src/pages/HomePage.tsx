import React, { useState } from 'react';
import { ChevronRight, BookOpen, User } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const categories = ['Tất cả', 'Nội khoa', 'Ngoại khoa', 'Sản phụ khoa', 'Nhi khoa', 'Y học cơ sở'];

  const featuredBooks = [
    {
      id: 1,
      title: 'Giải phẫu học Gray',
      specialty: 'Y học cơ sở',
      cover: '/api/placeholder/200/300',
      pages: 1250,
      previewPages: 50,
      author: 'Henry Gray',
    },
    {
      id: 2,
      title: 'Nội khoa Harrison',
      specialty: 'Nội khoa',
      cover: '/api/placeholder/200/300',
      pages: 2800,
      previewPages: 50,
      author: 'J. Larry Jameson',
    },
    {
      id: 3,
      title: 'Sản phụ khoa Williams',
      specialty: 'Sản phụ khoa',
      cover: '/api/placeholder/200/300',
      pages: 1450,
      previewPages: 50,
      author: 'F. Gary Cunningham',
    },
    {
      id: 4,
      title: 'Nhi khoa Nelson',
      specialty: 'Nhi khoa',
      cover: '/api/placeholder/200/300',
      pages: 2100,
      previewPages: 50,
      author: 'Robert M. Kliegman',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
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
                        ? 'border-teal-500 text-accent-indigo'
                        : 'border-transparent text-gray-500 hover:text-accent-amber hover:border-gray-300'
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
              <h2 className="text-xl font-semibold text-accent-indigo">Sách nổi bật</h2>
              <a href="#" className="text-sm font-medium text-accent-coral hover:text-rose-600 flex items-center">
                Xem tất cả
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm strugg:grid-cols-2 lg:grid-cols-4">
              {featuredBooks.map((book) => (
                <div
                  key={book.id}
                  className="group bg-white overflow-hidden shadow-md rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
                >
                  <div className="relative aspect-w-2 aspect-h-3 bg-gray-200">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                    <div className="absolute top-2 right-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent-coral text-white">
                        {book.specialty}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-accent-indigo group-hover:text-indigo-700">
                      <a href={`/books/${book.id}`}>
                        <span className="absolute inset-0" aria-hidden="true"></span>
                        {book.title}
                      </a>
                    </h3>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <User className="h-4 w-4 mr-1 text-accent-amber" />
                      <span>{book.author}</span>
                    </div>
                    <div className="mt-1 flex items-center text-xs text-gray-500">
                      <BookOpen className="h-4 w-4 mr-1 text-accent-amber" />
                      <span>{book.pages} trang | {book.previewPages} trang xem trước</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <a
                        href={`/books/${book.id}`}
                        className="text-xs font-medium text-accent-coral hover:text-rose-600"
                      >
                        Xem trước
                      </a>
                      <button
                        onClick={() => console.log(`Requesting book: ${book.title}`)}
                        className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-accent-amber hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
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
