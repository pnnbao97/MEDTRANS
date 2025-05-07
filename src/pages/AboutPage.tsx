import React from 'react';
import { ChevronRight, Check, Book, Users, Target, Clock, Award } from 'lucide-react';

const AboutPage = () => {
  // Các mốc phát triển quan trọng
  const milestones = [
    {
      year: '2023',
      title: 'Khởi nguồn ý tưởng',
      description: 'Một nhóm bác sĩ và giảng viên nhận thấy rào cản ngôn ngữ trong tiếp cận tri thức y khoa quốc tế tại Việt Nam và hình thành ý tưởng về MedTrans.',
      icon: <Clock className="h-6 w-6" />
    },
    {
      year: '2024',
      title: 'Thành lập dự án',
      description: 'MedTrans chính thức được thành lập, quy tụ đội ngũ các bác sĩ, chuyên gia y khoa và biên dịch viên chuyên nghiệp từ khắp cả nước.',
      icon: <Users className="h-6 w-6" />
    },
    {
      year: '2024',
      title: 'Xuất bản bản dịch đầu tiên',
      description: 'Hoàn thành bản dịch đầu tiên của cuốn "Giải phẫu học Gray" - một tài liệu y khoa cơ bản và quan trọng cho sinh viên y khoa.',
      icon: <Book className="h-6 w-6" />
    },
    {
      year: '2025',
      title: 'Mở rộng danh mục',
      description: 'Phát triển danh mục lên hơn 10 đầu sách quan trọng thuộc nhiều chuyên ngành y khoa khác nhau.',
      icon: <Target className="h-6 w-6" />
    },
    {
      year: '2025',
      title: 'Giải thưởng đầu tiên',
      description: 'Nhận giải thưởng "Dự án khởi nghiệp vì cộng đồng" do Hiệp hội Các trường Đại học Y Dược Việt Nam trao tặng.',
      icon: <Award className="h-6 w-6" />
    }
  ];

  // Các giá trị cốt lõi
  const coreValues = [
    {
      title: 'Chính xác',
      description: 'Đảm bảo tính chính xác cao nhất trong dịch thuật y khoa, không chỉ về mặt ngôn ngữ mà còn về kiến thức chuyên môn.'
    },
    {
      title: 'Rõ ràng',
      description: 'Truyền tải kiến thức phức tạp một cách rõ ràng, dễ hiểu mà không làm mất đi tính học thuật và chuyên môn.'
    },
    {
      title: 'Cập nhật',
      description: 'Ưu tiên dịch thuật những tài liệu mới nhất, được cập nhật thường xuyên để đảm bảo kiến thức y khoa luôn hiện đại.'
    },
    {
      title: 'Tiếp cận',
      description: 'Nỗ lực đưa tri thức y khoa đến với đông đảo sinh viên, bác sĩ và nhân viên y tế trên toàn quốc.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Về MedTrans</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl">
            Hành trình đưa tri thức y khoa quốc tế đến với cộng đồng y tế Việt Nam thông qua những bản dịch chất lượng cao.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Mission Section */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in-up">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="/api/placeholder/800/600" 
                    alt="Sứ mệnh MedTrans" 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="badge mb-4">Sứ mệnh</div>
                  <h2 className="text-2xl font-bold mb-4 heading-gradient">Xóa bỏ rào cản ngôn ngữ</h2>
                  <p className="text-gray-600 mb-6">
                    MedTrans ra đời với sứ mệnh thúc đẩy sự phát triển của nền y học Việt Nam thông qua việc xóa bỏ rào cản ngôn ngữ trong tiếp cận tri thức y khoa toàn cầu.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Chúng tôi tin rằng việc cung cấp các tài liệu y khoa chất lượng cao bằng tiếng Việt sẽ giúp sinh viên, bác sĩ và nhân viên y tế Việt Nam tiếp cận với kiến thức hiện đại, đồng thời góp phần nâng cao chất lượng đào tạo và thực hành y khoa tại Việt Nam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Vision Section */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in-up">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/2">
                  <img 
                    src="/api/placeholder/800/600" 
                    alt="Tầm nhìn MedTrans" 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="badge mb-4">Tầm nhìn</div>
                  <h2 className="text-2xl font-bold mb-4 heading-gradient">Nâng tầm y học Việt Nam</h2>
                  <p className="text-gray-600 mb-6">
                    MedTrans hướng đến việc trở thành nguồn tài nguyên tin cậy và toàn diện nhất về tài liệu y khoa bằng tiếng Việt, đáp ứng nhu cầu học tập và thực hành của cộng đồng y tế Việt Nam.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Chúng tôi mong muốn xây dựng một cộng đồng học thuật y khoa sôi động, nơi tri thức được chia sẻ rộng rãi và không bị hạn chế bởi rào cản ngôn ngữ, góp phần đưa nền y học Việt Nam hội nhập sâu rộng với y học thế giới.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 heading-gradient text-center">Giá trị cốt lõi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <Check className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3 text-blue-800">{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Journey Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 heading-gradient text-center">Hành trình phát triển</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative animate-fade-in-up" style={{animationDelay: `${index * 0.3}s`}}>
                    <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Timeline Dot */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                        <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center border-4 border-white shadow-lg">
                          {milestone.icon}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                          <div className="md:hidden flex items-center mb-4">
                            <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
                              {milestone.icon}
                            </div>
                            <h3 className="text-xl font-bold text-blue-800">{milestone.year}</h3>
                          </div>
                          <h3 className="text-xl font-bold text-blue-800 hidden md:block">{milestone.year}</h3>
                          <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                      
                      {/* Empty Space for Timeline Layout */}
                      <div className="md:w-5/12"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg shadow-lg overflow-hidden text-white">
              <div className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Đồng hành cùng MedTrans</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto">
                  Dù bạn là sinh viên y khoa, bác sĩ, nhân viên y tế hay chỉ đơn giản là người quan tâm đến sức khỏe, MedTrans mong muốn được đồng hành cùng bạn trong hành trình khám phá tri thức y học.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/books" className="btn-primary shine-effect">
                    Khám phá thư viện
                  </a>
                  <a href="/team" className="bg-white text-blue-900 hover:bg-blue-100 transition-colors duration-300 font-medium py-2 px-6 rounded-md flex items-center shine-effect">
                    Gặp gỡ đội ngũ
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;