import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RequestForm from '../components/RequestForm';
import { BookOpen, User, ChevronRight, Calendar, Star, Download } from 'lucide-react';

const BookPreviewPage = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [activeTab, setActiveTab] = useState('preview');

  // Giả định dữ liệu sách - trong thực tế bạn sẽ lấy dữ liệu này từ API dựa trên bookId
  const book = {
    id: parseInt(bookId || '0', 10),
    title: 'Giải phẫu học Gray',
    author: 'Henry Gray',
    specialty: 'Y học cơ sở',
    cover: '/api/placeholder/200/300',
    pages: 1250,
    previewPages: 50,
    publishedYear: 2021,
    edition: '42nd Edition',
    rating: 4.8,
    downloads: 1250,
    description: 'Sách Giải phẫu học Gray là tài liệu kinh điển trong lĩnh vực y học, cung cấp kiến thức toàn diện về cấu trúc cơ thể người. Được xuất bản lần đầu vào năm 1858, sách đã được cập nhật liên tục để phản ánh những tiến bộ mới nhất trong lĩnh vực giải phẫu học và được coi là tài liệu tham khảo thiết yếu cho sinh viên y khoa và các chuyên gia y tế.',
    previewContent: `
    # Chương 1: Giới thiệu về Giải phẫu học

    Giải phẫu học là môn học nghiên cứu về cấu trúc của cơ thể và mối quan hệ giữa các bộ phận của nó. Đây là nền tảng của y học và là kiến thức cơ bản mà mọi sinh viên y khoa cần phải nắm vững.

    ## 1.1 Lịch sử phát triển của Giải phẫu học

    Lịch sử của giải phẫu học có thể được truy ngược từ thời cổ đại Ai Cập, nơi các nhà ướp xác đã phát triển kiến thức về cơ thể con người. Tuy nhiên, chính Hippocrates (460-370 TCN), "cha đẻ của y học", là người đặt nền móng cho sự phát triển của giải phẫu học như một ngành khoa học.
    
    Galen (129-210 SCN) đã mở rộng kiến thức giải phẫu thông qua các phẫu thuật trên động vật, mặc dù nhiều kết luận của ông đã được chứng minh là không chính xác sau này. Andreas Vesalius (1514-1564) đã cách mạng hóa lĩnh vực này với tác phẩm "De Humani Corporis Fabrica", dựa trên quan sát trực tiếp từ các ca giải phẫu tử thi con người.

    ## 1.2 Thuật ngữ giải phẫu

    Để mô tả chính xác vị trí và định hướng của các cấu trúc trong cơ thể, giải phẫu học sử dụng một hệ thống thuật ngữ đặc biệt:

    - **Superior** (trên): Hướng về phía đầu
    - **Inferior** (dưới): Hướng về phía chân
    - **Anterior/Ventral** (trước): Hướng về phía bụng
    - **Posterior/Dorsal** (sau): Hướng về phía lưng
    - **Medial** (trong): Hướng về đường giữa cơ thể
    - **Lateral** (ngoài): Hướng ra xa đường giữa cơ thể
    - **Proximal** (gần): Gần với điểm bám gốc
    - **Distal** (xa): Xa điểm bám gốc
    `,
    relatedBooks: [
      {
        id: 2,
        title: 'Sinh lý học Guyton & Hall',
        specialty: 'Y học cơ sở',
        cover: '/api/placeholder/200/300',
      },
      {
        id: 3,
        title: 'Dược lý học Katzung',
        specialty: 'Y học cơ sở',
        cover: '/api/placeholder/200/300',
      },
      {
        id: 4,
        title: 'Atlas Giải phẫu học Netter',
        specialty: 'Y học cơ sở',
        cover: '/api/placeholder/200/300',
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-bg-primary to-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary-color to-secondary-color py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
              <div className="relative w-48 h-64 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 m-2">
                  <span className="badge">{book.specialty}</span>
                </div>
              </div>
            </div>
            <div className="md:w-3/4 md:pl-10">
              <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
              <div className="flex items-center text-sm mb-4">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">{book.author}</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{book.publishedYear} • {book.edition}</span>
                <Star className="h-4 w-4 mr-1 text-yellow-300" />
                <span className="mr-4">{book.rating}/5.0</span>
                <Download className="h-4 w-4 mr-1" />
                <span>{book.downloads} lượt tải</span>
              </div>
              <p className="text-sm text-gray-100 mb-6 line-clamp-3">
                {book.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="btn-primary shine-effect flex items-center">
                  Yêu cầu bản dịch
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
                <button className="bg-white text-primary-color px-4 py-2 rounded-md hover:bg-gray-100 transition">
                  Xem trước
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Tabs */}
          <div className="mb-8 border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                className={`pb-4 px-1 border-b-2 transition-all ${
                  activeTab === 'preview'
                    ? 'border-primary-color text-primary-color font-medium'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('preview')}
              >
                Xem trước
              </button>
              <button
                className={`pb-4 px-1 border-b-2 transition-all ${
                  activeTab === 'details'
                    ? 'border-primary-color text-primary-color font-medium'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('details')}
              >
                Chi tiết sách
              </button>
              <button
                className={`pb-4 px-1 border-b-2 transition-all ${
                  activeTab === 'request'
                    ? 'border-primary-color text-primary-color font-medium'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('request')}
              >
                Yêu cầu bản dịch
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in-up">
            {activeTab === 'preview' && (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 heading-gradient">Xem trước nội dung</h2>
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: book.previewContent.replace(/\n/g, '<br>') }} />
                </div>
                <div className="mt-8 p-4 bg-bg-secondary rounded-lg">
                  <p className="text-sm text-gray-600">
                    Bạn đang xem trước {book.previewPages} trang đầu tiên của {book.pages} trang. 
                    Để đọc toàn bộ nội dung sách bằng tiếng Việt, vui lòng gửi yêu cầu dịch.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 heading-gradient">Thông tin chi tiết</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Thông tin sách</h3>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="py-2 text-gray-500">Tên sách:</td>
                          <td className="py-2 font-medium">{book.title}</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-500">Tác giả:</td>
                          <td className="py-2">{book.author}</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-500">Chuyên ngành:</td>
                          <td className="py-2">{book.specialty}</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-500">Năm xuất bản:</td>
                          <td className="py-2">{book.publishedYear}</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-500">Phiên bản:</td>
                          <td className="py-2">{book.edition}</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-500">Số trang:</td>
                          <td className="py-2">{book.pages}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Mô tả</h3>
                    <p className="text-gray-600">{book.description}</p>
                    <h3 className="text-lg font-medium mt-6 mb-4">Đánh giá</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill={i < Math.floor(book.rating) ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">{book.rating}/5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'request' && (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 heading-gradient">Yêu cầu bản dịch</h2>
                {book.id && <RequestForm bookId={book.id.toString()} />}
              </div>
            )}
          </div>

          {/* Related Books */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold heading-gradient">Sách liên quan</h2>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center group"
              >
                Xem thêm
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {book.relatedBooks.map((relatedBook) => (
                <div key={relatedBook.id} className="book-card animate-fade-in-up">
                  <div className="book-cover">
                    <img
                      src={relatedBook.cover}
                      alt={relatedBook.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                    <div className="book-specialty">{relatedBook.specialty}</div>
                  </div>
                  <div className="book-info">
                    <h3 className="book-title">
                      <a href={`/books/${relatedBook.id}`}>{relatedBook.title}</a>
                    </h3>
                    <div className="book-actions">
                      <a href={`/books/${relatedBook.id}`} className="preview-link">
                        Xem chi tiết
                      </a>
                      <button
                        onClick={() => console.log(`Requesting book: ${relatedBook.title}`)}
                        className="request-button"
                      >
                        Yêu cầu bản dịch
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookPreviewPage;