import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookPreviewPage from './pages/BookPreviewPage';
import RequestBookPage from './pages/RequestBookPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books/:bookId" element={<BookPreviewPage />} />
            <Route path="/request" element={<RequestBookPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
