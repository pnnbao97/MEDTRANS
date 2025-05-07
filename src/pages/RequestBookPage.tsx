import React from 'react';
import RequestForm from '../components/RequestForm';

const RequestBookPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            {/* Title Section */}
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 text-center">
              Yêu cầu bản dịch sách
            </h1>
            <p className="mt-4 text-lg text-gray-700 text-center">
              Nếu bạn muốn yêu cầu dịch một cuốn sách y khoa, vui lòng điền vào biểu mẫu dưới đây với thông tin của bạn và lý do yêu cầu.
            </p>

            {/* Form Section */}
            <div className="mt-8 bg-white p-8 rounded-lg shadow-lg animate-fade-in">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">Thông tin yêu cầu</h2>
              <RequestForm bookId="12345" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestBookPage;