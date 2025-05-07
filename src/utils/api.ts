import axios from 'axios';

const API_BASE_URL = 'https://api.medtrans.com'; // Replace with your actual API base URL

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const fetchBookById = async (bookId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with ID ${bookId}:`, error);
    throw error;
  }
};

export const requestBookTranslation = async (requestData: { bookId: string; language: string }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/request-translation`, requestData);
    return response.data;
  } catch (error) {
    console.error('Error requesting book translation:', error);
    throw error;
  }
};