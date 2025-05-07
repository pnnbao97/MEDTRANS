import React from 'react';
import RequestForm from '../components/RequestForm';

const RequestBookPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <h1 className="text-2xl font-semibold text-accent-indigo">Yêu cầu bản dịch sách</h1>
            <p className="mt-4 text-base text-gray-600">
              Nếu bạn muốn yêu cầu dịch một cuốn sách y khoa, vui lòng điền vào biểu mẫu dưới đây với thông tin của bạn và lý do yêu cầu.
            </p>
            <div className="mt-8 bg-white p-8 rounded-lg shadow-md animate-fade-in">
              <RequestForm bookId="12345" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestBookPage;
