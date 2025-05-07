import React from 'react';

interface RequestFormProps {
  bookId: string;
}

export const RequestForm: React.FC<RequestFormProps> = ({ bookId }) => {
  return (
    <form className="bg-white p-4 shadow rounded-md">
      <h3 className="text-lg font-semibold">Request Full Translation</h3>
      <p className="text-sm text-gray-600">Book ID: {bookId}</p>
      <div className="mt-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
          Reason for Request
        </label>
        <textarea
          id="reason"
          rows={4}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        ></textarea>
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Submit Request
      </button>
    </form>
  );
};

export default RequestForm;