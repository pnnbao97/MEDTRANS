import React from 'react';
import { useParams } from 'react-router-dom';
import { RequestForm } from '../components/RequestForm';

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
    description: 'A comprehensive guide to human anatomy.',
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="group bg-white overflow-hidden shadow-sm rounded-lg transition-all duration-300 hover:shadow-md">
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
                      {book.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {book.pages} trang | {book.previewPages} trang xem trước
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <button
                        onClick={() => console.log('Preview clicked')}
                        className="text-xs font-medium text-teal-600 hover:text-teal-500"
                      >
                        Xem trước
                      </button>
                      <button
                        onClick={() => console.log('Request clicked')}
                        className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                      >
                        Yêu cầu bản dịch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold text-gray-900">{book.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{book.description}</p>
                <p className="mt-1 text-sm text-gray-500">Tác giả: {book.author}</p>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Xem trước</h3>
                <div className="mt-2 bg-white p-6 rounded-lg shadow-sm">
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