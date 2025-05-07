import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-teal-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Tài liệu y khoa cho mọi người
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-teal-100">
            Tiếp cận nguồn tri thức y khoa quốc tế thông qua các bản dịch chất lượng cao
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="#featured-books"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-700 bg-white hover:bg-teal-50 sm:px-8"
              >
                Khám phá thư viện
              </a>
              <a
                href="/request"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600 sm:px-8"
              >
                Yêu cầu bản dịch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;