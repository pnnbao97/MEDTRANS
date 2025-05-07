import React from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  specialty: string;
  cover: string;
}

interface BookCardProps {
  book: Book;
  onPreview: () => void;
  onRequest: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onPreview, onRequest }) => {
  return (
    <div className="group bg-white overflow-hidden shadow-md rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Book Cover */}
      <div className="relative aspect-w-2 aspect-h-3 bg-gray-200">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute top-2 left-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md">
            {book.specialty}
          </span>
        </div>
      </div>

      {/* Book Details */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
          <a href="#">
            <span className="absolute inset-0" aria-hidden="true"></span>
            {book.title}
          </a>
        </h3>
        <p className="mt-1 text-xs text-gray-500">Tác giả: {book.author}</p>
        <div className="mt-4 flex justify-between items-center">
          {/* Preview Button */}
          <button
            onClick={onPreview}
            className="text-xs font-medium text-teal-600 hover:text-teal-500 transition-colors"
          >
            Xem trước
          </button>
          {/* Request Button */}
          <button
            onClick={onRequest}
            className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 hover:shadow-lg"
          >
            Yêu cầu sách
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;