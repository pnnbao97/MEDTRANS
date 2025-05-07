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
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Navigation */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6 heading-gradient">Khám phá theo chuyên ngành</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-pill ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Books Section */}
          <div className="my-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold heading-gradient">Sách nổi bật</h2>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center group"
              >
                Xem tất cả
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredBooks.map((book) => (
                <div key={book.id} className="book-card animate-fade-in-up">
                  <div className="book-cover">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                    <div className="book-specialty">{book.specialty}</div>
                  </div>
                  <div className="book-info">
                    <h3 className="book-title">
                      <a href={`/books/${book.id}`}>{book.title}</a>
                    </h3>
                    <div className="book-meta">
                      <User className="h-4 w-4 mr-1" />
                      <span>{book.author}</span>
                    </div>
                    <div className="book-meta">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>
                        {book.pages} trang | {book.previewPages} trang xem trước
                      </span>
                    </div>
                    <div className="book-actions">
                      <a href={`/books/${book.id}`} className="preview-link">
                        Xem trước
                      </a>
                      <button
                        onClick={() => console.log(`Requesting book: ${book.title}`)}
                        className="request-button"
                      >
                        Yêu cầu bản dịch
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Featured Section */}
          <div className="my-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="/api/placeholder/800/600" 
                    alt="Sách mới" 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <div className="badge mb-4">Mới cập nhật</div>
                  <h2 className="text-2xl font-bold mb-4 heading-gradient">Hợp tác cùng các chuyên gia y khoa</h2>
                  <p className="text-gray-600 mb-6">
                    Chúng tôi đang làm việc với các chuyên gia y khoa hàng đầu trong nước để mang đến những bản dịch chất lượng cao. Đội ngũ biên dịch của chúng tôi không chỉ thông thạo về ngôn ngữ mà còn có kiến thức chuyên môn sâu rộng.
                  </p>
                  <a href="/team" className="btn-primary inline-flex items-center self-start">
                    Tìm hiểu thêm
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;