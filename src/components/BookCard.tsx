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
    <div className="group bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-w-2 aspect-h-3 bg-gray-200">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-64 object-cover object-center group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {book.specialty}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
          <a href="#">
            <span className="absolute inset-0" aria-hidden="true"></span>
            {book.title}
          </a>
        </h3>
        <p className="mt-1 text-xs text-gray-500">By {book.author}</p>
        <div className="mt-4 flex justify-between items-center">
          <button 
            onClick={onPreview} 
            className="text-xs font-medium text-blue-600 hover:text-blue-500"
          >
            Preview
          </button>
          <button 
            onClick={onRequest} 
            className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Request this book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;