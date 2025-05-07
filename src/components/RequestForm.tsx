import React, { useState } from 'react';
import { Send, BookOpen, AlertCircle } from 'lucide-react';

interface RequestFormProps {
  bookId: string;
}

const RequestForm: React.FC<RequestFormProps> = ({ bookId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    reason: '',
    agreeToTerms: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
    // Clear error when checkbox is changed
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên của bạn';
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập địa chỉ email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    if (!formData.profession) newErrors.profession = 'Vui lòng chọn nghề nghiệp';
    if (!formData.reason.trim()) newErrors.reason = 'Vui lòng nhập lý do yêu cầu';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'Bạn cần đồng ý với điều khoản dịch vụ';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', { ...formData, bookId });
      // Here you would typically send the data to your API
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Yêu cầu đã được gửi!</h3>
        <p className="text-gray-600">
          Cảm ơn bạn đã gửi yêu cầu dịch sách. Chúng tôi sẽ xem xét và phản hồi trong thời gian sớm nhất.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-color hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
      <div className="flex items-center mb-6">
        <BookOpen className="h-6 w-6 text-primary-color mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Yêu cầu bản dịch đầy đủ</h3>
      </div>
      
      <div className="mb-4 p-3 bg-blue-50 rounded-md flex items-start">
        <AlertCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-blue-700">
          Chúng tôi sẽ ưu tiên dịch các tài liệu được yêu cầu nhiều nhất. Mã sách: <span className="font-medium">{bookId}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`block w-full rounded-md shadow-sm sm:text-sm ${
              errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-color focus:border-primary-color'
            }`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`block w-full rounded-md shadow-sm sm:text-sm ${
              errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-color focus:border-primary-color'
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
            Nghề nghiệp <span className="text-red-500">*</span>
          </label>
          <select
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            className={`block w-full rounded-md shadow-sm sm:text-sm ${
              errors.profession ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-color focus:border-primary-color'
            }`}
          >
            <option value="">-- Chọn nghề nghiệp --</option>
            <option value="doctor">Bác sĩ</option>
            <option value="nurse">Y tá</option>
            <option value="pharmacist">Dược sĩ</option>
            <option value="student">Sinh viên y khoa</option>
            <option value="researcher">Nhà nghiên cứu</option>
            <option value="other">Khác</option>
          </select>
          {errors.profession && <p className="mt-1 text-sm text-red-600">{errors.profession}</p>}
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
            Lý do yêu cầu <span className="text-red-500">*</span>
          </label>
          <textarea
            id="reason"
            name="reason"
            rows={4}
            value={formData.reason}
            onChange={handleChange}
            placeholder="Vui lòng chia sẻ lý do bạn cần bản dịch của tài liệu này và nó sẽ được sử dụng như thế nào..."
            className={`block w-full rounded-md shadow-sm sm:text-sm ${
              errors.reason ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-color focus:border-primary-color'
            }`}
          />
          {errors.reason && <p className="mt-1 text-sm text-red-600">{errors.reason}</p>}
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleCheckboxChange}
              className="focus:ring-primary-color h-4 w-4 text-primary-color border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="agreeToTerms" className={`font-medium ${errors.agreeToTerms ? 'text-red-700' : 'text-gray-700'}`}>
              Tôi đồng ý với <a href="#" className="text-primary-color hover:text-secondary-color underline">điều khoản dịch vụ</a> và <a href="#" className="text-primary-color hover:text-secondary-color underline">chính sách bảo mật</a>
            </label>
            {errors.agreeToTerms && <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-color hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transform transition-all hover:-translate-y-1"
          >
            <Send className="h-5 w-5 mr-2" />
            Gửi yêu cầu
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
