import React from 'react';
import { useParams } from 'react-router-dom';
import RequestForm from '../components/RequestForm';
import { BookOpen, User } from 'lucide-react';

const BookPreviewPage = () => {
  const { bookId } = useParams<{ bookId: string }>();

  const book = {
    id: parseInt(bookId || '0', 10),
    title: 'Giải phẫu học Gray',
    author: 'Henry Gray',
    specialty: 'Y học cơ sở',
    cover: '/api/placeholder/200/300',
    pages: 1250,
    previewPages: 50,
    description: 'A comprehensive guide to human anatomy, widely regarded as a definitive resource for medical students and professionals.',
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="group bg-white overflow-hidden shadow-md rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in">
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
                      {book.title}
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
                      <button
                        onClick={() => console.log('Preview clicked')}
                        className="text-xs font-medium text-accent-coral hover:text-rose-600"
                      >
                        Xem trước
                      </button>
                      <button
                        onClick={() => console.log('Request clicked')}
                        className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-accent-amber hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                      >
                        Yêu cầu bản dịch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold text-accent-indigo">{book.title}</h2>
                <p className="mt-2 text-base text-gray-600">{book.description}</p>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <User className="h-5 w-5 mr-2 text-accent-amber" />
                  <span>Tác giả: {book.author}</span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-accent-indigo">Xem trước</h3>
                <div className="mt-2 bg-white p-6 rounded-lg shadow-sm animate-fade-in">
                  <p className="text-sm text-gray-600">
                    Xem trước {book.previewPages} trang đầu tiên:
                  </p>
                  <p className="mt-2 text-sm text-gray-500">[Nội dung xem trước sẽ được hiển thị tại đây]</p>
                </div>
                <div className="mt-8">
                  {book.id && <RequestForm bookId={book.id.toString()} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookPreviewPage;
